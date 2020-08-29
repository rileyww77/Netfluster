import React, { Component } from 'react';
import { connect } from 'react-redux'

class MovieList extends Component {


    componentDidMount() {
        this.getMovies()
    }

    getMovies = () => {
        this.props.dispatch({ type: 'FETCH_MOVIES' })
    }

    handleMovieDetail = (id) => {
        let movieToSend = id
        console.log(movieToSend)
        this.props.dispatch ({ type: 'SET_DETAIL', payload: movieToSend})
        this.props.history.push(`/details`)
    }

    render() {
        return (
            <div>
                {this.props.reduxState.moviesReducer.map((movie) => {
                    return (
                        <div key={movie.id}>
                            <p>{movie.title}</p>
                            <img src={movie.poster} alt='movie poster' onClick={() => this.handleMovieDetail(movie.id)}></img>
                        </div>
                    )
                })}
            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieList);
