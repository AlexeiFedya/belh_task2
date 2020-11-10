import React from 'react';
import {connect} from 'react-redux'

import './authorizat.css'
import { ValidateLog, ValidatePass} from './valid/valid'
import history from '../../history';
import { Login } from '../../actions/actions';


class Authorizat extends React.Component  {    

    state = {
        login: '',
        password: '',
    }

    submitButton = () => {
        const {login, password} = this.state
        console.log(this.state)
        if(login === 'admin' && password === '12345'){
            localStorage.setItem('auth', true);
            history.push('/profile');
            this.props.Login();
        }
        else {
            alert('неверный пароль')
        }
    }


    render () {

        const isValidLog = ValidateLog(this.state.login)
        const isValidPas = ValidatePass(this.state.password)


        console.log(this.state)
        return (
            <div className='container'>
                <div className='row row-cols-1' >
                    <div className='col'>
                        <h1 className='header-text'>Authorization</h1>
                    </div>
    
                    <div className='col'>
                    <form
                        onSubmit={(event) => event.preventDefault()}>

                            <div className="form-group text">
                                <label htmlFor="login">Login</label>
                                <input
                                    type="login"
                                    className={ isValidLog  || this.state.login === "" ? "form-control" : "form-control error"}
                                    id="login"
                                    placeholder="Login"
                                    aria-describedby="loginlHelp"
                                    onChange={(e) => 
                                        this.setState({
                                            // ...this.state,
                                            login: e.target.value.trim().toLowerCase()
                                        })}/>
                            </div>
                            <div className="form-group text">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input 
                                    type="password"
                                    className={ isValidPas  || this.state.password === "" ? "form-control" : "form-control error"}
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                    onChange={(e) => 
                                        this.setState({
                                            // ...this.state,
                                            password: e.target.value.trim()
                                        })}/>
                            </div>
                            <button 
                                type="submit"
                                className="button mt-4"
                                onClick={this.submitButton}
                                disabled={ this.state.login === "" || this.state.password === "" ? true : false}
                                >Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
    
}
// const mapStateToProps = ({auth}) => {
//     return {auth}
// }

const mapDispatchToProps = {
    Login
  };


export default connect(null, mapDispatchToProps)(Authorizat);