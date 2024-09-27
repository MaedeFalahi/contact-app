import ContactItem from './ContactItem';

import styles from "./module/ContactsList.module.css";

import {  useContext  } from 'react';
import { DataContext } from "../context/UserProvider";

function ContactsList() {

    const { userData , deleteHandler  } = useContext(DataContext);
    
    // console.log(userData)
  return (
    <>
    <div className='bg-gray-50 shadow-xl'>
            {userData.length ? (
                <ul className={styles.ul}>
                    {userData.map((user) => (
                        <ContactItem
                            key={user.id}
                            data={user}
                            deleteHandler={deleteHandler}
                            />
                    ))}
                </ul>
            ):(
                <p>No contacts</p>
            )}
            
    </div>
    </>
  )
}

export default ContactsList