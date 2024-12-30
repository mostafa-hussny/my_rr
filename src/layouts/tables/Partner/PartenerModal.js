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

const PartenerModal = ({ handleClose, handleOpen, open, refetch, setrefetch }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [itemState, setItemState] = useState({
    name: "",
    enName: "",
    image: "sk",
    link: "",
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
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setItemState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
              <Typography variant="h6">اسم الشريك</Typography>
              <TextField
                label="الاسم"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
                name="name"
                value={itemState.name}
                onChange={handleInputChange}
              />
            </Box>
            <Box>
              <Typography variant="h6">اسم الشريك باللغة الانجليزية</Typography>
              <TextField
                label="اسم المنطقة"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
                name="enName"
                value={itemState.enName}
                onChange={handleInputChange}
              />
            </Box>

            <Box>
              <Typography variant="h6">رابط الويب للشريك</Typography>
              <TextField
                label="example.com"
                variant="outlined"
                margin="normal"
                fullWidth
                style={{ direction: "rtl" }}
                required
                name="link"
                value={itemState.link}
                onChange={handleInputChange}
              />
            </Box>

            <Box>
              <Typography variant="h6"> اختر صورة للشريك</Typography>
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
                    .post(baseurl + "SuccessPartener", itemState)
                    .then((response) => {
                      // Handle the response as needed
                      setrefetch(!refetch);
                  
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

export default PartenerModal;
