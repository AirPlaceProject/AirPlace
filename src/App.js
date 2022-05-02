import logo from './logo.svg';
import './App.css';
import PassengerCard from './PassengerCard'
import SignIn from './login'
import CircularIntegration from './placement'
import FormConstrain from './formConstrain';
import AutoGridNoWrap from './fly'
import { Route, Routes } from "react-router-dom";
import Form2 from './form2';
function App() {
  return (
    <>
      <div className="App">
      <Routes>
      <Route path="formConstrain" element={<FormConstrain/>} /> 
      <Route path="" element={<AutoGridNoWrap/>} />
    </Routes>

      </div>
    </>
  );
}

export default App;
