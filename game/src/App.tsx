// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Toss } from './Toss/Toss';
import Home from './Home';

function App() {
  return (
    <div className="App" style={{backgroundImage:`url('https://img.freepik.com/free-vector/cricket-icons-set-flat_1284-13617.jpg?size=626&ext=jpg&ga=GA1.2.1323011461.1676294460&semt=ais')`}}>
    {/* <h1 className='text-red-500 border-black' > hi  this is Game devs team ..</h1> */}
    <Toss/>
    <Home/>
    </div>
  );
}

export default App;
