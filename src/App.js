import React, { useState } from 'react';
import Main from './components/Main';
import './App.css';

import MyProvider from './context/MyProvider';

function App() {

  // let [age, setAge] = useState(20)
  // let [name] =useState('Marc')

  // const getOld = () => setAge(age + 1)

  return (
    <MyProvider>
      <div className="App">
        <h3>This is App.js with nothing special being rendered</h3>
        <hr />
        <Main/>
      </div>
    </MyProvider>
  );
}

export default App;
