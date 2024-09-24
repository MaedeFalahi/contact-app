import { Children , createContext , useEffect ,useState } from 'react';

import axios from "axios";

export const DataContext = createContext();


function UserProvider({ Children  }) {

    const [userData , setUserData] = useState([]);

    useEffect(() =>{
      axios.get('http://localhost:8000/users')
      .then((res) => setUserData(res.data));
    },[])


  return (
    <DataContext.Provider value={{ userData , setUserData}}>
      { Children }
    </DataContext.Provider>
    )
}

export default UserProvider;