import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from "connected-react-router";
import * as actions from "../../store/actions";
import './login.scss';
import {FormattedMessage} from 'react-intl';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
        }
    }

    handleOnChaneInputUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleOnChaneInputPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleLogin = (event) => {

    }
    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {
        return (<div className='login-background d-flex align-items-center'>
            <div className='login-container'>
                <div className='login-content'>
                    <div className='text-center title-login'>Login</div>
                    <div className=' form-group'>
                        <label>Username :</label>
                        <input type="text" className='input-username form-control'
                               placeholder='Enter your username'
                               value={this.state.username}
                               onChange={(event) => {
                                   this.handleOnChaneInputUsername(event)
                               }}/>

                        <label>Password :</label>
                        <div className='input-password '>
                            <input type={this.state.isShowPassword ? 'text' : 'password'}
                                   className='form-control '
                                   placeholder='Enter your password'
                                   value={this.state.password}
                                   onChange={(event) => {
                                       this.handleOnChaneInputPassword(event)
                                   }}/>
                            <span className='icon_eye' onClick={() => {
                                this.handleShowHidePassword()
                            }}>
                                <i className={this.state.isShowPassword ? 'fas fa-eye' : 'fas fa-eye-slash'}></i>
                            </span>

                        </div>
                    </div>
                    <div className='btn-login text-center'>
                        <button className='action-login' onClick={(event) => this.handleLogin(event)}>Log in</button>
                    </div>
                    <div className='text-forget-password'>
                        <span className='text'>Forget your password?</span>
                    </div>
                    <div className='login-with text-center'>
                        <span className='text'>Or login with:</span>
                    </div>
                    <div className='social-login text-center'>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-google-plus-g"></i>
                    </div>
                </div>
            </div>
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
