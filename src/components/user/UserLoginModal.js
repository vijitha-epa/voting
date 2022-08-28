import React, { useState } from 'react';
import { Button, CloseButton, Modal } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router';
import UserSignInWizard from "./UserSignInWizard";
import UserLogin from "../members/UserLogin";
import UserSignInModal from "./UserSignInModal";

export default function Example() {
  let {
    state: { open }
  } = useLocation();
  const navigate = useNavigate();
  const location = useLocation();

  const [show, setShow] = useState(open);

  const handleClose = () => {
    setShow(false);
    // navigate(-1);
    navigate("/", { replace: true })
  };
  console.log("Inside Login", location.state?.from?.pathname, location)
  return (
    <Modal show={show} onHide={handleClose} className="mt-4" size="lg">
      <Modal.Header className="bg-shape modal-shape-header px-4 position-relative">
        <div className="position-relative z-index-1 light">
          <h4 className="mb-0 text-white" id="authentication-modal-label">
            Login
          </h4>
          {/*<p className="fs--1 mb-0 text-white">*/}
          {/*  Please create your free account*/}
          {/*</p>*/}
        </div>
        <CloseButton
          variant="white"
          className="position-absolute end-0 me-2 mt-2 top-0"
          onClick={handleClose}
        />
      </Modal.Header>
      <Modal.Body>
        <UserLogin/>
      </Modal.Body>
    </Modal>

  );
}
