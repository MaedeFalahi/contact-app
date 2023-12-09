import Contactitem from "./Contactitem";

import styles from './ContactsList.module.css';

function ContactsList({ contacts , deleteHandler}) {
  return (
    <div className={styles.container}>
      <div>Contacts List</div>
      {contacts.length ? ( 
      <ul className={styles.contacts}> 
        {contacts.map((contact) => (
            <Contactitem 
            key={contact.id} 
            data={contact}
            deleteHandler={deleteHandler}
              />
        ))}
      </ul>
      ) : (
      <p className={styles.message}> no contact yet!</p>
      )}
    
    </div>  
  ); 
}

export default ContactsList;