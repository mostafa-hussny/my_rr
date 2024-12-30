import {
    Box,
    Button,
    Modal,
    TextField,
    TextareaAutosize,
    Typography,
    FileInput,
  } from "@mui/material";
  import React, { useState } from "react";
  
  const JornalModal = ({ handleClose, handleOpen, open }) => {
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
                <Typography variant="h6">اسم الجريدة</Typography>
                <TextField
                  label="عنوان القسم"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  style={{ direction: "rtl" }}
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
  
  export default JornalModal;
  