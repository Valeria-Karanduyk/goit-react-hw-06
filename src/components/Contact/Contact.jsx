import s from "./Contact.module.css";
const Contact = ({ contact }) => {
  return (
    <li className={s.listItem}>
      <div className={s.itemBox}>
        <p className={s.name}>{contact.name}</p>
        <p className={s.number}>{contact.number}</p>
      </div>
      <button className={s.button}>Delete</button>
    </li>
  );
};

export default Contact;
