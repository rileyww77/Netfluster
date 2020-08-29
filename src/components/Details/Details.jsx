import React, { Component } from 'react';
// import Axios from 'axios';
import { connect } from 'react-redux'

class Details extends Component {

    // componentDidMount(){
    //     this.getDetail()
    // }


    render() {

        return (
            <div>
                {this.props.reduxState.movieDetailReducer.map((movie) => {
                    return (
                        <div key={movie.id}>
                            <p>{movie.description}</p>
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

export default connect(mapReduxStateToProps)(Details);
