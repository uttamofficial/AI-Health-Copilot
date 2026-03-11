import React from 'react';
import { SignIn } from '@clerk/react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <SignIn routing="hash" />
    </div>
  );
};

export default Login;
