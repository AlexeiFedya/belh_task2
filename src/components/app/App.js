import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'

import  HomePage  from '../../pages/home-page';
import NewsPage from '../../pages/news-page'
import ProfilePage from '../../pages/profile-page'
import HeaderLayout from '../header/header-layout'
import FooterCompany from '../footer-company/footer-company'
import AuthoPage from '../../pages/autho-page'
import { Login } from '../../actions/actions';

import './app.css'

const  App = ({Login}) => {
  const auth = localStorage.getItem('auth');
  if(auth) {
    Login();
  }
  return (
    <main className='App background-main'>
      <HeaderLayout/>
      <Switch>
        <Route
          path='/'
          component={HomePage}
          exact/>

        <Route
          path='/news'
          component={NewsPage}/>    

        <Route
          path='/profile'
          component={ProfilePage}/>

          <Route
          path='/auth'
          component={AuthoPage}/>  
          <Redirect to='/' />
      </Switch>
      <FooterCompany/>
    </main>
  );
}

const mapDispatchToProps = {
  Login
};


export default connect(null, mapDispatchToProps)(App);

