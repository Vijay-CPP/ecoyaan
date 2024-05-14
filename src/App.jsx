import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import AboutUs from "./components/AboutUs"
import { useTheme } from "./context/ThemeContext";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

function App() {
  const { theme} = useTheme();

  return (
    <div className={`relative ${theme} ${theme == "dark" ? "bg-gray-900" : ""}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <BsFillArrowUpCircleFill onClick={() => window.scroll(0,0)}  className="fixed right-6 bottom-6 z-[100] text-green-600 text-5xl md:text-6xl lg:text-4xl"/>
    </div>
  );
}

export default App;
