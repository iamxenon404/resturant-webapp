'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sending structured registration payload payload to NestJS auth microservice:', { name, email, phone });
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-slate-50 dark:bg-slate-950">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl shadow-slate-100 dark:shadow-none">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Create Account</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Register to unlock fast checkout pipelines</p>
        </div>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Full Name</label>
            <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Kayode Obi" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Email Address</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="name@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Phone Number</label>
            <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="+234 800 000 0000" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-xl transition-colors duration-200">
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-slate-500">
          Already have an account? <Link href="/auth/login" className="text-amber-600 hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
}