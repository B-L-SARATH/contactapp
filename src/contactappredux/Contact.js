import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setcontact } from "./store/Currentcontactslice";
import { removecontact } from "./store/Contactslice";
import Addcontact from "./Addcontact";
import Contactinfo from "./Contactinfo";
import { useState } from "react";
import Editcontact from "./Editcontact";
function Contact() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const [display, setdisplay] = useState("hidden");
  const [currentobj, setcurrentobj] = useState({ name: "", email: "" });
  const [currentindex, setcurrentindex] = useState();
  const viewcontact = (item) => {
    dispatch(setcontact(item));
  };
  const handledisplay = () => {
    setdisplay("hidden");
  };
  const deletecontact = (index) => {
    dispatch(removecontact(index));
    setdisplay("hidden");
  };
  const editcontact = (index) => {
    setcurrentobj(contacts[index]);
    setcurrentindex(index);
  };
  return (
    <div style={{ width: "70vw" }}>
      <div
        style={{
          backgroundColor: "#F0F0F0",
          width: "500px",
          height: "80px",
          padding: "10px",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <h1 className="mb-3">Manage your contacts</h1>
      </div>
      <button
        className="btn contactbtn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add contact
      </button>
      <div className="d-flex mt-5">
        <table
          className="table"
          style={{ minWidth: "550px", maxWidth: "550px", minHeight: "250px" }}
        >
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 &&
              contacts.map((item, index) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                      <i
                        style={{ margin: "5px" }}
                        className="fa fa-eye"
                        onClick={() => {
                          viewcontact(item);
                          setdisplay("visible");
                        }}
                      />
                      <i
                        style={{ margin: "5px" }}
                        className="fa fa-edit"
                        data-bs-toggle="modal"
                        data-bs-target="#editModal"
                        onClick={() => {
                          editcontact(index);
                        }}
                      />
                      <i
                        style={{ margin: "5px" }}
                        className="fa fa-trash"
                        onClick={() => {
                          deletecontact(index);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div style={{ visibility: display }}>
          <Contactinfo
            handledisplay={() => {
              handledisplay();
            }}
          />
        </div>
        <Addcontact />
        <Editcontact currentobj={currentobj} index={currentindex} />
      </div>
    </div>
  );
}

export default Contact;
