import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo_stat.svg';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
        {/* Header */}
        <div className="text-center">
          <img
            className="mx-auto h-16 w-auto"
            src={Logo}
            alt="StartupEchoes Logo"
          />
          <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
            Reset Password
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Enter your email address and we'll send you instructions to reset your password.
          </p>
        </div>

        {!isSubmitted ? (
          // Reset Password Form
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-full placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-full text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
              >
                Send Reset Instructions
              </button>
            </div>
          </form>
        ) : (
          // Success Message
          <div className="mt-8 text-center">
            <div className="rounded-full bg-green-100 dark:bg-green-900 p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Check your email
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We've sent password reset instructions to {email}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Didn't receive the email? {' '}
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-red-500 hover:text-red-400 font-medium"
              >
                Click to resend
              </button>
            </p>
          </div>
        )}

        {/* Back to Sign In */}
        <div className="text-center mt-4">
          <Link 
            to="/signin"
            className="text-sm font-medium text-red-500 hover:text-red-400"
          >
            ← Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword; 