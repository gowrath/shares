import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import { useHistory } from "react-router-dom";
import ActionMovies from "./ActionMovies"

// EditPost3 is now a functional component
const EditPost3 = () => {
// Get the URL and remove the "?" at the beginning
var url = window.location.search;
url = url.replace("?", "");

// Get the history object to use for navigation
const history = useHistory();

// Set up state variables
const [isLoading, setIsLoading] = useState(false);
const [json, setJson] = useState({});

// Set up state variables for modal and define functions
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

// Fetch the data for the post to be edited
const getJSON = async () => {
const res = await fetch(
"https://webhooks.mongodb-realm.com/api/client/v2.0/app/data-wqycg/service/students/incoming_webhook/readstudent" +
"?id=" +
url
);
const data = await res.json();
setJson(data);
};

// Call getJSON when the component mounts
useEffect(() => {
getJSON();
}, []);

// Get the values from the JSON object as an array
var results = Object.values(json);

// Use reduce to convert the array of objects into a single object
var post = results.reduce((node, item) => {
Object.assign(node, item);
return node;
}, {});

// Destructure name and text from the post object
let { name, text } = post;

// Create an object with name and text
let obj = { name, text };

// Set the initial form state to the obj object
const [form, setForm] = useState(obj);

// Function to update the name field in the form state
function updateFormName(value) {
return setForm((prev) => {
return { text, ...value };
});
}

// Function to update the text field in the form state
function updateFormText(value) {
return setForm((prev) => {
return { name, ...value };
});
}

// Function to handle the form submission
const onSubmit = (e) => {
e.preventDefault();

// Set loading to true
setIsLoading(true);

// If the `name` field has not been changed, log a message
if (form.name === name) {
  console.log("name is same");
}

// If the `text` field has been changed, log a message
if (form.text !== text) {
  console.log("name is different");
}

// Create an object with the updated `name` and `text` fields
const editedForm = {
  name: form.name,
  text: form.text,
};

// Make a PUT request to update the post with the edited form data
axios
  .put(
    "https://webhooks.mongodb-realm.com/api/client/v2.0/app/data-wqycg/service/students/incoming_webhook/editpost" +
      "?id=" +
      url,
    editedForm,
    obj
  )
  .then((res) => {
    console.log(res.data);
    console.log("Post successfully updated");
  })
  .catch((error) => {
    console.log(error);
  });

// Wait 5 seconds, then navigate to the "/create" page
setTimeout(() => history.push("/create"), 5000);


};

// If the component is loading, show a loading spinner
if (isLoading) {
return <LoadingSpinner />;
}

// Otherwise, show the form to edit the post
return (

  <div className="write-center">

<div className="center">
  <Button variant="primary" onClick={handleShow}>
  Launch demo modal
</Button>

<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Modal heading</Modal.Title>
  </Modal.Header>
  <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="primary" onClick={handleClose}>
      Save Changes
    </Button>
  </Modal.Footer>
</Modal>
</div>

    <div>
      <Form onSubmit={onSubmit} value={form}>
        <Form.Group
          controlId="Name"
          value={obj.name}
          onChange={(e) => updateFormName({ name: e.target.value })}
        >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" defaultValue={obj.name} />
        </Form.Group>

        <Form.Group
          controlId="Text"
          value={obj.text}
          onChange={(e) => updateFormText({ text: e.target.value })}
        >
          <Form.Label>Text</Form.Label>
          <Form.Control
            type="text"
            rows={15}
            as="textarea"
            defaultValue={obj.text}
          />
        </Form.Group>

        <div></div>

        <Button variant="danger" size="lg" block="block" type="submit">
          {isLoading ? <LoadingSpinner /> : "Update Post"}
        </Button>
      </Form>
    </div>
    <ActionMovies />
  </div>
);
};

export default EditPost3;