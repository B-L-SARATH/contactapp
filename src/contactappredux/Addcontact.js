import React, { useState, useRef } from "react";
import Popupmodal from "./Popupmodal";
import Contactform from "./Contactform";
import { useDispatch } from "react-redux";
import { add } from "./store/Contactslice";
function Addcontact() {
  const dispatch = useDispatch();

  const [contactform, setcontactform] = useState({
    name: "",
    email: "",
  });

  const closeref = useRef();
  const handlechange = (name, value) => {
    let updatedform = { ...contactform };
    updatedform[name] = value;
    setcontactform(updatedform);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(add(contactform));
    setcontactform({ name: "", email: " " });
    closeref.current.click();
  };
  return (
    <Popupmodal id="exampleModal" title="Add contact" closeref={closeref}>
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
        <button className="btn contactbtn">Submit</button>
      </form>
    </Popupmodal>
  );
}

export default Addcontact;
