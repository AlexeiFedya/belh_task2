import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import { Logout } from '../../actions/actions';
import icon from './logo1.svg'


import './header-layout.css'

const HeaderLayout = ({ auth, Logout }) => {
  //const auth = JSON.parse(localStorage.getItem('auth'));

  console.log(auth)

    return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to='/'>
            <img src={icon} alt="logo"/>
        </Link>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link nav-text" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-text" to='/profile'>Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-text" to='/news'>News</Link>
            </li>
          </ul>

          {auth.auth && <div className='float-right'>
            <div className="text" style={{ cursor: 'pointer'}} onClick={() => {Logout(); localStorage.setItem('auth', false)}}>
              Logout
            </div>
          </div>}

          {!auth.auth && <div className='float-right'>
            <Link className="nav-link nav-text" to='/auth'>Login</Link>
          </div>}
        </div>
      </nav>
    </div>
        
        
    )
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

const mapDispatchToProps = {
  Logout
};


export default connect(mapStateToProps, mapDispatchToProps)(HeaderLayout);