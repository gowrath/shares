import React from "react";
import Userfront from "@userfront/react";

Userfront.init("jb747qn6");

const PasswordResetForm = Userfront.build({
  toolId: "lobndm",
});

function PasswordReset() {
  return (
    <div>
      <h2 className="center">Password Reset</h2>
      <PasswordResetForm />
    </div>
  );
}

export default PasswordReset;
