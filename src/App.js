import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './utils/BooksAPI';
import Main from './components/Main';
import Search from './components/Search';
import NotFound from './components/NotFound';
import './App.css';

class App extends Component {
  state = {
    books: [],
    loadError: false
  }

  getBooksAPI() {
    BooksAPI.getAll()
      .then(books => {
        this.setState({
          books
        });
    }).catch(err => {
      this.setState({
        loadError: true
      });
    })
  }

  componentDidMount() {
    this.getBooksAPI();
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        this.getBooksAPI();
      }).catch(err => {
        this.setState({
          loadError: true
        });
      })
  }

  render() {
    const { books } = this.state;

    return (
      <Switch>
        <Route exact path='/' render={() => (
          <Main
            books={books}
            updateShelf={this.updateShelf}
          />
        )} />
        <Route exact path='/search' render={() => (
          <Search
            books={books}
            updateShelf={this.updateShelf}
          />
        )} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

App.propTypes = {
  book: PropTypes.object,
  shelf: PropTypes.string,
  books: PropTypes.array,
  updateShelf: PropTypes.func
}

export default App;