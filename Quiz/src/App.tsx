import React from 'react';
import {BrowserRouter as Router , Switch , Route } from "react-router-dom"
import MainPage from './Component/MainPage'
import QuizEnter from './Component/QuizEnter'
import SpashScreen from "./Component/SplashScreen"

const App:React.FC = () =>  {
  return (
    <Router>
  <div className="App">
    <Switch>
      <Route  exact path="/"> <SpashScreen/></Route >
      <Route  exact path="/home"><MainPage /></Route>
      <Route exact path="/quiz"><QuizEnter/></Route>
    </Switch>
     
    </div>
    </Router>
    
  );
}

export default App;
