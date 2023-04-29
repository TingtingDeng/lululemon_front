import React from 'react';

const Login = ({ email, password, error, onEmailChange, onPasswordChange, onSubmit }) => (
    <form onSubmit={onSubmit}>
        <div>
            <label htmlFor="username">Email:</label>
            <input type="text" id="username" value={email} onChange={onEmailChange} />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={onPasswordChange} />
        </div>
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
    </form>
);

export default Login;