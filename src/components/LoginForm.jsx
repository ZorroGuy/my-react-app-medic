import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { useState, useRef } from "react";
import { login } from "../folder/PatientSlice";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//
export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //
  const [Name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const userRef = useRef();
  const dispatch = useDispatch();
  const loginSelector = useSelector((state) => state.user.user);
  console.log("--------------", loginSelector);
  //User Credentials
  const userCredentials = [
    {
      user: "Patient",
      password: 12345678,
      role: "Patient",
    },
    {
      user: "Admin",
      password: 12345,
      role: "Admin",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();

    // Logic check the logincredentials
    let user = userCredentials.filter((users) => {
      if (users.user === Name && users.password === Number(password)) {
        dispatch(
          login({
            username: users.user,
            role: users.role,
            password: users.password,
          })
        );
        return users;
      }
    });

    //Condition to show error
    if (user.length) {
      navigate("/");
      console.log(user);
    } else {
      alert("Login Failed");
    }
  };

  return (
    <div className="loginPage">
      <form onSubmit={handleSubmit}>
        <h1 className="heading">Login Form</h1>
        <div className="Placeholder">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "28ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="User"
              variant="outlined"
              ref={userRef}
              value={Name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </Box>

          <FormControl sx={{ m: 1, width: "28ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              ref={userRef}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
        <Button
          variant="contained"
          className="button"
          type="submit"
          onClick={handleSubmit}
        >
          LOGIN
        </Button>
      </form>
    </div>
  );
}
