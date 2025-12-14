import React, { useState, useEffect } from 'react';
import splashImg from '../assets/splash.png'; 
import { useAuth } from '../context/user.context';
import { NavLink, useNavigation } from 'react-router-dom';
import videoBG from '../assets/girl_moving.mp4'
import { IconUser } from '../component/Icons';

const SplashScreen = ({ onComplete }) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // 1. Start fading out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2500);

    // 2. Tell the parent app to remove this component after fade finishes (1s later)
    const removeTimer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

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
        // We use standard Tailwind classes. 
        // 'scale-110' and 'blur-sm' activate when isFading is true.
        className={`
          w-full h-full object-cover object-center
          transition-all duration-[4000ms] ease-out
          ${isFading ? 'scale-110 blur-sm' : 'scale-100'} 
        `}
      />
    </div>
  );
};

const HomePage = () => {
  const { state } = useAuth();

  return (
    // 'animate-fade-in' uses the custom animation we defined in CSS
   <div className="relative w-full min-h-screen overflow-hidden">

      {/* 2. The Background Video */}
      {/* - absolute inset-0: Fills the entire parent container.
         - w-full h-full object-cover: Ensures the video covers the screen without stretching.
         - z-0: Puts it at the very back.
      */}
      <video
        src={videoBG}
        autoPlay
        muted
        loop
        playsInline
        title="Background video"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />
     

      {/* 3. The Dark Overlay Layer (Optional) */}
      {/* This adds a 40% opacity black layer so your text is readable against bright videos. 
          Adjust 'bg-black/40' to your liking. */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>


      {/* 4. The Main Content Container */}
      {/* This sits on top (z-20) and uses flexbox to center main content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen p-8 text-secondary">
        
        {/* ----- TOP RIGHT AVATAR ----- */}
        {/* We use absolute positioning here relative to this specific container */}
        <div className="absolute top-6 right-6 flex flex-col items-center gap-3">
             {/* Optional name label next to avatar */} 
             <NavLink to={state.user ? "/profile" : "/login"} className="rounded-full overflow-hidden w-16 h-16 bg-blue-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg hover:shadow-xl transition-shadow">
             
               <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded-full text-4xl font-bold flex-shrink-0 mx-auto md:mx-0">
                            {state.user?.name ? state.user.name.charAt(0).toUpperCase() : 'G'} 
                        </div>
             
          </NavLink>
            <span className=" text-white hidden md:block font-medium text-sm tracking-wider opacity-90">
                {state.user ? state.user?.name ||(state.user?.name || "Tu") : "Accedi"}
            </span>
            {/* The Avatar Image */}
           
        </div>
        {/* --------------------------- */}


        {/* Main Centered Content */}
        {/* Added the animate-fade-in from previous step for smooth entry */}
        <main className="text-center max-w-3xl animate-fade-in">
          <h1 className="text-5xl text-white md:text-7xl font-extrabold mb-6 drop-shadow-lg leading-tight">
            DRONE AMICO <br />
            
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-200 drop-shadow-md">
            Serenità in tutti in momenti.
          </p>

          <div className="flex gap-4 justify-center">
            <NavLink to={state.user ? "/livestream" : "/login"}>
             <button className="px-8 text-white py-3 bg-primary hover:bg-blue-600 text-secondary cursor-pointer rounded-full font-semibold transition transform hover:scale-105 active:scale-95">
               Avvia
             </button>
            </NavLink>
          </div>
        </main>

      </div>
    </div>
  );
};

export default function Go() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* We render BOTH components at the start. 
         The Splash Screen sits on top (z-50) and covers the Home Page.
         When Splash fades out (opacity-0), the Home Page is revealed underneath.
      */}
      
      {/*isLoading && <SplashScreen onComplete={() => setIsLoading(false)} />*/}
      
      <HomePage />
    </>
  );
}