import './App.css';

import Header from './Header';
import MealPlanner from "./MealPlanner";
import List from "./List";

import { useState } from "react";


function App() {

  const [childData, setChildData] = useState("");

  if (!childData) {

      return (
        <div className='App'>
          <Header /> 
          <MealPlanner passChildData={setChildData}/>
        </div>
      )
  }
  else {
      return <List data={childData}/>
  }
}

export default App;
