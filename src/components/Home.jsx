// import React, { useContext } from "react";
// import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { logout } from "../folder/PatientSlice";
export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const HandleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  //   const userSeletor = useSelector((state) => state.auth.auth);

  return (
    <>
      <div className="HomeClass">
        <nav className="NavBar">
          <h1 className="header">
            HEATHCARE APP
            <iconify-icon icon="medical-icon:cardiology"></iconify-icon>
          </h1>
          <div className="link">
            <br />
            <Link className="linkText" to="/patient">
              PATIENT
            </Link>
            <br />
            <Link to="/admin" className="linkText">
              ADMIN
            </Link>
            <br />
          </div>

          <Button onClick={HandleLogout} className="Button" variant="contained">
            LOG OUT
          </Button>
        </nav>
      </div>
      <Footer />
    </>
  );
}
