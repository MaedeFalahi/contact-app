import ContactItem from './ContactItem';

import styles from "./module/ContactsList.module.css"

function ContactsList({contacts , deleteHandler}) {
    console.log(contacts)
  return (
    <div className='bg-gray-50 shadow-xl'>
            {contacts.length ? (
                <ul className={styles.ul}>
                    {contacts.map((contact) => (
                        <ContactItem
                            key={contact.id}
                            data={contact}
                            deleteHandler={deleteHandler}
                            />
                    ))}
                </ul>
            ):(
                <p>No contacts</p>
            )}
            
    </div>
  )
}

export default ContactsList