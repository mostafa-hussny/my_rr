import { Button, Card, Grid, TextField } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";
// import Mytable1data from "../data/projectsTableData";
import Footer from "examples/Footer";
import NewsTable from "./NewsTable";
import NewsModal from "./NewsModal";
// import ActivityTable from "./ActivityTable";
// import T2seetTable from "./T2seetTable";

const News = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [refetch, setRefetch] = React.useState(false);
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
                  اخبار
                </MDTypography>
                <div>
                  <TextField placeholder="ابحث"></TextField>
                </div>
                <Button
                  style={{ fontSize: "1.5rem", color: "yellow" }}
                  onClick={handleOpen}
                  variant=""
                >
                  اضافة خبر
                </Button>
              </MDBox>
              <MDBox>
                <NewsTable setRefetch={setRefetch} refetch={refetch} />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
        <NewsModal
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          setRefetch={setRefetch}
          refetch={refetch}
        />
      </MDBox>
    </DashboardLayout>
  );
};

export default News;