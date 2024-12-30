/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import MyTabel2data from "./data/authorsTableData";
import Mytable1data from "./data/projectsTableData";
import React, { useState } from "react";
import ModalTbro from "./data/ModalTbro";
import EditTbroModal from "./data/EditTbroModal";
import EmailTbroModal from "./data/EmailTbroModal";
import SearchGModal from "./data/SearchGModal";
import { TextField } from "@mui/material";

// Data

function Tables() {
  const [open, setOpen] = React.useState(false);
  const [rowD, setRowd] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  const [openEmail, setOpenEmail] = React.useState(false);
  const handleOpenEmail = () => setOpenEmail(true);
  const handleCloseEmail = () => setOpenEmail(false);
  const [openMG, setOpenMG] = React.useState(false);
  const handleOpenMG = () => setOpenMG(true);
  const handleCloseMG = () => setOpenMG(false);

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
                className="flex-bet"
              >
                <MDTypography variant="h6" color="white">
                  التبرعاتتتتتتتت
                </MDTypography>
                <TextField type="text" placeholder="بحث"/>
              </MDBox>
              {/* <ModalTbro
                handleClose={handleClose}
                handleOpen={handleOpen}
                setOpen={setOpen}
                open={open}
              /> */}
              <SearchGModal handleCloseMG={handleCloseMG} openMG={openMG} />
              <EditTbroModal
                handleCloseEdit={handleCloseEdit}
                openEdit={openEdit}
                setRowd={setRowd}
                rowD={rowD}
              />
              <EmailTbroModal handleCloseEmail={handleCloseEmail} openEmail={openEmail} />
              <MDBox>
                <Mytable1data
                  handleOpenEdit={handleOpenEdit}
                  handleOpenEmail={handleOpenEmail}
                  handleOpenMG={handleOpenMG}
                  setRowd={setRowd}
                  rowD={rowD}
                />
              </MDBox>
            </Card>
          </Grid>
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
              >
                <MDTypography variant="h6" color="white">
                  Projects Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}></MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
