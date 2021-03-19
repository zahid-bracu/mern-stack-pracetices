import './App.css';
import PatientManagment from './components/patients/PatientManagment';
import ReducerCount from './components/ReducerCount';
 

function App() {
  return (
    <div className="App">
      <div style={{border:"1px solid black",padding:"20px",width:"400px",margin:"auto"}}>
        <ReducerCount/>
        <PatientManagment/>
      </div>
       
    </div>
  );
}

export default App;
