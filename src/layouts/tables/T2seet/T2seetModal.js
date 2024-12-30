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
import UseFetch from "UseFetch";
import axios from "axios";
import React, { useState } from "react";

const T2seetModal = ({ handleClose, handleOpen, open, refetch, setRefetch }) => {
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
  const [dataSend, setDataSend] = useState({
    prepaidAmount: 0,
    isPrepaid: true,
    installmentsCount: 0,
    monthlyAmount: 0,
    portionId: 0,
  });
  const project = UseFetch("Project/getProjects");
  const [selectedItem, setSelectedItem] = useState([]);
  const [targetPro, setTargetPro] = useState(0);
  const handleChange1 = (event) => {
    const selectedItemId = event.target.value;
    setTargetPro(selectedItemId);
    const selectedItem = project.find((item) => item.id === selectedItemId);
    setSelectedItem(selectedItem);
  };
  const handleChangeData = (event) => {
    const { name, value } = event.target;
    setDataSend((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleChange2 = (event) => {
    setDataSend((prev) => {
      const newValue = event.target.value;
      return {
        ...prev,
        portionId: newValue,
      };
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
              <Typography variant="h6" mb={2}>
                اختر
              </Typography>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">اختر </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={targetPro}
                  label="اختر"
                  style={{ direction: "rtl", height: "50px", marginBottom: "2rem" }}
                  onChange={handleChange1}
                >
                  {project?.map((item) => {
                  
                    return <MenuItem value={item.id}>{item.name}</MenuItem>;
                  })}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">اختر </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={dataSend.portionId}
                  label="اختر"
                  style={{ direction: "rtl", height: "50px" }}
                  onChange={handleChange2}
                >
                  {selectedItem.portions &&
                    selectedItem?.portions.map((item) => {
                      return <MenuItem value={item.id}>{item.name}</MenuItem>;
                    })}
                </Select>
              </FormControl>
            </Box>{" "}
            <Box>
              <Typography variant="h6">عدد الاقساط في الشهر</Typography>
              <TextField
                label=" عدد الاقساط في الشهر"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
                name="monthlyAmount"
                value={dataSend.monthlyAmount}
                onChange={handleChangeData}
                type="number"
              />
            </Box>
            <Box>
              <Typography variant="h6">قيمة المقدم</Typography>
              <TextField
                label="قيمة المقدم"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
                name="prepaidAmount"
                value={dataSend.prepaidAmount}
                onChange={handleChangeData}
                type="number"
              />
            </Box>
            <Box>
              <Typography variant="h6">عدد الاقساط</Typography>
              <TextField
                label="قيمة المقدم"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
                name="installmentsCount"
                value={dataSend.installmentsCount}
                onChange={handleChangeData}
                type="number"
              />
            </Box>
            <Box mt={2}>
              <Button
                variant="contained"
                color="success"
                style={{ backgroundColor: "green", color: "white" }}
                onClick={() => {
                  axios
                    .post(baseurl + "Installment", dataSend)
                    .then(() => {
                      setRefetch(!refetch);
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

export default T2seetModal;
