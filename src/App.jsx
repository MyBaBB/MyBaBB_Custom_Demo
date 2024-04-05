// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Navbar from "./components/NavbarFolder/Navbar";
import Footer from "./components/FooterFolder/Footer";

import SectionA from "./components/SectionsFolder/Section-A";

const App = () => {
  return (
    <div>
      <Navbar />
      <SectionA />

      <Footer />
    </div>
  );
};

export default App;
