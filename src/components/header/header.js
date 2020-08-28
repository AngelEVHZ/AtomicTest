import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../imgs/logo.png';
import './header.css';
export default function Header() {
  return (
    <div className="container-fluid header">
      <nav className="navbar  mt-3 ml-5 mt-0">
      <Link to="/">
        <a className="navbar-brand" >
          <img src={logo} id="logo" />
        </a>
        </Link>
      </nav>
    </div>
  )
};
