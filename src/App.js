import React, { useState } from "react";
import axios from "axios";

import "./App.css";

const Grandchild = props => {
  return (
    <div>
      <h3>Grand child: {props.personData.grandchildName} </h3>
    </div>
  );
};

const Child = props => {
  return (
    <div>
      <h2>Child: {props.personData.childName}</h2>
      <Grandchild personData={props.personData} />
    </div>
  );
};

const Parent = props => {
  return (
    <div>
      <h1>Parent: {props.personData.parentName}</h1>
      <Child personData={props.personData} />
    </div>
  );
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
