import { Button, Card, Grid, TextField } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";
import MobileDonationTable from "./MobileDonationTable";
import MobileDonModalS from "./MobileDonModalS";

// import ActivityTable from "./ActivityTable";
// import T2seetTable from "./T2seetTable";

const MobileDonation = () => {
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  const [openEmail, setOpenEmail] = React.useState(false);
  const handleOpenEmail = () => setOpenEmail(true);
  const handleCloseEmail = () => setOpenEmail(false);
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
                  تبرعات موبايل
                </MDTypography>
                <TextField
                  label="بحث"
                  variant="outlined"
                  margin="normal"
                  required
                  style={{ direction: "rtl" }}
                />
              </MDBox>
              <MDBox>
                {/* <WayDonationTable /> */}
                <MobileDonationTable handleOpenS={handleOpenEdit} />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {/* <ManagementModal open={open} handleOpen={handleOpen} handleClose={handleClose} /> */}
      <MobileDonModalS  open={openEdit} handleOpen={handleOpenEdit} handleClose={handleCloseEdit} />
    </DashboardLayout>
  );
};

export default MobileDonation;
