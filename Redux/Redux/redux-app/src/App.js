import logo from './logo.svg';
import './App.css';
import ReducerCount from './components/ReducerCount';
import PatientManagment from './components/patients/PatientManagment';
 

function App() {
  return (
    <div className="App">
      <ReducerCount/>
      <PatientManagment/>
      
    </div>
  );
}

export default App;
