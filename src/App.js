import './App.css';
import Banner from './composants/Banner';
import Bottom from './composants/Bottom';
import Home from './composants/Home';
import Team from './composants/Teams';
import React from 'react';
import {Route, Routes} from 'react-router-dom';


function App() {

  return (
    <div> 
      <Banner />

      <Routes> 
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/team' element={<Team />}></Route>
      </Routes>

      <Bottom />
    </div>

  );

}

export default App;
