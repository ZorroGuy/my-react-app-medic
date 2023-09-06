import { useSelector } from "react-redux";
import Form from "./Form";
import { Link, useNavigate } from "react-router-dom";
import { selectUser } from "../folder/PatientSlice";
import { useEffect } from "react";

const Patient = () => {
  const navigate = useNavigate();
  const userInfo = useSelector(selectUser);
  console.log("--------------", userInfo);

  useEffect(() => {
    if (userInfo.length) {
      navigate("/success");
    }
  });

  return (
    <>
      <nav className="NavBar">
        <h1 className="heading">PATIENT PORTAL</h1>
        <div className="link">
          <Link className="linkText" to="/">
            Home
          </Link>
        </div>
      </nav>
      <Form />
    </>
  );
};

export default Patient;
