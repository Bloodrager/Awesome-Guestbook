import classes from "./VisitorManagement.module.css";
import { Checkbox, FormControlLabel, Button } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const VisitorManagement = () => {
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Visitor",
      width: 500,
      sortable: false,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "email",
      headerName: "Email",
      width: 500,
      sortable: false,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "select",
      headerName: "Department",
      width: 330,
      sortable: false,
      headerAlign: "right",
      align: "right",
    },
  ];

  const rows = [
    {
      id: 1,
      name: "Prabodhan Fitzgerald",
      email: "fitzgerald@mail.com",
      select: "Marketing",
    },
    { id: 2, name: "Hiro Joyce", email: "joyce@mail.com", select: "IT" },
    {
      id: 3,
      name: "Lloyd Jefferson",
      email: "jefferson@mail.com",
      select: "Sales",
    },
    {
      id: 4,
      name: "Ceiran Mayo",
      email: "mayo@mail.com",
      select: "Management",
    },
    {
      id: 5,
      name: "Thumbkino James",
      email: "james@mail.com",
      select: "Accounting",
    },
  ];

  return (
    <div className={classes.content}>
      <div className={classes.heading}>
        <h1>Visitor management</h1>
        <FormControlLabel control={<Checkbox />} />
        <Button
          type="submit"
          variant="contained"
          color="warning"
          sx={{
            color: "white",
            background: "#D32F2F",
          }}
        >
          Remove
        </Button>
      </div>
      <div>
        <DataGrid
          rows={rows}
          columns={columns}
          sx={{
            width: "1400px",
          }}
          checkboxSelection
          disableColumnMenu={true}
          hideFooter
        />
      </div>
    </div>
  );
};

export default VisitorManagement;
