import React from "react";
import PropTypes from "prop-types";
import s from "./ContactsList.module.css";

export default function ContacstList({ contacts, onDelete }) {
  return (
    <ul className={s.list}>
      {contacts.length === 0 ? <h6>Contacts list is empty.</h6> : <h6>Contacts list:</h6>}
        {contacts.map(({id, name, number}) => (
          <li
            key={id}
            className={s.list_item}
          >

            <a href={"tel:"+{ number }}>
              <span>{name}&nbsp;:</span>
              <span>{number}</span>
            </a>

            <button
              type="button"
              className={s.btn}
              onClick={() => onDelete(id)}
            >
              <span className="material-icons">delete</span>
            </button>
          </li>
        ))}
      </ul>
  );
}

ContacstList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDelete: PropTypes.func.isRequired,
};


