import { createContext , useEffect , useState } from "react";

import api from '../services/config';
import axios from "axios";
import Contacts from "../Components/Contacts";

export const DataContext = createContext();


function UserProvider({ children  }) {

  const [contacts , setContacts] = useState([]);
    const [userData , setUserData] = useState([]);
    const [contact , setContact] = useState({
      id: "",
      name:"",
      email:"",
      job:"",
      phone:"",
    });


    useEffect(() =>{
      axios.get('http://localhost:8000/users')
      .then((res) => setUserData(res.data));
    },[])


    const GetData = () =>{
      axios.get('http://localhost:8000/users')
      .then((res) => setUserData(res.data));

  };


    const deleteHandler = (id) =>{
      api
        .delete("/users/"+ id ,{contact})
        .then(() => GetData())
        .catch((error) => console.log(error));
        };


    const addHandler = () =>{
      api
      .post("/users/" ,{ 
        name: contact.name,
        job: contact.job,
        email: contact.email,
        phone: contact.phone})
      .then((res) => console.log(res.data))
      .then(() => GetData())
      .catch((error) => console.log(error.data));
    };






  return (
    <DataContext.Provider value={{ userData , setUserData , deleteHandler , addHandler , contacts , setContact , contact}}>
            {children}
    </DataContext.Provider>
    )
}

export default UserProvider;