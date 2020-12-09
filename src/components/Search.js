import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { throttle } from 'throttle-debounce';
import PropTypes from 'prop-types';
import * as BooksAPI from '../utils/BooksAPI';
import Book from './Book';

class Search extends Component {
  state = {
    query: '',
    searchResults: [],
    loadError: false
  }

   onSearchSubmit(e) {
    e.preventDefault();
  }

  clearQuery = () => {
    this.setState({
      query: '',
      searchResults: []
    });
  }

  updateQuery = query => {
    if (query) {
      this.setState({
        query
      });
      this.searchResults(query);
    } else {
      this.clearQuery();
    }
  }

  //checks for errors
  //if no errors, show results
  searchResults = throttle(300, query => {
    if (query) {
      BooksAPI.search(query)
        .then(searchResults => {
          if (searchResults.error) {
            this.setState({
              searchResults: []
            });
         } else {
            this.setState({
              searchResults
            });
         }}).catch(err => {
          this.setState({
            loadError: true
          });
        })
      }
    })

  render() {
    const { query, searchResults } = this.state
    const { updateShelf, books } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              <form onSubmit={this.onSearchSubmit}>
                <input
                  type="text"
                  value={query}
                  placeholder="Search by title or author"
                  onChange={e => this.updateQuery(e.target.value)}
                />
              </form>
            </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { query ? (
              searchResults.map(book => {
                let defaultShelf;
                  const bookState = books.find(b => b.id === book.id);
                    if (bookState) {
                      defaultShelf = bookState.shelf
                    } else {
                      defaultShelf = 'none'
                    }
                  return (
                    <Book
                      key={book.id}
                      book={book}
                      defaultShelf={defaultShelf}
                      updateShelf={updateShelf}
                    />
                  )}
              )) : (query: '')
            }
          </ol>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  query: PropTypes.string,
  searchResults: PropTypes.array,
  updateShelf: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
}

export default Search;