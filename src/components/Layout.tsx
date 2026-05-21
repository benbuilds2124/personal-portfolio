import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Chatbox from './Chatbox';

export default function Layout() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-blue-100 dark:selection:bg-blue-900 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <main className="min-h-[50vh] max-w-5xl mx-auto pt-3 pb-8">
        <Outlet />
      </main>
      <Footer />
      <Chatbox />
    </div>
  );
}
