import React, { useEffect, useState } from "react";
import Popupmodal from "./Popupmodal";
import Contactform from "./Contactform";
import { useSelector, useDispatch } from "react-redux";
import { updatecontacts } from "./store/Contactslice";
import { setcontact } from "./store/Currentcontactslice";
function Editcontact({ currentobj, index }) {
  const contacts = useSelector((state) => state.contacts);

  const dispatch = useDispatch();
  const [contactform, setcontactform] = useState({
    name: currentobj.name,
    email: currentobj.email,
  });
  useEffect(() => {
    setcontactform({ name: currentobj.name, email: currentobj.email });
  }, [currentobj]);

  const handlechange = (name, value) => {
    let updatedform = { ...contactform };
    updatedform[name] = value;
    setcontactform(updatedform);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    let newlist = [...contacts];
    newlist[index] = contactform;
    console.log(newlist);
    dispatch(updatecontacts(newlist));
    dispatch(setcontact(contactform));
  };
  return (
    <Popupmodal id="editModal" title="Edit contact">
      <form action="" onSubmit={handlesubmit}>
        <Contactform
          label="Name"
          type="text"
          name="name"
          value={contactform.name}
          setValue={(name, data) => handlechange(name, data)}
        />
        <br />
        <Contactform
          label="Email"
          type="email"
          name="email"
          value={contactform.email}
          setValue={(name, data) => handlechange(name, data)}
        />
        <br />
        <button className="btn contactbtn" data-bs-dismiss="modal">
          Submit
        </button>
      </form>
    </Popupmodal>
  );
}

export default Editcontact;
