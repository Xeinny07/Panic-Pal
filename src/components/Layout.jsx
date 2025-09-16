import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-butter text-deepLilac flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
