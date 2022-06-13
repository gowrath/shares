import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Sub = ({ id, subname, price, date, handleRemoveSub }) => {
  const history = useHistory();

  return (
    <div>
      <Card style={{ width: "10rem" }} className="sub">
        <Card.Body>
          <Card.Title className="sub-title">{subname}</Card.Title>
          <div className="sub-details">
            <div>Price: {price} </div>
            <div>Date: {new Date(date).toDateString()}</div>
          </div>
          <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
            Edit
          </Button>{" "}
          <Button variant="danger" onClick={() => handleRemoveSub(id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Sub;
