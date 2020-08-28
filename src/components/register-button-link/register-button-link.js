import React from 'react';
import { Link } from "react-router-dom";
import './register-button-link.css';
export default function RegisterButtonLink() {
  return (
    <Link to="/register">
      <button type="button" className="btn btn-white btn-lg rounded-pill">¡Quiero ser parte!</button>
    </Link>
  )
};
