import { createContext , useEffect , useState } from "react";

import axios from "axios";

export const DataContext = createContext();


function UserProvider({ children  }) {

    const [userData , setUserData] = useState([]);
    const [contacts , setContacts] = useState({
      id: "",
      name:"",
      email:"",
      job:"",
      phone:"",
    });

    const userTitle = {
      name: contacts.name,
      job: contacts.job,
      email: contacts.email,
      phone: contacts.phone,
    }

    useEffect(() =>{
      axios.get('http://localhost:8000/users')
      .then((res) => setUserData(res.data));
    },[])

    const deleteHandler = (id) =>{
      
      api
        .delete("/users/"+ id ,{userTitle})
        .then((res) => setUserData(res.data))
        .catch((error) => console.error(error));
        };


    const addHandler = (e) =>{
      e.preventDefault();
      api
      .post("/users" ,{userTitle})
      .then((res) => setUserData(res.data))
      .catch((error) => console.error(error));
    };






  return (
    <DataContext.Provider value={{ userData , setUserData }}>
            {children}
    </DataContext.Provider>
    )
}

export default UserProvider;