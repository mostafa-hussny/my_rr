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
import React, { useState } from "react";

const NewsModal = ({ handleClose, handleOpen, open, refetch, setRefetch }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    description: "",
    enDescription: "",
    link: "stsjsring",
    newsPaperId: 1,
    image: "",
  });
 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

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
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Display the chosen photo
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
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
          <form className="modall">
            <Box>
              <Typography variant="h6">العنوان</Typography>
              <TextField
                label="عنوان الخبر"
                name="description"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
                value={formData.description}
                onChange={handleChange}
              />
            </Box>
            {/* <Box>
              <Typography variant="h6">الجريدة</Typography>
              <TextField
                label="الجريدة"
                variant="outlined"
                name="newspaper"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
                value={formData.newspaper}
                onChange={handleChange}
              />
            </Box> */}
            <Box>
              <Typography variant="h6">العنوان باللغة الانجليزية</Typography>
              <TextField
                label="عنوان الخبر"
                variant="outlined"
                name="enDescription"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
                value={formData.enDescription}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <Typography variant="h6"> اختر صورة للجريدة</Typography>
              <input type="file" onChange={handleImageChange} />
              {selectedImage && (
                <Box mt={2}>
                  <img
                    src={selectedImage}
                    alt="Chosen"
                    style={{ maxWidth: "100%", maxHeight: "200px" }}
                  />
                </Box>
              )}
            </Box>
            <Box mt={2}>
              <Button
                variant="contained"
                color="success"
                style={{ backgroundColor: "green", color: "white" }}
                onClick={() => {
                
                  axios
                    .post(baseurl + "OnlineNews", formData)
                    .then((response) => {
                      setRefetch(!refetch);
                    })
                    .catch((error) => {
                      console.error("Error:", error);
                    });
                }}
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

export default NewsModal;
