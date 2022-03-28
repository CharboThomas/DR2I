import './App.css';
import Banner from './components/Banner';
import Home from './components/Home';
import Bottom from './components/Bottom';
import Team from './components/Teams';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Admin from './composants/Admin';


function App() {

  return (

  <div className="App">

     <Home />


      <div> 

        <Banner />

        <Routes> 
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/team' element={<Team />}></Route>
          <Route exact path='/pageUltraSecreteNePasRegarderMerci' element={<Admin />}></Route>
        </Routes>


        <Bottom />

      </div>

  </div>

  );

}

export default App;
