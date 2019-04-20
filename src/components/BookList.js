import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookList extends Component {
  render() {
    const { books, shelfTitle, defaultShelf, updateShelf } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book =>
            <Book
              key={book.id}
              book={book}
              defaultShelf={defaultShelf}
              updateShelf={updateShelf}
            />
          )}
        </ol>
      </div>
      </div>
    );
  }
}

BookList.propTypes = {
  shelfTitle: PropTypes.string.isRequired,
  defaultShelf: PropTypes.string.isRequired,
  updateShelf: PropTypes.func.isRequired
}

export default BookList;