'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  
  // Added state handlers for request states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('http://localhost:1111/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed.');
      }

      console.log('User registered successfully!', data);
      setSuccess(true);
      
      // Clear inputs upon successful account creation
      setName('');
      setEmail('');
      setPhone('');
      setPassword('');
    } catch (err: any) {
      setError(err.message || 'Unable to reach the server. Make sure NestJS is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-slate-50 dark:bg-slate-950">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl shadow-slate-100 dark:shadow-none">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Create Account</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Register to unlock fast checkout pipelines</p>
        </div>
        
        {/* Error Alert Box */}
        {error && (
          <div className="p-3 text-sm text-red-600 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-xl">
            {error}
          </div>
        )}

        {/* Success Alert Box */}
        {success && (
          <div className="p-3 text-sm text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 rounded-xl">
            Account created successfully! You can now sign in.
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Full Name</label>
            <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-slate-100" placeholder="Kayode Obi" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Email Address</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-slate-100" placeholder="name@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Phone Number</label>
            <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-slate-100" placeholder="+234 800 000 0000" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-slate-100" placeholder="••••••••" />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 bg-amber-600 hover:bg-amber-700 disabled:bg-amber-800/50 text-white font-medium rounded-xl transition-colors duration-200"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>
        <p className="text-center text-sm text-slate-500">
          Already have an account? <Link href="/auth/login" className="text-amber-600 hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
}