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

const NewsOrmModal = ({ handleClose, handleOpen, open }) => {
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
  const [itemState, setItemState] = useState({
    title: "",
    enTitle: "",
    describtion: "",
    enDescribtion: "",
    videoLink: "",
    photos: [],
  });
  const [selectedImages, setSelectedImages] = useState([]);
  const handleImageChange = (event) => {
    const files = event.target.files;
    const imagesArray = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (e) => {
        imagesArray.push(e.target.result);
        if (imagesArray.length === files.length) {
          setSelectedImages([...selectedImages, ...imagesArray]);
        }
        setItemState((prevState) => ({
          ...prevState,
          photos: [...prevState.photos, { path: file }],
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleChange = (event) => {
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
              <Typography variant="h6">العنوان</Typography>
              <TextField
                name="title"
                value={itemState.title}
                onChange={handleChange}
                label="عنوان الخبر"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
              />
            </Box>
            <Box>
              <Typography variant="h6">العنوان باللغة الانجليزية</Typography>
              <TextField
                name="enTitle"
                value={itemState.enTitle}
                onChange={handleChange}
                label="عنوان الخبر"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
              />
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom>
                المحتوى
              </Typography>
              <TextareaAutosize
                name="describtion"
                value={itemState.describtion}
                onChange={handleChange}
                aria-label="Message"
                placeholder="تفاصيل المحتوى...."
                minRows={6}
                maxRows={6}
                style={{ width: "100%", marginTop: 8, direction: "rtl" }}
                required
              />
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>
                التفاصيل باللغة الانجليزية{" "}
              </Typography>
              <TextareaAutosize
                name="enDescribtion"
                value={itemState.enDescribtion}
                onChange={handleChange}
                aria-label="Additional Comments"
                placeholder=" تفاصيل المحتوى باللغة الانجليزية ....."
                minRows={6}
                maxRows={7}
                style={{ width: "100%", marginTop: 8, direction: "rtl" }}
              />
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom>
                لينك الخبر
              </Typography>
              <TextareaAutosize
                name="videoLink"
                value={itemState.videoLink}
                onChange={handleChange}
                aria-label="Additional Comments"
                placeholder=" تفاصيل المحتوى باللغة الانجليزية ....."
                minRows={6}
                maxRows={7}
                style={{ width: "100%", marginTop: 8, direction: "rtl" }}
              />
            </Box>
            <Box>
              <Typography variant="h6"> اختر صورة للجريدة</Typography>
              <input type="file" onChange={handleImageChange} multiple />
              {selectedImages.length > 0 && (
                <Box mt={2}>
                  {selectedImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Chosen ${index + 1}`}
                      style={{ maxWidth: "100%", maxHeight: "200px", marginRight: "10px" }}
                    />
                  ))}
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

export default NewsOrmModal;
