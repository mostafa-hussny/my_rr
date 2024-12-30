import { Button, Card, Grid, TextField } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";
// import Mytable1data from "../data/projectsTableData";
import Footer from "examples/Footer";
import MyProfileTable from "./MyProfileTable";
import { FaUser } from "react-icons/fa";
import { useParams } from "react-router-dom";

const MyProfile = () => {
  const param = useParams();

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
                  <FaUser size={50} />
                </MDTypography>
                <div>
                  <h5>الاسم : Nahla</h5>
                  <h5>البريد الالكتروني : nahla99@gmail.com</h5>
                  <h5>رقم المحمول : 01002763638</h5>
                  <TextField placeholder="ابحث عن معلومة شخصية"></TextField>
                </div>
              </MDBox>
              <MDBox>
                <MyProfileTable />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
};

export default MyProfile;
