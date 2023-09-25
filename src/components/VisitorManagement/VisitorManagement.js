import classes from "./VisitorManagement.module.css";
import { Checkbox, FormControlLabel, Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";

const VisitorManagement = (props) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

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
      field: "field",
      headerName: "Department",
      width: 330,
      sortable: false,
      headerAlign: "right",
      align: "right",
    },
  ];

  const handleRemoveClick = () => {
    if (isCheckboxChecked) {
      const updatedRows = props.rows.filter(
        (row) => !selectedRows.includes(row.id)
      );
      props.onRemove(updatedRows);
      setSelectedRows([]);
    } else {
      alert("Please check the checkbox to confirm removal.");
    }
  };

  return (
    <div className={classes.content}>
      <div className={classes.heading}>
        <h1>Visitor management</h1>
        <FormControlLabel
          control={
            <Checkbox
              checked={isCheckboxChecked}
              onChange={(event) => setIsCheckboxChecked(event.target.checked)}
            />
          }
        />
        <Button
          type="submit"
          variant="contained"
          color="warning"
          sx={{
            color: "white",
            background: "#D32F2F",
          }}
          onClick={handleRemoveClick}
        >
          Remove
        </Button>
      </div>
      <div>
        <DataGrid
          rows={props.rows}
          columns={columns}
          sx={{
            width: "1400px",
          }}
          checkboxSelection
          disableColumnMenu={true}
          hideFooter
          onRowSelectionModelChange={(newSelection) => {
            setSelectedRows(newSelection);
            console.log(newSelection);
          }}
        />
      </div>
    </div>
  );
};

export default VisitorManagement;
