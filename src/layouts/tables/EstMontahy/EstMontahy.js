import { Button, Card, Grid, TextField } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";
// import Mytable1data from "../data/projectsTableData";
import Footer from "examples/Footer";
import EstMontahyDrawer from "./EstMontahyDrawer";
// import ActivityTable from "./ActivityTable";
// import T2seetTable from "./T2seetTable";

const EstMontahy = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <EstMontahyDrawer />
    </DashboardLayout>
  );
};

export default EstMontahy;
