import './App.css';
import ColorDisplay from './components/ColorDisplay';

import CounterDisplay from './components/CounterDisplay';
import CounterSimpleControls from './components/CounterSimpleControls';

function App() {
  return (
    <div className="App">

      <ColorDisplay />
      <CounterDisplay />
      <CounterSimpleControls />


    </div>
  );
}

export default App;