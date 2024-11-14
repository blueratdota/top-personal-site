import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/built/Header";
import Footer from "./components/built/Footer";

function App() {
  return (
    <div className="min-h-screen bg-cWhite">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;

// THINGS TO DO:
// add toggle effect @ header, default home toggled
// add button hover effects
