import { Button, Card, Grid } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState } from "react";
// import Mytable1data from "../data/projectsTableData";
import Footer from "examples/Footer";
// import ActivityTable from "./ActivityTable";
import T2seetTable from "./T2seetTable";
import T2seetModal from "./T2seetModal";

const T2seet = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [refetch, setRefetch] = useState(false);
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
                <MDTypography variant="h6" color="white">
                  انظمة التقسيط
                </MDTypography>

                <Button
                  style={{ fontSize: "1.5rem", color: "yellow" }}
                  variant=""
                  onClick={handleOpen}
                >
                  اضافة نظام تقسيط
                </Button>
              </MDBox>
              <MDBox>
                <T2seetTable refetch={refetch} setRefetch={setRefetch} />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
        <T2seetModal
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          refetch={refetch}
          setRefetch={setRefetch}
        />
      </MDBox>
    </DashboardLayout>
  );
};

export default T2seet;
