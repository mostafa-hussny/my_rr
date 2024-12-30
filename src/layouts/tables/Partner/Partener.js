import { Button, Card, Grid, TextField } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState } from "react";
// import Mytable1data from "../data/projectsTableData";

import PartenerTable from "./PartenerTable";
import PartenerModal from "./PartenerModal";
// import ActivityTable from "./ActivityTable";
// import T2seetTable from "./T2seetTable";

const Partener = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [refetch, setrefetch] = useState(false);

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
                  الشركاء
                </MDTypography>
                <Button
                  style={{ fontSize: "1.5rem", color: "yellow" }}
                  variant=""
                  onClick={handleOpen}
                >
                  اضافة شريك
                </Button>
              </MDBox>
              <MDBox>
                <PartenerTable setrefetch={setrefetch} refetch={refetch} />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <PartenerModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        setrefetch={setrefetch}
        refetch={refetch}
      />
    </DashboardLayout>
  );
};

export default Partener;
