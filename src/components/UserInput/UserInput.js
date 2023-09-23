import classes from "./UserInput.module.css";
import {
  TextField,
  Button,
  FormControl,
  Stack,
  MenuItem,
  Checkbox,
  FormControlLabel,
  ButtonGroup,
} from "@mui/material";

const UserInput = () => {
  return (
    <div className={classes.form}>
      <h1>Add new visitor</h1>
      <FormControl className={classes.form}>
        <TextField
          id="name"
          label="Full name"
          type="text"
          value={"John"}
          sx={{
            width: "400px",
          }}
        />
        <TextField
          id="email"
          label="Email adress *"
          type="email"
          value={"john@gmail.com"}
          sx={{
            width: "400px",
          }}
        />
        <TextField
          labelId="select-label"
          id="select"
          value={"Marketing"}
          select
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
        />
        <Stack spacing={2} direction="row">
          <Button
            type="reset"
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
    </div>
  );
};

export default UserInput;
