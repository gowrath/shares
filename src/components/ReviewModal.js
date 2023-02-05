import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import { useHistory } from "react-router-dom";
import ActionMovies from "./ActionMovies"

// Modal is now a functional component
const ReviewModal = () => {


// Get the history object to use for navigation
const history = useHistory();

// Set up state variables
const [isLoading, setIsLoading] = useState(false);
const [json, setJson] = useState({});

// Set up state variables for modal and define functions
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


//Set up form


/* const [form, setForm] = useState({
  name:"",
  text:"",
}) */

const initialState = { name: "", text: "" };
const [form, setForm] = useState(initialState);


// Function to update the name field in the form state
function updateFormName(event) {
  
return setForm({...form, name: event.target.value});
} 

// Function to update the text field in the form state
function updateFormText(event) {
  
  return setForm({...form, text: event.target.value});
} 

// Function to handle the form submission
const onSubmitCreate = (event) => {
event.preventDefault();




// Set loading to true
setIsLoading(true);

axios
    .post(
        "https://webhooks.mongodb-realm.com/api/client/v2.0/app/data-rvgpo/service/get/incoming_webhook/create",
        form
    )
    .then((res) => {
        console.log(res.data);
        console.log("Post successfully updated");
        setIsLoading(false);
        setForm(initialState);
    })
    .catch((error) => {
        console.log(error);
        setIsLoading(false);
    });




};

// If the component is loading, show a loading spinner
if (isLoading) {
return <LoadingSpinner />;
}

// Otherwise, show the form to edit the post
return (

  <div className="write-center4">

<div className="write-center4">
  <Button variant="primary" onClick={handleShow}>
  Write review
</Button>

<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Movie Review</Modal.Title>
  </Modal.Header>
  <Modal.Body>


  <Form onSubmit={onSubmitCreate}>
        <Form.Group
          controlId="Name"
          value={form.name}
          onChange={(event) => updateFormName(event)}
        >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" defaultValue={form.name} />
        </Form.Group>

        <Form.Group
          controlId="Text"
          value={form.text}
          onChange={(event) => updateFormText(event)}
        >
          <Form.Label>Text</Form.Label>
          <Form.Control
            type="text"
            rows={15}
            as="textarea"
            defaultValue={form.text}
          />
        </Form.Group>


    </Form>


    
  </Modal.Body>
  <Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="primary" onClick={onSubmitCreate}>
      Create
    </Button>
  </Modal.Footer>
</Modal>
</div>


  </div>
);
};

export default ReviewModal;