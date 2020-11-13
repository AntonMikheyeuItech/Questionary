import React from 'react';
import './index.css';

const NotFound = () => {

  return (
    <div className="notFound">
      <img className="notFound__logo" src="https://itechart-by.s3.amazonaws.com/storage/static/svg/logo.svg" alt="Loading"/>
      <h1 className="notFound__phrase">Page not found</h1>
    </div>
  );
};

export default React.memo(NotFound);
