import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage"; 
import Breathing from "./components/Breathing";
import Tips from "./components/Tips";
import Resources from "./components/Resources";



export default function App() {
  return (
      <Routes>
       <Route path="/" element={<LandingPage />} />

       <Route element={<Layout />} >
         <Route path="/breathing" element={<Breathing />} />
         <Route path="/tips" element={<Tips />} />
         <Route path="/resources" element={<Resources />} />
       </Route>
      </Routes>
  );
}