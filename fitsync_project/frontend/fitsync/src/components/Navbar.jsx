import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-zinc-900 text-white px-6 py-4 flex justify-between items-center w-full fixed top-0 left-0 z-50 shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/fitsynclogo.png" alt="FitSync Logo" className="w-8" />
        <span className="text-xl font-bold text-red-500">FitSync</span>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 text-sm font-medium">
        <Link to="/" className="hover:text-red-500 transition">Home</Link>
        <Link to="/about" className="hover:text-red-500 transition">About</Link>
        <Link to="/login" className="hover:text-red-500 transition">Login</Link>
        <Link to="/register" className="hover:text-red-500 transition">Register</Link>
        <Link to="/dashboard/history" className="hover:text-red-500 transition">History</Link>
        <a href="#contact" className="hover:text-red-500 transition">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
