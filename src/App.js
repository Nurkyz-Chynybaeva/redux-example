import React from "react";
import ColorDisplay from "./components/ColorDisplay";
import CounterDisplay from "./components/CounterDisplay";
import CounterSimpleControls from "./components/CounterSimpleControls";

function App() {
  return (
    <div className="App">
     
      <CounterDisplay />
      <CounterSimpleControls />
      <ColorDisplay/>

    </div>
  );
}


export default App;


