import React, { Component } from 'react';
import { connect } from 'react-redux'

class MovieList extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieList);
