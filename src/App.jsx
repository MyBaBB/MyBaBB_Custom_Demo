// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Navbar from "./components/NavbarFolder/Navbar";
import Footer from "./components/FooterFolder/Footer";
import Tester from "./components/TesterFolder/Tester";

const App = () => {
  return (
    // <div className="min-h-screen bg-varMEDSPACE dark:bg-black dark:text-white z-0">
    <div>
      <Navbar />
      <Tester />
      <Footer />
    </div>
  );
};

export default App;
