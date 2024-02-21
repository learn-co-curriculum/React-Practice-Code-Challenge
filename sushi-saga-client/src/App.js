import React, {useState} from 'react';
import {SushiContainer} from './containers/SushiContainer.js'
import Table from './containers/Table';


// Endpoint!
const API = "http://localhost:3000/sushis"

const App = () => {

  
  const [value,setValue] = useState(100);
  const [plateCount,setPlateCount] = useState(0);

  const updateValue = (price) => {
    console.log("Price of sushi is :" + price)
      setValue(value-price);
      console.log("Balance left is :" + value)
  }

  const addPlate = () => {
    setPlateCount(plateCount+1);
    console.log(plateCount)
  }

    return (
      <div className="app">
        <SushiContainer updateValue={updateValue} addPlate={addPlate}/>
        <Table value={value} plateCount={plateCount} />
      </div>
    );
}

export default App;