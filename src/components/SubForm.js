import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const SubForm = (props) => {
  const [sub, setSub] = useState(() => {
    return {
      subname: props.sub ? props.sub.subname : '',
      price: props.sub ? props.sub.price : '',
      date: props.sub ? props.sub.date : ''
    };
  });


  const [errorMsg, setErrorMsg] = useState('');
  const { subname, price } = sub;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [subname, price];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const sub = {
        id: uuidv4(),
        subname,
        price,
        date: new Date()
      };
      props.handleOnSubmit(sub);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setSub((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setSub((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setSub((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Sub Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="subname"
            value={subname}
            placeholder="Enter name of sub"
            onChange={handleInputChange}
          />
        </Form.Group>


        <Form.Group controlId="price">
          <Form.Label>Sub Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of sub"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SubForm;