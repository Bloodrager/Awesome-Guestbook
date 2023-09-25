import classes from "./UserInput.module.css";
import { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  Stack,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const UserInput = (props) => {
  const [userInput, setUserInput] = useState({
    name: "John",
    email: "john@mail.com",
    field: "Marketing",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(userInput);
    setUserInput({
      name: "",
      email: "",
      field: "",
    });
  };

  const resetHandler = (event) => {
    event.preventDefault();
    setUserInput({
      name: "",
      email: "",
      field: "",
    });
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  return (
    <div className={classes.form}>
      <h1>Add new visitor</h1>
      <form onSubmit={submitHandler}>
        <FormControl className={classes.form}>
          <TextField
            id="name"
            onChange={(event) => inputChangeHandler("name", event.target.value)}
            value={userInput.name}
            label="Full name"
            type="text"
            sx={{
              width: "400px",
            }}
          />
          <TextField
            id="email"
            onChange={(event) =>
              inputChangeHandler("email", event.target.value)
            }
            value={userInput.email}
            label="Email adress"
            type="email"
            required
            sx={{
              width: "400px",
            }}
          />
          <TextField
            id="field"
            onChange={(event) =>
              inputChangeHandler("field", event.target.value)
            }
            select
            value={userInput.field}
            label="Department"
            sx={{
              width: "400px",
            }}
          >
            <MenuItem key={1} value={"Accounting"}>
              Accounting
            </MenuItem>
            <MenuItem key={2} value={"IT"}>
              IT
            </MenuItem>
            <MenuItem key={3} value={"Management"}>
              Management
            </MenuItem>
            <MenuItem key={4} value={"Marketing"}>
              Marketing
            </MenuItem>
            <MenuItem key={5} value={"Sales"}>
              Sales
            </MenuItem>
          </TextField>
          <FormControlLabel
            control={<Checkbox />}
            label="I agree to be added to the table"
            required
          />
          <Stack spacing={2} direction="row">
            <Button
              onClick={resetHandler}
              variant="outlined"
              color="warning"
              sx={{
                borderColor: "#EF5742",
                color: "#EF5742",
              }}
            >
              Reset form
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                color: "white",
                background: "#EF5742",
                width: "260px",
              }}
            >
              Add new vistior
            </Button>
          </Stack>
        </FormControl>
      </form>
    </div>
  );
};

export default UserInput;
