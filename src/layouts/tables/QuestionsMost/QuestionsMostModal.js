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

const QuestionsMostModal = ({ handleClose, row, open, setrefetch, refetch }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    enName: "", // Add default values as necessary
    answer: "",
    enAnswer: "",
  });
  const handleInputChange = (e, field) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [field]: value,
    });
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
  const [inputdata, setinputdata] = useState("");
  const handleinput = (e) => {
    setinputdata(e.target.value);
   
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
              <Typography variant="h6">السؤال</Typography>
              <TextField
                label="راس السؤال"
                value={formData.name}
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
                onChange={(e) => handleInputChange(e, "name")}
              />
            </Box>

            <Box>
              <Typography variant="h6">السؤال باللغة الانجليزية</Typography>
              <TextField
                label="راس السؤال"
                value={formData.enName}
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
                onChange={(e) => handleInputChange(e, "enName")}
              />
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom>
                الاجابة
              </Typography>
              <TextareaAutosize
                aria-label="Message"
                placeholder="الاجابة"
                minRows={6}
                maxRows={6}
                style={{ width: "100%", marginTop: 8, direction: "rtl" }}
                required
                value={formData.answer}
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(e) => handleInputChange(e, "answer")}
              />
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>
                الاجابة باللغة الانجليزية
              </Typography>
              <TextareaAutosize
                aria-label="Additional Comments"
                placeholder=" الاجابة باللغة الانجليزية ....."
                minRows={6}
                maxRows={7}
                style={{ width: "100%", marginTop: 8, direction: "rtl" }}
                required
                value={formData.enAnswer}
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(e) => handleInputChange(e, "enAnswer")}
              />
            </Box>

            <Box mt={2}>
              <Button
                variant="contained"
                type="button"
                color="success"
                style={{ backgroundColor: "green", color: "white" }}
                onClick={() => {
               
                  axios
                    .post(baseurl + "Question", formData)
                    .then((res) => {
                      setrefetch(!refetch);
                    })
                    .catch((err) => {});
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

export default QuestionsMostModal;
