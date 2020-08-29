import React, { Component } from 'react';
// import Axios from 'axios';
import { connect } from 'react-redux'

class Details extends Component {

    handleClick = () => {
        this.props.history.push('/');
    }


    render() {
        return (
            <div>
                {this.props.reduxState.movieDetailReducer[0] &&
                    <>
                        <h2>{this.props.reduxState.movieDetailReducer[0].title}</h2>
                        <img src={this.props.reduxState.movieDetailReducer[0].poster} alt='movie poster'></img>
                        <p>{this.props.reduxState.movieDetailReducer[0].description}</p>
                        <h3>Genres:</h3>
                            {this.props.reduxState.movieDetailReducer.map((movie) => {
                               return(
                                <li key={movie.id}>{movie.name}</li>
                               ) 
                            })}
                    </>
                }
                <button onClick={this.handleClick}>Back</button>
            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Details);
