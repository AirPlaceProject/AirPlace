import logo from './logo.svg';
import './App.css';
import PassengerCard from './PassengerCard'
import SignIn from './login'
import CircularIntegration from './placement'
import FormConstrain from './formConstrain';
import AutoGridNoWrap from './fly'
import { Route, Routes } from "react-router-dom";
//import Form2 from './form2';
import SignUp from './signUp';
import BasicTable from './tablePlacement';
import ResponsiveAppBar from './appBar';
import Cards from './PassengerCard';
import { useState } from 'react';
import AlertDialog from './diaog';
import PassengerFlights from './passengerFlights';
//import UploadButtons from ''
import Manager from './managerFlights'
import SimpleBackdrop from './placmentManager';
import PlacmentManager from './placmentManager';
import BottomAppBar from './aa';
function App() {
  return (
    <>
      <div className="App">
      <ResponsiveAppBar />
      <Routes>
      <Route path="formConstrain" element={<FormConstrain/>} />   
      <Route path="" element={<SignIn />} />
      <Route path="myFlights" element={<AutoGridNoWrap/>} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="signIn" element={<SignIn />} />
      <Route path="cards" element={<Cards/>} />
      <Route path="place" element={<CircularIntegration/>} />
      <Route path="dialog" element={<AlertDialog/>} />
      <Route path="manager" element={<Manager/>} />
      <Route path="placmentManager" element={<PlacmentManager/>} />

    </Routes>


      </div>
    </>
  );
}

export default App;
