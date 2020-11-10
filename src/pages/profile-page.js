import React from 'react';
import { Redirect } from 'react-router-dom';

import MainProfile from '../components/mainProfile/mainProfile'
import {connect} from 'react-redux'

import './home-page.css'


const ProfilePage = ({auth}) => {

  return (!auth.auth
    ? <Redirect to="/auth" />
    : <div className='home-page'>
        <MainProfile/>
    </div>
  );
};


const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(ProfilePage);