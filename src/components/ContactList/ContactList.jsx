import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
const ContactList = ({ contactList }) => {
  return (
    <ul>
      {contactList.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
