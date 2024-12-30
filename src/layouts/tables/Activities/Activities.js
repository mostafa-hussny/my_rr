import { Button, Card, Grid } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState } from "react";
import Mytable1data from "../data/projectsTableData";
import Footer from "examples/Footer";
import ActivityTable from "./ActivityTable";
import ActivitiesModal from "./ActivitiesModal";
import UpdateActivitiesModal from "./UpdateActivities";

const Activities = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [opene, setOpene] = React.useState(false);
  const handleOpene = () => setOpene(true);
  const handleClosee = () => setOpene(false);
  const [rowId, setrowId] = useState(0);
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
                  الانشطة
                </MDTypography>
                <Button
                  style={{ fontSize: "1.5rem", color: "yellow" }}
                  variant=""
                  onClick={handleOpen}
                >
                  اضافة نشاط
                </Button>
              </MDBox>
              <MDBox>
                <ActivityTable handleOpene={handleOpene} setrowId={setrowId} />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {open && <ActivitiesModal open={open} handleOpen={handleOpen} handleClose={handleClose} />}
      {opene && (
        <UpdateActivitiesModal
          open={opene}
          handleOpen={handleOpene}
          handleClose={handleClosee}
          rowId={rowId}
        />
      )}
    </DashboardLayout>
  );
};

export default Activities;
