// src/pages/Breathing.jsx
import { useState, useEffect } from "react";

export default function Breathing() {
  const phases = ["Inhale", "Hold", "Exhale", "Hold"];
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [count, setCount] = useState(4);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev === 1) {
          setPhaseIndex((i) => (i + 1) % phases.length);
          return 4;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  const phase = phases[phaseIndex];

  return (
    <div className="flex-1 flex flex-col items-center justify-center  text-deepLilac px-4 py-8">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        Breathe With Me
      </h2>

      {/* Breathing Circle with smooth animation */}
      <div
        className={`rounded-full flex flex-col items-center justify-center shadow-lg transition-all duration-[4000ms] ease-in-out
          ${phase === "Inhale" ? "w-72 h-72 bg-yellow-300" : 
            phase === "Exhale" ? "w-40 h-40 bg-yellow-200" : 
            "w-56 h-56 bg-yellow-100"}`}
      >
        {running ? (
          <>
            <p className="text-lg sm:text-xl font-semibold text-deepLilac mb-2">
              {phase}...
            </p>
            <p className="text-3xl sm:text-4xl font-bold text-deepLilac">
              {count}
            </p>
          </>
        ) : (
          <p className="text-lg sm:text-xl font-semibold text-deepLilac">
            Press Start
          </p>
        )}
      </div>

      {/* Start/Stop Buttons */}
      <div className="mt-6 flex gap-4">
        {!running ? (
          <button
            onClick={() => {
              setRunning(true);
              setPhaseIndex(0);
              setCount(4);
            }}
            className="px-6 py-2 bg-lilac text-butter rounded-full shadow hover:bg-deepLilac transition"
          >
            Start
          </button>
        ) : (
          <button
            onClick={() => setRunning(false)}
            className="px-6 py-2 bg-red-400 text-white rounded-full shadow hover:bg-red-500 transition"
          >
            Stop
          </button>
        )}
      </div>

      {/* Instructions Box */}
      <div className="mt-10 bg-yellow-200 text-yellow-900 p-6 rounded-2xl shadow-md text-center max-w-sm">
        <h3 className="text-lg sm:text-xl font-semibold mb-3">
          Follow the rhythm ✨
        </h3>
        <ul className="space-y-2 text-base sm:text-lg">
          <li>Inhale for 4 seconds</li>
          <li>Hold for 4 seconds</li>
          <li>Exhale for 4 seconds</li>
          <li>Hold for 4 seconds</li>
        </ul>
      </div>
    </div>
  );
}