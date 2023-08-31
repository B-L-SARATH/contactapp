import { useSelector, useDispatch } from "react-redux";
import { setcontact } from "./store/Currentcontactslice";
const Contactinfo = ({ handledisplay }) => {
  const contact = useSelector((state) => state.currentcontact);
  const dispatch = useDispatch();
  return (
    <div>
      {contact && (
        <div
          style={{
            width: "250px",
            marginLeft: "80px",
            backgroundColor: "#F0F0F0",
            height: "250px",
            padding: "25px",
          }}
          className="d-flex justify-content-center flex-column align-items-center"
        >
          <h3>User Details</h3>
          <br />
          {contact.name && <h6>Name:{contact.name}</h6>}
          <br />
          {contact.email && <h6>Email:{contact.email}</h6>}
          <button
            className="btn contactbtn m-3"
            onClick={() => {
              handledisplay();
            }}
          >
            close
          </button>
        </div>
      )}
    </div>
  );
};
export default Contactinfo;
