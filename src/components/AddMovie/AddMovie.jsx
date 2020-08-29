import React, { Component } from 'react';

class AddMovie extends Component {

    state={
        title: '',
        poster: '',
        description: '',
        genre_id: 0
    }

    handleGenre = (event) => {
        switch (event.target.value){
            case 'adventure':
                this.setState({
                    genre_id: 1
                })
                break;
            case 'animated':
                this.setState({
                    genre_id: 2
                })
                break;
                case 'biographical':
                this.setState({
                    genre_id: 3
                })
                break;
                case 'comedy':
                this.setState({
                    genre_id: 4
                })
                break;
                case 'disaster':
                this.setState({
                    genre_id: 5
                })
                break;
                case 'drama':
                this.setState({
                    genre_id: 6
                })
                break;
                case 'epic':
                this.setState({
                    genre_id: 7
                })
                break;
                case 'fantasy':
                this.setState({
                    genre_id: 8
                })
                break;
                case 'musical':
                this.setState({
                    genre_id: 9
                })
                break;
                case 'romantic':
                this.setState({
                    genre_id: 10
                })
                break;
                case 'science_fiction':
                this.setState({
                    genre_id: 11
                })
                break;
                case 'space-opera':
                this.setState({
                    genre_id: 12
                })
                break;
                case 'superhero':
                this.setState({
                    genre_id: 13
                })
                break;
                default:
        }
    }

    handleCancel = () => {
        this.props.history.push('/')
    }

    handleSave = () => {

    }


    render() {
        return (
            <div>
                <br />
                <input placeholder="Movie Title"></input>
                <br />
                <br />
                <input placeholder="Poster URL"></input>
                <br />
                <br />
                <textarea id="description" name="description" placeholder="description" rows="4" cols="50" onChange = {(event) => this.handleChangeFor(event)}></textarea>
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
                            <button onClick={this.handleCancel}>Cancel</button>
                            <button onClick={this.handleSave}>Save</button>
            </div>
        );
    }
}

export default AddMovie;
