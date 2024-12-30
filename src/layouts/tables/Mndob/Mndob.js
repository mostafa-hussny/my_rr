import { Button, Card, Grid, TextField } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState } from "react";
import MndobTable from "./MndobTable";
import MandobGModal from "./MandobModal";

const Mndob = () => {
  const [openMn, setOpenMn] = React.useState(false);
  const handleOpenMn = () => setOpenMn(true);
  const handleCloseMn = () => setOpenMn(false);
  const [refetch, setrefetch] = useState(true);
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
                style={{ display: "flex", alignItems: "center", color: "white" }}
              >
                <MDTypography variant="h6" color="white" mx={2}>
                  ارسال المندوب
                </MDTypography>
              </MDBox>
              <MDBox>
                <MndobTable handleOpenMn={handleOpenMn} />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <MandobGModal handleCloseMn={handleCloseMn} openMn={openMn} />
    </DashboardLayout>
  );
};

export default Mndob;
