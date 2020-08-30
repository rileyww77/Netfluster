import React, { Component } from 'react';
import { connect } from 'react-redux'

class AddMovie extends Component {

    state = {
        title: '',
        poster: '',
        description: '',
        genreId: 0
    }

    handleGenre = (event) => {
        switch (event.target.value) {
            case 'adventure':
                this.setState({
                    genreId: 1
                })
                break;
            case 'animated':
                this.setState({
                    genreId: 2
                })
                break;
            case 'biographical':
                this.setState({
                    genreId: 3
                })
                break;
            case 'comedy':
                this.setState({
                    genreId: 4
                })
                break;
            case 'disaster':
                this.setState({
                    genreId: 5
                })
                break;
            case 'drama':
                this.setState({
                    genreId: 6
                })
                break;
            case 'epic':
                this.setState({
                    genreId: 7
                })
                break;
            case 'fantasy':
                this.setState({
                    genreId: 8
                })
                break;
            case 'musical':
                this.setState({
                    genreId: 9
                })
                break;
            case 'romantic':
                this.setState({
                    genreId: 10
                })
                break;
            case 'science_fiction':
                this.setState({
                    genreId: 11
                })
                break;
            case 'space-opera':
                this.setState({
                    genreId: 12
                })
                break;
            case 'superhero':
                this.setState({
                    genreId: 13
                })
                break;
            default:
        }
    }

    handleCancel = () => {
        this.props.history.push('/')
    }

    handleSave = () => {
        this.props.dispatch({ type: 'POST_MOVIE', payload: this.state})
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handlePosterChange = (event) => {
        this.setState({
            poster: event.target.value
        })
    }

    handleChangeDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    render() {
        return (
            <div>
                <br />
                <input placeholder="Movie Title" onChange={this.handleTitleChange}></input>
                <br />
                <br />
                <input placeholder="Poster URL" onChange={this.handlePosterChange}></input>
                <br />
                <br />
                <textarea id="description" name="description" placeholder="Description" rows="4" cols="50"
                    onChange={(event) => this.handleChangeDescription(event)}></textarea>
                <br />
                <select name="genres" onChange={this.handleGenre}>
                    <option value='adventure'>Adventure</option>
                    <option value='animated'>Animated</option>
                    <option value='biographical'>Biographical</option>
                    <option value='comedy'>Comedy</option>
                    <option value='disaster'>Disaster</option>
                    <option value='drama'>Drama</option>
                    <option value='epic'>Epic</option>
                    <option value='fantasy'>Fantasy</option>
                    <option value='musical'>Musical</option>
                    <option value='romantic'>Romantic</option>
                    <option value='science_fiction'>Science Fiction</option>
                    <option value='space-opera'>Space-Opera</option>
                    <option value='superhero'>Superhero</option>
                </select>
                <button onClick={this.handleSave}>Save</button>
                <button onClick={this.handleCancel}>Cancel</button>
            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AddMovie);
