import styles from "./module/ContactItem.module.css";

function ContactItem({
    data:{
        id,
        name,
        email,
        job,
        phone
    },
    deleteHandler,
}) {
  return (
    <>
    <li className={styles.list} key={id}>
        <p>{name}</p>
        <p>{email}</p>
        <p>{job}</p>
        <p>{phone}</p>
        <button className={styles.delete} onClick={() => deleteHandler(id)}>حذف</button>
    </li>
    </>
  )
}

export default ContactItem