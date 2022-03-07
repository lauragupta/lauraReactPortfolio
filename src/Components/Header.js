import React from 'react';
import NavTabs from './NavTabs';
import './Header.css'

function Header(props) {

  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      <a className="navbar-brand" href="#">Laura Gupta</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapser" aria-controls="navbarCollapser" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapser">
           <NavTabs currentPage={props.currentPage} handlePageChange={props.handlePageChange} />
      </div>
    </nav>
  );
}

export default Header;