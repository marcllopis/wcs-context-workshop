import React, { useContext } from 'react';
import { MyContext } from '../context/MyProvider'

const Final = () => {

  const context = useContext(MyContext)

  return (
    <div>
      <h3>This is Final.js with some props coming from Section.js that are also coming from Main.js that are also coming from App.js</h3>
      <h4>Age: {context.age}</h4>
      <h4>Name: {context.name}</h4>
      <button onClick={context.getOld}>Happy Birthday!</button>
      <hr />
    </div>
  )
};

export default Final;
