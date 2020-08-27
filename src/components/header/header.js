import React from 'react';
import logo from '../../imgs/logo.png';
import './header.css';
export default function Header() {
  return (
    <div className="container-fluid">
      <nav className="navbar  mt-3 ml-5">
        <a className="navbar-brand" >
          <img src={logo} id="logo" />
        </a>
      </nav>
    </div>
  )
};
