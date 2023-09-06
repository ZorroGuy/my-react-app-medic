import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { MuiTelInput } from "mui-tel-input";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data, selectUser } from "../folder/PatientSlice";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

//
export default function Form() {
  //hooks
  const [firstname, setfirstname] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setgender] = useState("");
  const [material, setmaterial] = useState("");

  const [phone, setPhone] = useState("");

  const ref = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange2 = (newPhone) => {
    setPhone(newPhone);
  };

  //action stored in the redux
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      data({
        firstname: firstname,
        lastName: lastName,
        email: email,
        gender: gender,
        Status: material,
        LogedPage: true,
      })
    );
    navigate("/success");
  };

  return (
    <>
      <div className="FormClass">
        <h1 className="Heading">FORM</h1>
        <form className="formclass" onSubmit={(e) => handleSubmit(e)}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 2, height: "40px", width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="filled-basic"
              label="First Name"
              value={firstname}
              ref={ref}
              required
              onChange={(e) => setfirstname(e.target.value)}
              variant="filled"
            />
            <TextField
              id="filled-basic"
              label="LastName*"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              variant="filled"
            />
            <TextField
              id="filled-basic"
              label="E-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="filled"
            />
            <FormControl variant="filled" sx={{ m: 1, minWidth: 180 }}>
              <InputLabel id="demo-simple-select-filled-label">
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={gender}
                ref={ref}
                required
                onChange={(event) => setgender(event.target.value)}
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
                <MenuItem value={"others"}>Others</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 180 }}>
              <InputLabel id="demo-simple-select-filled-label">
                Material
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={material}
                onChange={(e) => setmaterial(e.target.value)}
              >
                <MenuItem value={"unmarried"}>Unmarried</MenuItem>
                <MenuItem value={"married"}>Married</MenuItem>
              </Select>
            </FormControl>
            <MuiTelInput
              value={phone}
              placeholder="Phone Number"
              onChange={handleChange2}
            />
            <p>
              <Checkbox {...label} />I agree for T&C
            </p>
            <Button
              variant="contained"
              className="button"
              color="success"
              onClick={handleSubmit}
            >
              SUBMIT
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
}
