import React, { useState } from "react";
import Button from "./Button";

const Profile = () => {
  const [status, setStatus] = useState("Logged In");

  return (
    <div>
      <p>{status}</p>

      <Button status={status} setStatus={setStatus} />
    </div>
  );
};

export default Profile;
