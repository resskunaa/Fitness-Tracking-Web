import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 px-4 md:px-6 py-16 text-white flex flex-col gap-16 items-center max-w-none">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 w-full max-w-6xl">
        {/* Image */}
        <div className="md:flex-1 w-full max-w-md h-[400px] md:h-auto">
          <img
            src="about.jpg"
            alt="Fitness Hero"
            className="rounded-xl shadow-lg object-cover w-full h-full fade-in"
          />
        </div>

        {/* Text Content */}
        <div className="md:flex-1 max-w-xl space-y-8 text-center md:text-left h-full flex flex-col justify-center">
          <img
            src="/fitsynclogo.png"
            alt="FitSync Logo"
            className="w-28 h-28 object-contain mx-auto md:mx-0"
          />

          <h1 className="text-5xl font-bold text-red-500">About FitSync</h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            FitSync is your ultimate fitness companion. We empower you to achieve your goals by providing personalized workout plans, progress tracking, and quality fitness gear all in one place.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Our mission is to make fitness accessible and enjoyable for everyone, whether you're a beginner or a seasoned athlete.
          </p>
        </div>
      </div>

      {/* 3-Image Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {['/hero2.png', '/hero3.png', '/hero4.jpg'].map((img, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl shadow-lg transform transition duration-500 hover:scale-105 fade-in"
            style={{ animationDelay: `${idx * 0.2}s` }}
          >
            <img
              src={img}
              alt={`Fitness ${idx + 1}`}
              className="w-full h-72 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
