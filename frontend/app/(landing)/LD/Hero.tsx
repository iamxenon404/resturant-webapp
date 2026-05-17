'use client';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[85vh] text-center px-4 bg-gradient-to-b from-amber-50/50 to-transparent dark:from-amber-950/10">
      <div className="max-w-4xl mx-auto space-y-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-amber-700 bg-amber-100 rounded-full dark:bg-amber-900/30 dark:text-amber-400 uppercase">
          Skip the Middleman • 100% Direct Delivery
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
          Premium Lagos Dining, Delivered <span className="text-amber-600 dark:text-amber-500">Directly</span> to Your Door.
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Experience gourmet local and intercontinental options prepared by master chefs without paying the inflated app marketplace commissions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="#menu" className="w-full sm:w-auto px-8 py-4 text-base font-medium text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow-lg shadow-amber-600/20 transition-all duration-200 text-center">
            Order Fresh Now
          </Link>
          <Link href="/auth/login" className="w-full sm:w-auto px-8 py-4 text-base font-medium border border-slate-300 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl transition-all duration-200 text-center">
            Sign In to Track Orders
          </Link>
        </div>
      </div>
    </section>
  );
}