import { Button, Card, Grid, TextField } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";
import ContactUsTable from "./ContactUsTable";
import ContactUsDrawer from "./ContactUsDrawer";
// import ActivityTable from "./ActivityTable";
// import T2seetTable from "./T2seetTable";

const ContactUs = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ContactUsDrawer />
    </DashboardLayout>
  );
};

export default ContactUs;
