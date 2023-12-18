import React from "react";
import Header from "./components/layout/Header";
import Crop from "./components/crop_details/Crop";

import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Crop />
      </main>
    </>
  );
}

export default App;
