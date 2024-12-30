import { Box, Button, Modal, TextField, TextareaAutosize, Typography } from "@mui/material";
import React, { useState } from "react";

const EmailTbroModal = ({ handleCloseEmail, handleOpen, openEmail }) => {
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
        open={openEmail}
        onClose={handleCloseEmail}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="modall">
            <Box>
              <Typography variant="h6">عنوان الرسالة</Typography>
              <TextField
                label="العنوان "
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
              />
            </Box>

            <Box>
              <Typography variant="h6">عنوان راسي</Typography>
              <TextField
                label="العنوان "
                variant="outlined"
                margin="normal"
                fullWidth
                style={{ direction: "rtl" }}
                required
              />
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>
                نص الرسالة
              </Typography>
              <TextareaAutosize
                aria-label="Message"
                placeholder="تفاصيل الرسالة"
                minRows={6}
                maxRows={6}
                style={{ width: "100%", marginTop: 8, direction: "rtl" }}
                required
              />
            </Box>

            <Box mt={2}>
              <Button
                variant="contained"
                color="success"
                style={{ backgroundColor: "green", color: "white" }}
              >
                ارسال
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default EmailTbroModal;
