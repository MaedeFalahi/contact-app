import ContactItem from './ContactItem';

import styles from "./module/ContactsList.module.css";

import {  useContext  } from 'react';
import { DataContext } from "../context/UserProvider";

function ContactsList({ deleteHandler}) {

    const { users } = useContext(DataContext);
console.log(users)
  return (
    <>
    <div className='bg-gray-50 shadow-xl'>
            {users.length ? (
                <ul className={styles.ul}>
                    {users.map((user) => (
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