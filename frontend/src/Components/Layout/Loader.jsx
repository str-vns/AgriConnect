import React from 'react';

const Loader = () => {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
      />
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-grow text-warning" style={{ width: '5rem', height: '5rem' }} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
