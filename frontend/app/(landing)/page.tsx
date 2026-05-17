import Header from './LD/Header';
import Hero from './LD/Hero';
import About from './LD/About';
import Menu from './LD/Menu';
import Contact from './LD/Contact';
// import Footer from './LD/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}