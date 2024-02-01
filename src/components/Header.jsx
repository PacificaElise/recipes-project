import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <nav className='green'>
      <div className='nav-wrapper'>
        <Link
          to='/'
          className='brand-logo'
        >
          <img
            className='logo'
            src='./chef.png'
            alt='logo'
          />
        </Link>
        <ul
          id='nav-mobile'
          className='right hide-on-med-and-down'
        >
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
