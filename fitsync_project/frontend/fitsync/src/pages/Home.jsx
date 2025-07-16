import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      
      {/* MAIN SECTION */}
      <div className="flex flex-col lg:flex-row flex-1">
        <div className="lg:flex-1 h-96 lg:h-auto">
          <img
            src="/download.jpeg"
            alt="FitSync Workout"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:flex-1 h-full flex flex-col justify-center items-center 
        bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 px-8 py-40 text-center">
          <img
            src="/logo.png"
            alt="FitSync Logo"
            className="w-60 mb-9"
          />

          <h1 className="text-5xl font-bold text-red-500 mb-10">
            IT'S TIME TO GET IN SHAPE !
          </h1>

          <p className="text-gray-300 text-lg max-w-md mb-8">
            FitSync helps you get in shape. We provide personalized workout plans, tracking, motivation, 
            and fitness gear everything in one place.
          </p>

          <Link to="/register">
            <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-3 
            rounded-lg text-lg shadow-xl transition">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <footer
        id="contact"
        className="bg-zinc-900 text-white py-10 px-6 border-t border-zinc-700"
      >
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-2xl font-bold text-red-500">Contact Us</h2>
          <p className="text-gray-300">
            Got questions or suggestions? We'd love to hear from you!
          </p>
          <p className="text-gray-400">
            📞 Phone: <a href="tel:+9779800000000" className="hover:text-red-400">+977-9849860707</a><br />
            📧 Email: <a href="mailto:fitsync@email.com" className="hover:text-red-400">fitsync@email.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
