// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="">login_index</Link>
        </li>
        <li>
          <Link to="/about"></Link>
        </li>
        {/* Add more navigation links for other pages */}
      </ul>
    </nav>
  );
};

export default Navigation;
