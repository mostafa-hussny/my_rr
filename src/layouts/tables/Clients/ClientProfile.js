import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";
// import Mytable1data from "../data/projectsTableData";

import ClientTable from "./ClientsTable";
import ClientProfileTable from "./ClientProfileTable";
import { useParams } from "react-router-dom";
import { FaUser, FaUserCircle } from "react-icons/fa";
// import ActivityTable from "./ActivityTable";
// import T2seetTable from "./T2seetTable";

const ClientProfile = () => {
  const [open, setOpen] = React.useState(false);
  const [rowID, setRowID] = React.useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { id } = useParams();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <div style={{ marginBottom: "2.2rem" }} className="flex-ali">
              <FaUserCircle size={70} />
              <h4 style={{ margin: "0px 0.9rem" }}>Manar Bahaa</h4>
              <i style={{ fontSize: "0.9rem" }}>0100292838</i>
            </div>
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{ height: "5rem", background: "white", width: "19rem" }}
                  className="flex-cen"
                >
                  عدد الروابط : 4
                </div>
                <div
                  style={{ height: "5rem", background: "white", width: "19rem" }}
                  className="flex-cen"
                >
                  مجموع التبرعات USD
                </div>
                <div
                  style={{ height: "5rem", background: "white", width: "19rem" }}
                  className="flex-cen"
                >
                  مجموع التبرعات EGP 563.564
                </div>
                <TextField  placeholder="بحث"></TextField>
                <Button style={{color:"yellow",fontSize:"2.2rem"}}>اضافة جديد</Button>
              </MDBox>
              <MDBox>
                <ClientProfileTable />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
};

export default ClientProfile;
