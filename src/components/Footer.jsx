import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className='page-footer green'>
      <div className='container'>
        <div className='row'>
          <div className='col l6 s12'>
            <h5 className='white-text'>Footer Content</h5>
            <p className='white-text text-lighten-4'>
              You can use rows and columns here to organize your footer content.
            </p>
          </div>
          <div className='col l4 offset-l2 s12'>
            <h5 className='white-text'>Links</h5>
            <ul>
              <li>
                <Link
                  className='white-text text-lighten-3'
                  to='#!'
                >
                  Link 1
                </Link>
              </li>
              <li>
                <Link
                  className='white-text text-lighten-3'
                  to='#!'
                >
                  Link 2
                </Link>
              </li>
              <li>
                <Link
                  className='white-text text-lighten-3'
                  to='#!'
                >
                  Link 3
                </Link>
              </li>
              <li>
                <Link
                  className='white-text text-lighten-3'
                  to='#!'
                >
                  Link 4
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <div className='container'>
          © {new Date().getFullYear()} Copyright Text
          <Link
            className='white-text text-lighten-4 right'
            to='#!'
          >
            More Links
          </Link>
        </div>
      </div>
    </footer>
  );
}
