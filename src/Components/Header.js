import React from 'react';
import NavTabs from './NavTabs';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(props) {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Laura Gupta</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
           <NavTabs currentPage={props.currentPage} handlePageChange={props.handlePageChange} />
        </div>
      </div>
    </nav>
  );
}

export default Header;