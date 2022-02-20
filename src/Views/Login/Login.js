import React, { useState } from "react";

import './Login.scss'

const Login = () => {
    return (
        <div className="login-background">
            <div className="login-container row">
                <div className="col-12 text-center login-text ">
                    Login
                </div>
                <div className="form-group">
                    <label >Username</label>
                    <input className="form-control" type="text" placeholder='Enter your username' />
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input className="form-control" type="password" placeholder='Enter your password' />
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        Remember me
                    </label>
                </div>
                <div className="forgot-password">
                    <span>Forgot your password ?</span>
                </div>
                <div className="login">
                    <button className="login-button">Login</button>
                </div>


            </div>
        </div>


    )
}
export default Login;