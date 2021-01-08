import React from 'react';
import {BrowserRouter as Router , Switch , Route } from "react-router-dom"
import MainPage from './Component/MainPage'
import SpashScreen from "./Component/SplashScreen"
import {useSelector} from "react-redux"
import {RootStore} from "./Redux/Store"
const App:React.FC = () =>  {
  const userState = useSelector((state:RootStore) => state)
  console.log(userState)
  return (
    <Router>
  <div className="App">
    <Switch>
      <Route  exact path="/"> <SpashScreen/></Route >
      <Route  exact path="/home"><MainPage /></Route>
    </Switch>
     
    </div>
    </Router>
    
  );
}

export default App;
