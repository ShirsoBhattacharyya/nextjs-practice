"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Perform signup logic here (API call)
    // On success, redirect to login
    router.push('/login');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Signup</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-2"
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4"
          required 
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
