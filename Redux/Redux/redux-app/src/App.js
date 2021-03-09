import logo from './logo.svg';
import './App.css';
import ReducerCount from './components/ReducerCount';
import PatientManagment from './components/patients/PatientManagment';
import RandomPatient from './components/patients/RandomPatient';

function App() {
  return (
    <div className="App">
      <ReducerCount/>
      <PatientManagment/>
      <RandomPatient/>
    </div>
  );
}

export default App;
