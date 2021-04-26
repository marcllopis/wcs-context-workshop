import React, {useState} from 'react';

export const MyContext = React.createContext();


const MyProvider = props => {

  let [age, setAge] = useState(20)
  let [name] = useState('Marc')

  const getOld = () => setAge(age + 1)

  return(
    <MyContext.Provider
      value={{
        age: age,
        name: name,
        getOld: getOld
      }}
    >
      {props.children}
    </MyContext.Provider>
  )
}

export default MyProvider;
