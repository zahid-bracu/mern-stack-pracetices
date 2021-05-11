import './App.css';
import Counter from './components/Counter';
import DataValues from './components/DataValues';
import User from './components/User';
 
function App() {
  return (
    <div className="App">
      <h1>Counter App</h1>
      <Counter/>
      <DataValues/>
      <User/>
    </div>
  );
}

export default App;
