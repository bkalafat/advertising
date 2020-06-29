import React, { useState } from 'react';
import Router from 'next/router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Description, Title } from '../../components/common/title/index';
import { FormGroup, Input, Label, CustomInput } from 'reactstrap';
import InputBox from '../../components/common/input/index';
import Image from '../../components/common/image/index';
import GoogleImg from '../../public/assets/images/login/google.png';
import Facebook from '../../public/assets/images/login/facebook.png';
import Twitter from '../../public/assets/images/login/twitter.png';
import Check from '../../public/assets/images/login/check.png';
import { X } from 'react-feather';

// Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setErrors] = useState('');
    const [errorCreate, setErrorsCreate] = useState('');
    const [success, setSuccess] = useState(false);

    const createAccountFirebase = e => {
        e.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                setSuccess(!success)
                // if (res.user) Auth.setLoggedIn(true);
            })
            .catch(e => {
                setErrorsCreate(e.message);
            });
    };

    const loginWithFirebase = e => {
        e.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                // if (res.user) Auth.setLoggedIn(true);
                setSuccess(!success)
            })
            .catch(e => {
                setErrors(e.message);
            });
    };

    const loginWithGoogleFirebase = e => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(socialAuthUser => {
            setSuccess(!success)
            // this.props.history.push(ROUTES.HOME);
        }).catch(error => {
            setErrors(error.message);
        });
        e.preventDefault();
    }

    const loginWithFacebookFirebase = e => {
        const facebookProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(facebookProvider).then(socialAuthUser => {
            setSuccess(!success)
            // this.props.history.push(ROUTES.HOME);
        }).catch(error => {
            setErrors(error.message);
        });
        e.preventDefault();
    }

    const loginWithTwitterFirebase = e => {
        const twitterProvider = new firebase.auth.TwitterAuthProvider();
        firebase.auth().signInWithPopup(twitterProvider).then(socialAuthUser => {
            setSuccess(!success)
            // this.props.history.push(ROUTES.HOME);
        }).catch(error => {
            setErrors(error.message);
        });
        e.preventDefault();
    }

    const closeSuccesPopup = () => {
        window.location.reload();
    }

    return (
        <div className="login-register-outer">
            <Tabs>
                <TabList>
                    <Tab>Login</Tab>
                    <Tab>Register</Tab>
                </TabList>

                <TabPanel>
                    <div className="tabfirst-block">
                        <Title Class="tab-title" Name="Welcome BusLine" />
                        <Description Class="tab-dec" Name="Please login to continue" />
                        <button type="button" className="google login-btn1" onClick={(e) => loginWithGoogleFirebase(e)}>
                            <Image Path={GoogleImg} Class="login-img" />
                            Sign in with Google
                        </button>
                        <button type="button" className="twitter login-btn1" onClick={(e) => loginWithTwitterFirebase(e)}>
                            <Image Path={Twitter} Class="login-img" />
                            Sign in with Twitter
                        </button>
                        <button type="button" className="facebook login-btn1" onClick={(e) => loginWithFacebookFirebase(e)}>
                            <Image Path={Facebook} Class="login-img" />
                            Sign in with Facebook
                        </button>
                        <div className="form-wrapper">
                            <FormGroup>
                                <InputBox
                                    Type="text"
                                    Name="email"
                                    PlaceHolder="Email Address"
                                    ChangeValue={setEmail}
                                />
                            </FormGroup>
                            <FormGroup>
                                <InputBox
                                    Type="password"
                                    Name="password"
                                    PlaceHolder="Password"
                                    ChangeValue={setPassword}
                                />
                                <span className="errorFirebase">{error}</span>
                            </FormGroup>


                            <FormGroup className="checkbox-password">
                                <CustomInput
                                    type="checkbox"
                                    id="exCustomCheckbox"
                                    label="Remember Me"
                                />
                                <button type="button" className="forget-password">Forget Password</button>
                            </FormGroup>
                            <button type="button" className="login-btn gradient-color" onClick={loginWithFirebase}>Login</button>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="tabfirst-block">
                        <Title Class="tab-title" Name="Welcome BusLine" />
                        <Description Class="tab-dec" Name="Just register to join with us" />
                        <div className="form-wrapper">
                            <FormGroup>
                                <InputBox
                                    Type="text"
                                    Name="name"
                                    PlaceHolder="Full Name"
                                />
                            </FormGroup>
                            <FormGroup>
                                <InputBox
                                    Type="text"
                                    Name="email"
                                    PlaceHolder="Email Address"
                                    ChangeValue={setEmail}
                                />
                            </FormGroup>
                            <FormGroup>
                                <InputBox
                                    Type="password"
                                    Name="password"
                                    PlaceHolder="Password"
                                    ChangeValue={setPassword}
                                />
                                <span className="errorFirebase">{errorCreate}</span>
                            </FormGroup>
                            <button
                                type="button"
                                className="login-btn gradient-color"
                                onClick={createAccountFirebase}
                            >Register</button>
                        </div>
                    </div>
                </TabPanel>

            </Tabs>
            <div className="login-close gradient-color" onClick={props.Click}>
                <X />
            </div>
            {success &&
                <div className="login-success-popup">
                    <div className="login-success-box">
                        <div className="login-check-images">
                            <Image Path={Check} />
                        </div>
                        <div className="login-success-content">
                            <Title Class="login-success-title" Name="Success" />
                            <Description Class="login-success-dec" Name="Thank you for visit our website." />
                            <button
                                type="button"
                                className="login-success-btn"
                                onClick={() => Router.push('/')}
                            > Ok
                            </button>
                        </div>
                    </div>
                </div>
            }

            <style jsx>
                {`
                    .errorFirebase{
                        color: red;
                        margin-top: 10px;
                        display: block;
                    }
                `}
            </style>

        </div>
    );
}

export default Login;
