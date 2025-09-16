// src/pages/LandingPage.jsx
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-Lilac text-deepLilac text-center px-6">
      {/* Logo */}
      <img
        src={logo}
        alt="Panic Pal Logo"
        className="w-44 sm:w-60 mb-6 drop-shadow-lg"
      />

      {/* Tagline */}
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
        Relax. Breathe. Find Your Calm.
      </h1>
      <p className="text-white/90 text-base sm:text-lg mb-8 max-w-md">
        Panic Pal 💜 — your pocket guide to peace and mindfulness.
      </p>

      {/* Get Started Button */}
      <button
        onClick={() => navigate("/breathing")}
        className="px-8 py-3 bg-yellow-400 text-purple-900 font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition-transform transform hover:scale-105"
      >
        Get Started
      </button>
    </div>
  );
}