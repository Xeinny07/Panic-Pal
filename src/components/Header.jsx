// src/components/Header.jsx
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-lilac text-white">
      <h1 className="text-xl font-bold">Panic Pal 💜</h1>
      <nav className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/breathing">Breathing</Link>
        <Link to="/tips">Tips</Link>
        <Link to="/resources">Resources</Link>
      </nav>
    </header>
  );
}