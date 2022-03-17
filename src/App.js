import './App.css';
import Banner from './components/Banner';
import Home from './components/Home';
import Bottom from './components/Bottom';
import Team from './components/Teams';
import React from 'react';
import {Route, Routes} from 'react-router-dom';


function App() {

  return (
    <div className="App">
        <Banner />

        <Home />
        <Routes>
            <Route exact path='/team' element={<Team />}></Route>
        </Routes>

      <Bottom />
    </div>

  );

}

export default App;
