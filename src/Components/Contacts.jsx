import { useState } from 'react'

import styles from "./module/Contact.module.css";

import ContactsList from './ContactsList';
import inputs from '../constants/inputs';
import { v4 } from 'uuid';


import {  useContext  } from 'react';
import { DataContext } from "../context/UserProvider";

function Contacts() {


  const { userData ,addHandler  , contacts , setContacts , changeHandler} = useContext(DataContext);

// console.log(userData)



  // const [contacts , setContacts] = useState([]);
  const [alert , setAlert] = useState("");
  // const [contact , setContact] = useState({
  //   id: "",
  //   name:"",
  //   email:"",
  //   job:"",
  //   phone:"",
  // });






  // const userData = {
  //   name: contact.name,
  //   job: contact.job,
  //   email: contact.email,
  //   phone: contact.phone,
  // };

  // const addHandler = (e) =>{
  //   e.preventDefault();
  //   api
  //   .post("/users" ,{userData})
  //   .then((res) => setContact(res.data))
  //   .catch((error) => console.error(error));
  // };



  // const addHandler = () =>{
  //   if(
  //     !contact.name ||
  //     !contact.email ||
  //     !contact.job ||
  //     !contact.phone 
  //   ){
  //       setAlert("فیلد نمیتواند خالی باشد");
  //       return
  //   }
  //   setAlert("");
  //   const newContact = { ...contact, id:v4()};
  //   setContacts((contacts) => [...contacts , newContact]);
  //   setContact({
  //     name:"",
  //     email:"",
  //     job:"",
  //     phone:"",
  //   });
  //   }

  //   const deleteHandler = (id) =>{
  // api
  //   .delete("/users/"+ id ,{userData})
  //   .then((res) => setContact(res.data))
  //   .catch((error) => console.error(error));
  //   };

  return (
    <>
    <div className={styles.form}>
      <div className={styles.input}>
        {inputs.map((input , index) =>(
          <input 
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={contacts[input.name]}
            onChange={changeHandler}
          />
        ))}

      </div>
      <div className={styles.button}>
        <button onClick={addHandler}> افزودن</button>
      </div>
      <div>{alert && <p> {alert}</p>}</div>
      
    </div>
    <ContactsList />
    </>
  )
}

export default Contacts 