import { Button, Card, Grid, TextField } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";

import OrderTasleemTable from "./OrderTaslemTable";
import OrderTasleemModal from "./OrderTasleemModal";
// import ActivityTable from "./ActivityTable";
// import T2seetTable from "./T2seetTable";

const OrderTasleem = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
                  طلبات التسليم
                </MDTypography>
                <div>
                  <TextField placeholder="ابحث"></TextField>
                </div>
                
              </MDBox>
              <MDBox>
                <OrderTasleemTable handleOpen={handleOpen}/>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
        <OrderTasleemModal openMG={open} handleOpen={handleOpen} handleCloseMG={handleClose} />
      </MDBox>
    </DashboardLayout>
  );
};

export default OrderTasleem;
