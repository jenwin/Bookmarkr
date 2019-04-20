import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  render() {
    const { book, updateShelf, defaultShelf } = this.props
    let imageDisplay = book.imageLinks ? book.imageLinks.thumbnail : 'Image Unavailable';
    let author = book.authors ? book.authors : 'Author Unknown';
    let bookTitle = book.title ? book.title : 'Untitled';

    return (
      <li className="list-of-books">
        <div className="book">
          <div className="book-top">
            <div className="book-cover"
              style={{ width: 128, height: 193, backgroundImage: `url(${imageDisplay})`}}
              alt='book cover'>
            </div>
            <div className="book-shelf-changer">
              <select
                value={defaultShelf}
                onChange={e => updateShelf(book, e.target.value)}>
                  <option value="move" disabled>Move to...</option>
                  <option value='currentlyReading'>Currently Reading</option>
                  <option value='wantToRead'>Want to Read</option>
                  <option value='read'>Read</option>
                  <option value='none'>None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{bookTitle}</div>
          <div className="book-authors">{author}</div>
        </div>
      </li>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired,
  defaultShelf: PropTypes.string.isRequired
}

export default Book;