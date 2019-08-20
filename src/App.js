import React, { useState } from "react";
import axios from "axios";

import "./App.css";

const Parent = props => {
  return <div>Parent: {props.personData.parentName}</div>;
};

const App = () => {
  const personData = {
    parentName: "Randy",
    childName: "Seth",
    grandchildName: "Tara"
  };
  return (
    <div className="App">
      <Parent personData={personData} />
    </div>
  );
};

export default App;
