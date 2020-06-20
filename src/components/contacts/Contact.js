import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../store";
const Contact = ({ contact, selectAll }) => {
  const dispatch = useDispatch();
  const { id, name, phone, email } = contact;
  return (
    <tr>
      <th>
        <div className="custom-control custom-checkbox">
          <input
            checked={selectAll}
            type="checkbox"
            className="custom-control-input"
            value={id}
          />
          <label htmlFor="selectAll" className="custom-control-label"></label>
        </div>
      </th>
      <td>
        <Avatar className="mr-2" name={name} size="45" round={true} />
        {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="actions">
        <Link to={`/contacts/edit/${id}`}>
          <span className="material-icons mr-2">edit</span>
        </Link>
        <span
          className="material-icons text-danger"
          onClick={() => dispatch(deleteContact(id))}
        >
          remove_circle
        </span>
      </td>
    </tr>
  );
};

export default Contact;
