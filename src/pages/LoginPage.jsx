import React, { useState } from 'react';
import GoogleSvg from '../components/svg/GoogleSvg';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleForgotPassword = () => {

    console.log('Forgot password');
  };

  const handleCreateAccount = () => {
   
    console.log('Create new account');
  };

  const handleSignInWithGoogle = () => {

    console.log('Sign in with Google');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 bg-[url('/public/Background.svg')] bg-cover bg-no-repeat">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 flex justify-center items-center">Login</h1>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center mb-4">
          <button
            className="bg-gray-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md w-full"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
        <div className="flex justify-between items-center mb-4">
          <button
            className="text-blue-500 hover:text-blue-600 font-medium"
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </button>
          <button
            className="text-blue-500 hover:text-blue-600 font-medium"
            onClick={handleCreateAccount}
          >
            Doesn't Have An Account?
          </button>
        </div>
        <button
          className="bg-white hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-md border border-gray-300 flex justify-center items-center w-full"
          onClick={handleSignInWithGoogle}
        >
          <GoogleSvg className="w-5 h-5 mr-2" />
          Sign-in With Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;