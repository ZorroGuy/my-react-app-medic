// import { useSelector } from "react-redux";
// import { selectUser } from "./folder/PatientSlice";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Patient from "./components/Patient";
import Admin from "./components/Admin";
import Missing from "./components/Missing";
import Layout from "./components/Layout";
import Unauthorized from "./components/Unauthorized";
import RequiedAuth from "./components/RequiredAuth";
import Home from "./components/Home";
import Success from "./components/Success";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* {PUBLIC ROUTES} */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="unathorised" element={<Unauthorized />} />
          <Route path="success" element={<Success />} />
          {/* {PROTECTED ROUTES} */}

          <Route
            element={
              <RequiedAuth allowedRoles={["Patient", "Admin", "Patient2"]} />
            }
          >
            <Route path="/" element={<Home />} />
          </Route>

          <Route
            element={<RequiedAuth allowedRoles={["Patient", "Patient2"]} />}
          >
            <Route path="Patient" element={<Patient />} />
          </Route>

          <Route element={<RequiedAuth allowedRoles={["Admin"]} />}>
            <Route path="admin" element={<Admin />} />
          </Route>

          {/* {default Page} */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </>
  );
}
