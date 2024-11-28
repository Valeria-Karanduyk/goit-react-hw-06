import s from "./Contact.module.css";
const Contact = ({ contact }) => {
  return (
    <li className={s.list}>
      <div className={s.box}>
        <p className={s.name}>{contact.name}</p>
        <p className={s.number}>{contact.number}</p>
      </div>
      <button className={s.btn}>Delete</button>
    </li>
  );
};

export default Contact;
