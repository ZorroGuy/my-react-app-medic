import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { remove, selectUser } from "../folder/PatientSlice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";

//
const Admin = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(user);

  const handleremove = (index) => {
    dispatch(remove(index));
  };

  return (
    <>
      <nav className="NavBar">
        <h1 className="heading">Admin Page</h1>
        <div className="link">
          <Link className="linkText" to="/">
            Home
          </Link>
        </div>
      </nav>
      <br />
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="Table">NO.</TableCell>
                <TableCell align="center" className="Table">
                  FIRST NAME
                </TableCell>
                <TableCell align="center" className="Table">
                  LAST NAME
                </TableCell>
                <TableCell align="center" className="Table">
                  E-MAIL
                </TableCell>
                <TableCell align="center" className="Table">
                  GENDER
                </TableCell>
                <TableCell align="center" className="Table">
                  STATUS
                </TableCell>
                <TableCell align="center" className="Table">
                  REMOVE
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user?.map((row, index) => (
                <TableRow
                  key={row?.firstname}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="center">{row?.firstname}</TableCell>
                  <TableCell align="center">{row?.lastName}</TableCell>
                  <TableCell align="center">{row?.email}</TableCell>
                  <TableCell align="center">{row?.gender}</TableCell>
                  <TableCell align="center">{row?.Status}</TableCell>

                  <TableCell align="center">
                    <button onClick={() => handleremove(index)}>
                      <Grid item>
                        <DeleteIcon />
                      </Grid>
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Admin;
