import React from 'react'
import ContactItems from './ContactItem'

import styles from "./ContactList.module.css";
function ContactList({ contacts , deleteHandler  }) {

    return (
        <>
        <div className={styles.container}>
            <h3></h3>
            {contacts.length ? (
                            <ul className={styles.contacts}>
                            {contacts.map((contact) =>(
                             <ContactItems key={contact.id} data={contact}  deleteHandler={deleteHandler} />
                             ))}
                             </ul>)    : ( <p className={styles.message}>no contact yet</p> ) }

        </div>
        
        </>
    )
}

export default ContactList
