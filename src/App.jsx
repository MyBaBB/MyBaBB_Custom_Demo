// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Navbar from "./components/NavbarFolder/Navbar";
import Footer from "./components/FooterFolder/Footer";
 
import SectionA from "./components/SectionsFolder/SectionA";

const App = () => {
  return (
    // <div className="min-h-screen bg-varMEDSPACE dark:bg-black dark:text-white z-0">
    <div >
      <Navbar />
      <SectionA />
      
      <Footer />
    </div>
  );
};

export default App;
