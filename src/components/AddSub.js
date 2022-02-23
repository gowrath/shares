import React from "react";
import SubForm from "./SubForm";

const AddSub = ({ history, subs, setSubs }) => {
  const handleOnSubmit = (sub) => {
    setSubs([sub, ...subs]);
    history.push("/projects");
  };

  return (
    <div className="left">
      <React.Fragment>
        <SubForm handleOnSubmit={handleOnSubmit} />
      </React.Fragment>
    </div>
  );
};

export default AddSub;
