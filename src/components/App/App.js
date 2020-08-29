import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList.jsx';
import Details from '../Details/Details.jsx';
import AddMovie from '../AddMovie/AddMovie.jsx'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          <nav>
            <Link to='/'>Home</Link> |
            <Link to='/addmovie'>Add New Movie</Link>
          </nav>

          <Route exact path="/" component={MovieList} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/addmovie" component={AddMovie} />
        </Router>
      </div>
    );
  }
}

export default App;
