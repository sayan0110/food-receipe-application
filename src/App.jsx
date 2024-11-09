import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

import Reciepe from "./components/Receipe";

const App = () => {
  return (
    <div className="font-Roboto font-sans ">
      <Navbar />
      <div className="">

        <Reciepe />
      </div>
    </div>
  );
};

export default App;
