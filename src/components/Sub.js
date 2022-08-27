import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Sub = ({ id, subname, price, date, content, handleRemoveSub }) => {
  const history = useHistory();

  return (
    <div className="write-center">
      <Card style={{ width: "30rem" }} className="sub">
        <Card.Body>
          <Card.Title className="sub-title">{subname}</Card.Title>
          <div className="sub-details">
            <div>Price: {price} </div>
            <div>{content} </div>
            <div>Date: {new Date(date).toDateString()}</div>
          </div>
          <div className="gbar3">
            <Button
              variant="primary"
              onClick={() => history.push(`/edit/${id}`)}
            >
              Edit
            </Button>{" "}
            <Button variant="secondary" onClick={() => handleRemoveSub(id)}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Sub;
