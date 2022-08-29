import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Sub = ({ id, subname, date, content, handleRemoveSub }) => {
  const history = useHistory();

  return (
    <div className="write-center">
      <Card className="sub">
        <Card.Body>
          <Card.Title className="sub-title">{subname}</Card.Title>
          <div className="sub-details">
            <pre>{content} </pre>
            <div>Date: {new Date(date).toDateString()}</div>
          </div>
          <div className="gbar3">
            <Button
              variant="primary"
              size="sm"
              onClick={() => history.push(`/edit/${id}`)}
            >
              Edit
            </Button>{" "}
            <Button
              variant="secondary"
              size="sm"
              onClick={() => handleRemoveSub(id)}
            >
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Sub;
