import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, selectContacts } from "../../redux/contactsSlice";
import { ErrorMessage, Form, Formik } from "formik";
import { MdPersonAddAlt1 } from "react-icons/md";
import s from "./ContactForm.module.css";

const ContactsForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ id: Date.now(), name, number }));
    setName("");
    setNumber("");
  };

  return (
    <Formik>
      <Form className={s.form} onSubmit={handleSubmit}>
        <div className={s.inputBox}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={s.inputBox}>
          <input
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Number"
            required
          />
          <ErrorMessage name="number" component="span" />
        </div>
        <button className={s.btn} type="submit">
          <MdPersonAddAlt1 />
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactsForm;
