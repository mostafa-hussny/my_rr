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
import UseFetch from "UseFetch";
import React, { useState } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
const BranchModal = ({ handleClose, handleOpen, open }) => {
  const [tags, setTags] = useState([]);
 const data=UseFetch("Department")

  const handleChange = (tags) => {
    setTags(tags);
  };
  const handleChange1 = (event) => {
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
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">اختر </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="اختر"
                  style={{ direction: "rtl", height: "50px" }}
                  onChange={handleChange1}
                >
                  <MenuItem value={0}>كفارة اليمين</MenuItem>
                  <MenuItem value={1}>كفارة اليمين</MenuItem>
                  <MenuItem value={2}>كفارة اليمين</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box>
              <Typography variant="h6">اسم المنطقة</Typography>
              <TextField
                label="اسم المنطقة"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
              />
            </Box>

            <Box>
              <Typography variant="h6">المنطقة باللغة الانجليزية</Typography>
              <TextField
                label="عنوان المنطقة"
                variant="outlined"
                margin="normal"
                fullWidth
                style={{ direction: "rtl" }}
                required
              />
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>
                العنوان
              </Typography>
              <TextareaAutosize
                aria-label="Message"
                placeholder="العنوان التفصيلي"
                minRows={6}
                maxRows={6}
                style={{ width: "100%", marginTop: 8, direction: "rtl" }}
                required
              />
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>
                العنوان باللغة الانجليزية{" "}
              </Typography>
              <TextareaAutosize
                aria-label="Additional Comments"
                placeholder="العنوان التفصيلي"
                minRows={6}
                maxRows={7}
                style={{ width: "100%", marginTop: 8, direction: "rtl" }}
              />
            </Box>
            <Box>
              <Typography variant="h6">اختر صورة</Typography>
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
            <Box>
              <Typography variant="h6">اضف رقم</Typography>

              <TagsInput
                value={tags}
                onChange={handleChange}
                inputProps={{ placeholder: "اضف رقم" }}
              />
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

export default BranchModal;
