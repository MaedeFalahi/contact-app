import { useState } from 'react'

import styles from "./module/Contact.module.css";

import ContactsList from './ContactsList';
import inputs from '../constants/inputs';
import { v4 } from 'uuid';


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

  const addHandler = () =>{
    if(
      !contact.name ||
      !contact.email ||
      !contact.job ||
      !contact.phone 
    ){
        setAlert("فیلد نمیتواند خالی باشد");
        return
    }
    setAlert("");
    const newContact = { ...contact, id:v4()};
    setContacts((contacts) => [...contacts , newContact]);
    setContact({
      name:"",
      email:"",
      job:"",
      phone:"",
    });
    }

    const deleteHandler = (id) =>{
      const newContacts = contacts.filter((contact) => contact.id !== id);
      setContacts(newContacts);
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