import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('SET_DETAIL', setDetail);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//used to fetch one movie from the server
function* setDetail(action) {
    try {
        let response = yield axios.get(`/api/movie/${action.payload}`);
        console.log(response.data);
        yield put({ type: 'PUT_DETAIL', payload: response.data });
    } catch (error) {
        console.log('error in setting movie detail (index)', error)
    }
}

//used to get the movies from the server
function* fetchMovies() {
    try {
        let response = yield axios.get('/api/movie');
        console.log(response.data);
        yield put({ type: 'SET_MOVIES', payload: response.data });
    } catch (error) {
        console.log('error in getting movies(index)', error)
    }
}

// Used to store movies returned from the server
const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genresReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const movieDetailReducer = (state = [], action) => {
    if (action.type === 'PUT_DETAIL') {
        return action.payload
    } return state
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        moviesReducer,
        genresReducer,
        movieDetailReducer
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
