import React, { useState } from "react";
import Button from "./Button";

const Profile = () => {
  const [status, setStatus] = useState(true);

  function toggleLogin() {}

  return (
    <div>
      <p>{status}</p>

      <Button onClick={toggleLogin} />
    </div>
  );
};

export default Profile;
