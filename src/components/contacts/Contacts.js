import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  selectAllContact,
  clearAllContact,
  deleteAllContact,
} from "../../store";

import Contact from "./Contact";

const Contacts = () => {
  const dispatch = useDispatch();

  const [selectAll, setselectAll] = useState(false);

  const contacts = useSelector((state) => state.contacts);
  const selectedcontactspp = useSelector((state) => state.selectedContacts);
  //console.log(selectedcontactspp.length);

  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllContact(contacts.map((contact) => contact.id)));
    } else {
      dispatch(clearAllContact());
    }
  }, [selectAll]);
  return (
    <div>
      {selectedcontactspp.length > 0 ? (
        <button
          className="btn btn-danger mb-3"
          onClick={() => dispatch(deleteAllContact())}
        >
          Delete All
        </button>
      ) : null}
      <table className="table shadow">
        <thead>
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  type="checkbox"
                  className="custom-control-input"
                  value={selectAll}
                  onClick={() => setselectAll(!selectAll)}
                />
                <label
                  htmlFor="selectAll"
                  className="custom-control-label"
                ></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Contact contact={contact} key={contact.id} selectAll={selectAll} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
