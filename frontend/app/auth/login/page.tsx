'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:1111/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Invalid email or password.');
      }

      // Store token for session tracking across your pipeline pages
      if (data.access_token) {
        localStorage.setItem('token', data.access_token);
      } else if (data.token) {
        localStorage.setItem('token', data.token);
      }

      console.log('Login successful!', data);
      
      // Redirect user straight to your fresh management panel
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please check your backend connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-slate-50 dark:bg-slate-950">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl shadow-slate-100 dark:shadow-none">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Welcome Back</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Enter your details to manage your kitchen orders</p>
        </div>

        {error && (
          <div className="p-3 text-sm text-red-600 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-xl">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Email Address</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-slate-100" placeholder="name@example.com" />
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
            {loading ? 'Verifying...' : 'Sign In'}
          </button>
        </form>
        <p className="text-center text-sm text-slate-500">
          New to the platform? <Link href="/auth/signup" className="text-amber-600 hover:underline">Create an account</Link>
        </p>
      </div>
    </div>
  );
}