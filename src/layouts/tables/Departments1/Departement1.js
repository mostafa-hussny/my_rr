import { Button, Card, Grid, TextField } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState } from "react";
// import Mytable1data from "../data/projectsTableData";
import Footer from "examples/Footer";
import DepartementTable from "./DepartementTable1";
import AddDeptModal from "./AddDeptModal1";
// import ActivityTable from "./ActivityTable";
// import T2seetTable from "./T2seetTable";

const Departement1 = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [refetch, setrefetch] = useState();
  const [filterValue, setFilterValue] = useState("");

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
              >
                <MDTypography variant="h6" color="white" mx={2}>
                  الاقسام
                </MDTypography>
                <TextField
                  label="بحث"
                  variant="outlined"
                  margin="normal"
                  required
                  style={{ direction: "rtl" }}
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                />
                <Button
                  style={{ fontSize: "1.5rem", color: "yellow" }}
                  variant=""
                  onClick={handleOpen}
                >
                  اضافة قسم
                </Button>
              </MDBox>
              <MDBox>
                <DepartementTable
                  refetch={refetch}
                  setrefetch={setrefetch}
                  filterValue={filterValue}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <AddDeptModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        refetch={refetch}
        setrefetch={setrefetch}
      />
    </DashboardLayout>
  );
};

export default Departement1;
