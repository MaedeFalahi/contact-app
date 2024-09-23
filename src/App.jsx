// import { createContext } from 'react'
import './App.css'
import Contacts from './Components/Contacts'

import axios from "axios";
import { createContext , useEffect ,useState } from 'react';

export const DataContext = createContext();

function App() {

  const [userData , setUserData] = useState([]);

  useEffect(() =>{
    axios.get('http://localhost:8000/users')
    .then((res) => setUserData(res.data));
    console.log(setUserData)
  },[])


  return (
    <>
    <DataContext.Provider value={userData}>
        <Contacts />
    </DataContext.Provider>    
    </>
  )
}

export default App
