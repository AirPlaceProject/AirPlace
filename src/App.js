import logo from './logo.svg';
import './App.css';
import PassengerCard from './PassengerCard'
import SignIn from './login'
import CircularIntegration from './placement'
import FormConstrain from './formConstrain';
import AutoGridNoWrap from './fly'
import { Route, Routes } from "react-router-dom";
import Form2 from './form2';
import SignUp from './signUp';
import BasicTable from './tablePlacement';
import ResponsiveAppBar from './appBar';
import Cards from './PassengerCard';
import { useState } from 'react';
function App() {
  const[isUser,setIsUser]=useState()
  return (
    <>
      {/* <ResponsiveAppBar />
      <AutoGridNoWrap/> */}
      <div className="App">
      <ResponsiveAppBar isUser={isUser}/>
      <Routes>
      <Route path="formConstrain" element={<FormConstrain/>} /> 
      <Route path="" element={<SignIn setIsUser={setIsUser}/>} />
      <Route path="myFlights" element={<AutoGridNoWrap/>} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="signIn" element={<SignIn setIsUser={setIsUser}/>} />
      <Route path="cards" element={<Cards/>} />
    </Routes>
        {/* <Routes>
          <Route path="formConstrain" element={<FormConstrain />} />
          <Route path="" element={<FormConstrain />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="signUp/signIn" element={<SignIn />} />
          <Route path="/signIn" element={<SignUp />} />
        </Routes> */}
      </div>
    </>
  );
}

export default App;
