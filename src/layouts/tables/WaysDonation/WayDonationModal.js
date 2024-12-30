import {
  Box,
  Button,
  Modal,
  TextField,
  TextareaAutosize,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { baseurl } from "BaseUrl";
import UseFetch from "UseFetch";
import axios from "axios";
import React, { useState } from "react";

const WayDonationModal = ({ handleClose, handleOpen, open }) => {
  const data3 = UseFetch("Categ");
  const [selectedImage, setSelectedImage] = useState(null);
  const [itemstate, setitemState] = useState({
    name: "",
    enName: "",
    logo: "sk",
    describtion: "",
    enDescribtion: "",
    categsId: 0,
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
  const handleChange = (event) => {
    const { name, value } = event.target;
    setitemState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleChange2 = (event) => {
    setitemState((prevState) => ({
      ...prevState,
      categsId: event.target.value,
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
              <Typography variant="h6" mb={2}>
                محافظات وتطبيقات
              </Typography>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label"> محافظات وتطبيقات</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={itemstate.categsId}
                  label="محافظات وتطبيقات"
                  style={{ direction: "rtl", height: "50px" }}
                  onChange={handleChange2}
                >
                  {data3?.map((item) => {
                    return <MenuItem value={item.id}>{item.name}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </Box>{" "}
            <Box>
              <Typography variant="h6">العنوان</Typography>
              <TextField
                label="عنوان القسم"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
                name="name"
                value={itemstate.name}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <Typography variant="h6">العنوان باللغة الانجليزية</Typography>
              <TextField
                label="عنوان المنطقة"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
                name="enName"
                value={itemstate.enName}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom>
                التفاصيل
              </Typography>
              <TextareaAutosize
                aria-label="Message"
                placeholder=""
                minRows={6}
                maxRows={6}
                style={{ width: "100%", marginTop: 8, direction: "rtl" }}
                required
                name="describtion"
                value={itemstate.describtion}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom>
                التفاصيل باللغة الانجليزية
              </Typography>
              <TextareaAutosize
                aria-label="Message"
                minRows={6}
                maxRows={6}
                style={{ width: "100%", marginTop: 8, direction: "rtl" }}
                required
                name="enDescribtion"
                value={itemstate.enDescribtion}
                onChange={handleChange}
              />
            </Box>
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
                style={{ backgroundColor: "green", color: "white" }}
                onClick={()=>{
                  axios
                  .post(baseurl + "OtherWayToDonate/Add", itemstate)
                  .then(() => {
                    // setrefetch(!refetch);
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

export default WayDonationModal;
