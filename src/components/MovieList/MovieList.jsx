import React, { Component } from 'react';
import { connect } from 'react-redux'

class MovieList extends Component {

    componentDidMount(){
        this.getMovies()
    }

    getMovies = () => {
        this.props.dispatch({ type: 'FETCH_MOVIES'})
    }

    render() {
        return (
            <div>
                {this.props.reduxState.moviesReducer.map((movie) => {
                    return (
                        <>
                        <p key={movie.id}>{movie.title}</p>
                        <img src={movie.poster} alt='movie poster'></img>
                        </>
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
