import React from 'react';
import MainPage from './Component/MainPage'
import {useSelector} from "react-redux"
import {RootStore} from "./Redux/Store"
const App:React.FC = () =>  {
  const userState = useSelector((state:RootStore) => state)
  console.log(userState)
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
