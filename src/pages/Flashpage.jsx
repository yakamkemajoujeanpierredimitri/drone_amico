import React, { useState, useEffect } from 'react';
import splashImg from '../assets/splash.png'; 

const SplashScreen = ({ finishLoading }) => {
  // State to manage the transition effect (visible vs fading out)
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // 1. Start the fade-out process after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2500);

    // 2. Actually unmount the component after the fade animation (1s) finishes
    const unmountTimer = setTimeout(() => {
      finishLoading();
    }, 3500); // 2500ms + 1000ms transition time

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, [finishLoading]);

  return (
    <div 
      className={`
        fixed inset-0 z-50 flex items-center justify-center bg-black
        transition-opacity duration-1000 ease-in-out
        ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}
      `}
    >
      <img 
        src={splashImg} 
        alt="Drone Amico" 
        // animate-ken-burns: A custom class we will define in CSS or simulate with duration
        className={`
          w-full h-full object-cover object-center
          transition-transform duration-[4000ms] ease-out
          ${isFading ? 'scale-110 blur-sm' : 'scale-100'} 
        `}
      />
    </div>
  );
};

const HomePage = () => {
  return (
    // Added a fade-in animation to the home page content as well
    <div className="min-h-screen bg-white flex items-center justify-center animate-fade-in">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">Welcome to Drone Amico</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your aerial companion is ready. Explore the dashboard.
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default function Go() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* We keep the SplashScreen in the DOM until it tells us it's done.
         However, we render HomePage 'behind' it immediately so it's ready 
         when the splash fades out.
      */}
      
      {isLoading && <SplashScreen finishLoading={() => setIsLoading(false)} />}
      
      {/* If you want the Home Page to be visible underneath the fading splash, 
         render it always. If you want it to pop in after, render it conditionally.
         Rendering it always looks smoother.
      */}
      <HomePage /> 
    </>
  );
}