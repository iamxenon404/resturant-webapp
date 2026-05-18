'use client';

import { useState } from 'react';
import { registerUser } from '@/lib/api';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const data = await registerUser(formData);
      setMessage('Account created successfully! Check your database.');
      console.log('Backend response:', data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input name="name" placeholder="Full Name" onChange={handleChange} required style={{ padding: '8px' }} />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required style={{ padding: '8px' }} />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} required style={{ padding: '8px' }} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required style={{ padding: '8px' }} />
        <button type="submit" style={{ padding: '10px', background: '#0070f3', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Sign Up
        </button>
      </form>

      {message && <p style={{ color: 'green', marginTop: '15px' }}>{message}</p>}
      {error && <p style={{ color: 'red', marginTop: '15px' }}>Error: {error}</p>}
    </div>
  );
}