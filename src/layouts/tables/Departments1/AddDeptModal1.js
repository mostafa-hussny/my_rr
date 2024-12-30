import {
  Box,
  Button,
  Modal,
  TextField,
  TextareaAutosize,
  Typography,
  FileInput,
} from "@mui/material";
import { baseurl } from "BaseUrl";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AddDeptModal1 = ({ handleClose, handleOpen, open, setrefetch, refetch }) => {
  const [selectedImage, setSelectedImage] = useState(null);
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
  const [formData, setFormData] = useState({
    name: "",
    enName: "",
    description: "",
    enDescription: "",
  });
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addData = (e) => {
    e.preventDefault();

    // Create a FormData object
    // const formDataObject = new FormData();
    // formDataObject.append("name", formData.name);
    // formDataObject.append("enName:", formData.enDescription);
    // formDataObject.append("description", formData.description);
    // formDataObject.append("image", formData.image);
    // formDataObject.append("projects", "null");

  
    // Send a POST request using Axios
    axios
      .post(baseurl + "Department", formData)
      .then((response) => {
        // Handle the response as needed
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
              <Typography variant="h6">العنوان</Typography>
              <TextField
                label="عنوان القسم"
                variant="outlined"
                margin="normal"
                name="name"
                fullWidth
                required
                onChange={handleChange}
                style={{ direction: "rtl" }}
              />
            </Box>
            <Box>
              <Typography variant="h6">العنوان باللغة الانجليزية</Typography>
              <TextField
                label="عنوان القسم"
                variant="outlined"
                margin="normal"
                name="enName"
                fullWidth
                onChange={handleChange}
                style={{ direction: "rtl" }}
                required
              />
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>
                التفاصيل
              </Typography>
              <TextareaAutosize
                aria-label="Message"
                placeholder="تفاصيل القسم...."
                minRows={6}
                maxRows={6}
                name="description"
                style={{ width: "100%", marginTop: 8, direction: "rtl" }}
                required
                onChange={handleChange}
              />
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>
                التفاصيل باللغة الانجليزية{" "}
              </Typography>
              <TextareaAutosize
                aria-label="Additional Comments"
                placeholder="التفاصيل"
                minRows={6}
                maxRows={7}
                name="enDescription"
                style={{ width: "100%", marginTop: 8, direction: "rtl" }}
                onChange={handleChange}
              />
            </Box>

            <Box mt={2}>
              <Button
                variant="contained"
                color="success"
                style={{ backgroundColor: "green", color: "white" }}
                type="submit"
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

export default AddDeptModal1;
