import { Button, Card, Grid, TextField } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState } from "react";
// import Mytable1data from "../data/projectsTableData";

import BanksTable from "./BanksTable";
import BankModal from "./BankModal";
// import ActivityTable from "./ActivityTable";
// import T2seetTable from "./T2seetTable";

const Banks = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [refetch, setrefetch] = useState(false);
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
                  البنوك
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
                  اضافة بنك
                </Button>
              </MDBox>
              <MDBox>
                <BanksTable refetch={refetch} setrefetch={refetch} filterValue={filterValue} />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <BankModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        refetch={refetch}
        setrefetch={setrefetch}
      />
    </DashboardLayout>
  );
};

export default Banks;
