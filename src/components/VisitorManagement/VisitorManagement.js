import classes from "./VisitorManagement.module.css";
import { Checkbox, FormControlLabel, Button } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useState } from "react";

const VisitorManagement = (props) => {
  const [selectedRows, setSelectedRows] = useState([]);

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

  const handleRemoveClick = () => {
    const updatedRows = props.rows.filter(
      (row) => !selectedRows.includes(row.id)
    );
    props.onRemove(updatedRows);
    setSelectedRows([]);
  };

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
          onSelectionModelChange={(newSelection) => {
            setSelectedRows(newSelection);
            console.log(newSelection); 
          }}
          key={props.rows.map((row) => row.id).join(",")}
        />
      </div>
    </div>
  );
};

export default VisitorManagement;
