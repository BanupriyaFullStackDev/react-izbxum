import React, { useState, useEffect, useContext } from "react";
import HeadMaster from "../UseContext/HeadMaster";
import "./style.css";
export const StudentContext = React.createContext("");
function App() {
  return (
    <StudentContext.Provider value={"Banupriya"}>
      <HeadMaster />
    </StudentContext.Provider>
  );
}
export default App;
