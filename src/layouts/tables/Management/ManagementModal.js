import {
  Box,
  Button,
  Modal,
  TextField,
  TextareaAutosize,
  Typography,
  FileInput,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { baseurl } from "BaseUrl";
import axios from "axios";
import React, { useState } from "react";

const ManagementModal = ({ handleClose, handleOpen, open, refetch, setrefetch }) => {
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [age, setAge] = React.useState("");

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
  const [userData, setUserData] = useState({
    name: "",
    enName: "",
    jopTitle: "",
    enJopTitle: "",
    profileImage: "kj",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
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
          <form className="modall">
            <Box>
              <Typography variant="h6">الوظيفة</Typography>
              <TextField
                label="عنوان الوظيفة"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
                value={userData.jopTitle}
                onChange={handleInputChange}
                name="jopTitle"
              />
            </Box>
            <Box>
              <Typography variant="h6">الوظيفة باللغة الانجليزية</Typography>
              <TextField
                label=" الاسم"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
                value={userData.enJopTitle}
                onChange={handleInputChange}
                name="enJopTitle"
              />
            </Box>{" "}
            <Box>
              <Typography variant="h6">الاسم</Typography>
              <TextField
                label=" الاسم"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
                value={userData.name}
                onChange={handleInputChange}
                name="name"
              />
            </Box>{" "}
            <Box>
              <Typography variant="h6">الاسم باللغة الانجليزية</Typography>
              <TextField
                label="الاسم"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
                value={userData.enName}
                onChange={handleInputChange}
                name="enName"
              />
            </Box>{" "}
            <Box>
              <Typography variant="h6"> اختر صورة </Typography>
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
                type="button"
                style={{ backgroundColor: "green", color: "white" }}
                onClick={() => {
                  axios
                    .post(baseurl + "Member", userData)
                    .then(() => {
                      setrefetch(!refetch);
                    })
                    .catch(() => {});
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

export default ManagementModal;
