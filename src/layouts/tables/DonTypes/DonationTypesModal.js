import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { baseurl } from "BaseUrl";
import axios from "axios";
import React, { useState } from "react";

const DonationTypesModal = ({ handleClose, open, setrefetch, refetch }) => {
  // const [selectedImage, setSelectedImage] = useState(null);
  const [projectState, setProjectState] = useState({
    name: "",
    enName: "",
    description: "",
    enDescription: "",
    isDeleted: false,
    showDescription: true,
    typeOfProject: null,
  });
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 390,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflowY: "auto",
    overflowX: "hidden", // Add this line to hide the horizontal scrollbar
    direction: "rtl",
    textAlign: "right",
    maxHeight: "90vh",

    "@media (max-width: 500px)": {
      width: "290px", // Adjust for larger screens
    },
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProjectState({
      ...projectState,
      [name]: value,
    });
  };
  const addData = (e) => {
    e.preventDefault();
    axios
      .post(baseurl + "Type", projectState)
      .then((response) => {
        setrefetch(!refetch);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="modall" onSubmit={addData}>
            <Box>
              <Typography variant="h6">نوع التبرع</Typography>
              <TextField
                label="نوع التبرع"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                name="name"
                style={{ direction: "rtl" }}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <Typography variant="h6">نوع التبرع باللغة الانجليزية</Typography>
              <TextField
                label="نوع التبرع"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
                onChange={handleChange}
                name="enName"
              />
            </Box>

            <Box mt={2}>
              <Button
                variant="contained"
                color="success"
                type="submit"
                style={{ backgroundColor: "green", color: "white" }}
              >
                حفظ
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default DonationTypesModal;
