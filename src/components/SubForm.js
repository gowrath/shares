import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const SubForm = (props) => {
  const [validated, setValidated] = useState(false);
  const formRef = useRef(null);
  const [sub, setSub] = useState(() => {
    return {
      subname: props.sub ? props.sub.subname : "",

      date: props.sub ? props.sub.date : "",
      content: props.sub ? props.sub.content : "",
    };
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { subname, content } = sub;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [subname, content];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const sub = {
        id: uuidv4(),
        subname,

        content,
        date: new Date(),
      };
      props.handleOnSubmit(sub);
    } else {
      errorMsg = "Please fill out all the fields.";
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "quantity":
        if (value === "" || parseInt(value) === +value) {
          setSub((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;

      default:
        setSub((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Post Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="subname"
            value={subname}
            placeholder="Enter name of post"
            onChange={handleInputChange}
          />
        </Form.Group>

        {/*         <Form.Group controlId="price">
          <Form.Label>Post Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter a placeholder"
            onChange={handleInputChange}
          />
        </Form.Group> */}

        <Form.Group controlId="content">
          <Form.Label>Post Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={15}
            className="input-control"
            type="text"
            name="content"
            value={content}
            placeholder="Enter text"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button
          variant="primary"
          size="sm"
          type="submit"
          className="submit-btn"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SubForm;
