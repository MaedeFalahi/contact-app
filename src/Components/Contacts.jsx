import { useState } from 'react'

import styles from "./module/Contact.module.css";

import ContactsList from './ContactsList';
import inputs from '../constants/inputs';
import { v4 } from 'uuid';
import api from '../services/config';


function Contacts() {
  const [contacts , setContacts] = useState([]);
  const [alert , setAlert] = useState("");
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

  const userData = {
    name: contact.name,
    job: contact.job,
    email: contact.email,
    phone: contact.phone,
  };

  const addHandler = (e) =>{
    e.preventDefault();
    api
    .post("/users" ,{userData})
    .then((res) => setContact(res.data))
    .catch((error) => console.error(error));
  };



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

    const deleteHandler = (id) =>{
  api
    .delete("/users/"+ id ,{userData})
    .then((res) => setContact(res.data))
    .catch((error) => console.error(error));
    };

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
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}

      </div>
      <div className={styles.button}>
        <button onClick={addHandler}> افزودن</button>
      </div>
      <div>{alert && <p> {alert}</p>}</div>
      
    </div>
    <ContactsList contacts={contacts} deleteHandler={deleteHandler}/>
    </>
  )
}

export default Contacts 