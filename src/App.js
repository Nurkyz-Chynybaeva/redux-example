import './App.css';
import ColorDisplay from './components/ColorDisplay';
import CounterAdvancedControls from './components/CounterAdvancedControls';
import CounterDisplay from './components/CounterDisplay';
import CounterSimpleControls from './components/CounterSimpleControls';
import SliderControls from './components/SliderControls';
import TextDisplay from './components/TextDisplay';
import TextSimpleControls from './components/TextSimpleControls';

function App() {
  return (
    <div className="App">
      <div>
        <TextDisplay />
        <TextSimpleControls />
      </div>
      <div>
        <ColorDisplay />
        <SliderControls />
      </div>
      <div>
        <CounterDisplay />
        <CounterSimpleControls />
        <CounterAdvancedControls />
      </div>
    </div>
  );
}



export default App;