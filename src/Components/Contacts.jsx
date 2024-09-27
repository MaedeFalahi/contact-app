import { useState } from 'react'

import styles from "./module/Contact.module.css";

import ContactsList from './ContactsList';
import inputs from '../constants/inputs';
import { v4 } from 'uuid';


import {  useContext  } from 'react';
import { DataContext } from "../context/UserProvider";

function Contacts() {


  const {addHandler  , contacts , setContact } = useContext(DataContext);

  const [alert , setAlert] = useState("");


  const changeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;

    setContact((contact) => ({...contact, [name] : value}));
  }

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