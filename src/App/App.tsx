import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Navigation from "../components/Navigation";
import Work from "../pages/Work";
import Hobbies from "../pages/Hobbies";
import Contact from "../pages/Contact";
import backgroundImage from "../assets/background.jpeg";
import Attribution from "../pages/Attribution";
import NotFound from "../pages/NotFound";

export default function App() {
  return (
    <main
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className={`h-dvh overflow-hidden bg-cover bg-center text-amber-200 font-display flex justify-center items-center flex-col`}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/attribution" element={<Attribution />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Navigation />
    </main>
  );
}
