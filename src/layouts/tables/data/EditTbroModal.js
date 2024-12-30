import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const EditTbroModal = ({ handleCloseEdit, handleOpen, openEdit, setRowd, rowD }) => {
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

  const options = ["Option 1", "Option 2", "Option 3"];
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
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="modall">
            <h4 style={{ textAlign: "center" }}>التبرع</h4>
            <Box>
              <Typography variant="h6">الاسم</Typography>
              <TextField
                value={"Nahla"}
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
              />
            </Box>
            <Box>
              <Typography variant="h6">Amount</Typography>
              <TextField
                value={rowD.tbro}
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
              />
            </Box>{" "}
            <Box>
              <Typography variant="h6">Currency</Typography>
              <TextField
                value={"EGP"}
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
              />
            </Box>{" "}
            <Box>
              <Typography variant="h6">Pay/status</Typography>
              <TextField
                value={rowD.suc}
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
              />
            </Box>{" "}
            <Box>
              <Typography variant="h6">Payement Option</Typography>
              <TextField
                value={rowD.no3}
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
              />
            </Box>{" "}
            <Box>
              <Typography variant="h6">Quantity</Typography>
              <TextField
                value={1}
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
              />
            </Box>{" "}
            <Box>
              <Typography variant="h6" mb={2}>
                المشروع
              </Typography>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">اختر مشروع</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="اختر مشروع"
                  style={{ direction: "rtl", height: "50px" }}
                  onChange={handleChange}
                >
                  <MenuItem value={0}>كفارة اليمين</MenuItem>
                  <MenuItem value={1}>كفارة اليمين</MenuItem>
                  <MenuItem value={2}>كفارة اليمين</MenuItem>
                </Select>
              </FormControl>
            </Box>{" "}
            <Box>
              <Typography variant="h6">Donate Type</Typography>
              <TextField
                value={"زكاه"}
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
              />
            </Box>{" "}
            <Box>
              <Typography variant="h6" mb={2}>
                سهم
              </Typography>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">كفارة اليمين</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="اختر مشروع"
                  style={{ direction: "rtl", height: "50px" }}
                  onChange={handleChange}
                >
                  <MenuItem value={0}>ك</MenuItem>
                  <MenuItem value={1}>كفارة اليمين</MenuItem>
                  <MenuItem value={2}>كفارة اليمين</MenuItem>
                </Select>
              </FormControl>
            </Box>{" "}
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

export default EditTbroModal;
