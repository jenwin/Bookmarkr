import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookList from './BookList';

class Main extends Component {
  render() {
    const { books, updateShelf } = this.props

    return (
      <li className="list-books-shelf">
        <div className="list-books">
          <div className="list-books-title">
            <h1 className="myreads">MyReads</h1>
          </div>
            <div className="list-books-content">
              <BookList
                shelfTitle='Currently Reading'
                books={books.filter(book => book.shelf === 'currentlyReading')}
                defaultShelf='currentlyReading'
                updateShelf={updateShelf}
              />
              <BookList
                shelfTitle='Want To Read'
                books={books.filter(book => book.shelf === 'wantToRead')}
                defaultShelf='wantToRead'
                updateShelf={updateShelf}
              />
              <BookList
                shelfTitle='Read'
                books={books.filter(book => book.shelf === 'read')}
                defaultShelf='read'
                updateShelf={updateShelf}
              />
            </div>
            <Link to='/search' className="open-search">
              <button>Add a book</button>
            </Link>
          </div>
        </li>
    );
  }
}

Main.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
}

export default Main;