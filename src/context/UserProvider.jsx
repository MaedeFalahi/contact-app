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


    const changeHandler = (event) =>{
      const name = event.target.name;
      const value = event.target.value;
  
      setContact((contact) => ({...contact , [name] : value}));
    }

    const userTitle = {
      name: contact.name,
      job: contact.job,
      email: contact.email,
      phone: contact.phone,
    }



    useEffect(() =>{
      axios.get('http://localhost:8000/users')
      .then((res) => setUserData(res.data));
    },[])


    const GetData = () =>{
      axios.get('http://localhost:8000/users')
      .then((res) => setUserData(res.data));

  };
  GetData()

    const deleteHandler = (id) =>{
      api
        .delete("/users/"+ id ,{userTitle})
        .then(() => GetData())
        .catch((error) => console.log(error));
        };


    const addHandler = () =>{
      api
      .post("/users/" ,{ contact})
      .then(() => GetData())
      .then((res) => setContacts(res.data))
      .catch((error) => console.log(error.data));
    };


console.log(contacts)



  return (
    <DataContext.Provider value={{ userData , setUserData , deleteHandler , addHandler , contacts , setContacts }}>
            {children}
    </DataContext.Provider>
    )
}

export default UserProvider;