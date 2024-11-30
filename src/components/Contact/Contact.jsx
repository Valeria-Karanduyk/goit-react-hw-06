import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import s from "./Contact.module.css";
import { FaTrashAlt } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.list}>
      <div className={s.box}>
        <p className={s.name}>
          <BsPersonFill className={s.icon} />
          {name}
        </p>
        <p className={s.number}>
          <MdPhone className={s.icon} />
          {number}
        </p>
      </div>
      <button className={s.btn} onClick={() => dispatch(deleteContact(id))}>
        <FaTrashAlt />
      </button>
    </li>
  );
};

export default Contact;
