import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../actions';
import Login from './Login';
import login from "./Login";

const LoginContainer = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');

    const error = useSelector(state => state?.loginReducer.error);
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(login(email, password));

    };

    return (
        <Login
            email={email}
            password={password}
            error={error}
            onEmailChange={event => setEmail(event.target.value)}
            onPasswordChange={event => setPassword(event.target.value)}
            onSubmit={handleSubmit}
        />
    );
};

export default LoginContainer;