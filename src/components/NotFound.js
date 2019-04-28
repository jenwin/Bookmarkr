import React from 'react';

const NotFound = () => {
  const notFoundStyles = {
    fontSize: 20,
    textAlign: 'center'
  }

  return (
    <div
      className="not-found-page"
      style={ notFoundStyles }
    >
      <div className="not-found-icon">
        <i className="frown outline icon"></i>
      </div>
      <div className="not-found-para">
        <p>Oops! This page was not found.</p>
      </div>
      <div>
        <a
          href="http://localhost:3000/search"
          className="not-found-link"
        >Search for a book</a>
      </div>
      <div>
        <a
          href="http://localhost:3000/"
          className="not-found-link"
        >Go to bookshelf</a>
      </div>
    </div>
  );
};

export default NotFound;