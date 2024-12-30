import { Button, Card, Grid, TextField } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState } from "react";
import QuestionsMostTable from "./QuestionsMostTable";
import QuestionsMostModal from "./QuestionsMostModal";

const QuestionsMost = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [refetch, setrefetch] = useState(false);
  const [myrow, settherow] = useState(0);
  const [filterValue, setFilterValue] = useState("");


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
                <TextField
                  label="بحث"
                  variant="outlined"
                  margin="normal"
                  required
                  style={{ direction: "rtl" }}
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                />
                <Button
                  style={{ fontSize: "1.5rem", color: "yellow" }}
                  onClick={handleOpen}
                  variant=""
                >
                  اضافة سؤال
                </Button>
              </MDBox>
              <MDBox>
                <QuestionsMostTable
                  settherow={settherow}
                  filterValue={filterValue}
                  handleOpen={handleOpen}
                  setrefetch={setrefetch}
                  refetch={refetch}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
        <QuestionsMostModal
          open={open}
          row={myrow}
          handleClose={handleClose}
          setrefetch={setrefetch}
          refetch={refetch}
        />
      </MDBox>
    </DashboardLayout>
  );
};

export default QuestionsMost;
