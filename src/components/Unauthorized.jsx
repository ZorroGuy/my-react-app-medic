import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Unauthorized() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="Pages">
        <h1>Unauthorised</h1>
        <br />
        <span>
          <Link to="/">To the home</Link>
          <p>You do not have access to the requested page.</p>
        </span>

        <button onClick={goBack}>Go Back</button>
      </div>
    </>
  );
}
