import React from "react";

function Popupmodal({ children, id, title, closeref }) {
  return (
    <div
      class="modal fade"
      id={id}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {title}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              ref={closeref}
            ></button>
          </div>
          <div class="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Popupmodal;
