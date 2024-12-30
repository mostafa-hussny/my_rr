import {
  Box,
  Button,
  Modal,
  TextField,
  TextareaAutosize,
  Typography,
  FileInput,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  InputLabel,
  Select,
  MenuItem,
  NativeSelect,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Activities.css";
import UseFetch from "UseFetch";
const UpdateActivitiesModal = ({ handleClose, handleOpen, open, rowId }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const data3 = UseFetch(`Project/${rowId}`);

  const [itemState, setItemState] = useState({});

  const data = UseFetch("Category");
  const handlechangeArr = (e, index, field) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setItemState((prevData) => {
      const updatedPortions = [...prevData.portions];
      updatedPortions[index] = {
        ...updatedPortions[index],
        [field]: value,
      };

      return {
        ...prevData,
        portions: updatedPortions,
      };
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
  const [selectedValues, setSelectedValues] = useState([]);

  const options = UseFetch("Type/GetAllTypes");
  const handleCheckboxChange = (value) => {
    if (selectedValues.includes(value)) {
      // If the value is already selected, remove it
      setSelectedValues(selectedValues.filter((v) => v !== value));
    } else {
      // If the value is not selected, add it
      setSelectedValues([...selectedValues, value]);
    }
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
  useEffect(() => {
    setItemState((prevData) => {
      return {
        ...prevData,
        typsIDs: selectedValues,
      };
    });
  }, [selectedValues]);

  const [cat, setcat] = useState("");
  useEffect(() => {
    if (data3) {
      setItemState((prevData) => ({
        ...data3,
        portions: data3.portions || [],
      }));
    }
    setcat(data3?.categoryId);
  }, [data3]);
  const handleChange = (event) => {
    setcat(event.target.value);
  };

  const handleinp = (e) => {
    setItemState((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
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
              <FormControl fullWidth>
                <NativeSelect
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue={cat}
                  value={cat}
                  label="اختر قسم"
                  style={{ direction: "rtl", height: "50px" }}
                  onChange={handleChange}
                >
                  {data?.map((item) => {
                    return (
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                    );
                  })}
                </NativeSelect>
              </FormControl>
            </Box>
            <Box>
              <Typography variant="h6">العنوان</Typography>
              <TextField
                label={itemState.name}
                variant="outlined"
                margin="normal"
                fullWidth
                style={{ direction: "rtl" }}
                required
                value={itemState.name}
                name="name"
                onChange={handleinp}
              />
            </Box>
            <Box>
              <Typography variant="h6">العنوان </Typography>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                required
                value={itemState.description}
                style={{ direction: "rtl" }}
                name="description"
                onChange={handleinp}
              />
            </Box>{" "}
            <Box>
              <Typography variant="h6" gutterBottom>
                العنوان باللغة الانجليزية{" "}
              </Typography>
              <TextareaAutosize
                aria-label="Additional Comments"
                placeholder="المحتوى"
                minRows={6}
                maxRows={7}
                value={itemState.enDescription}
                style={{ width: "100%", marginTop: 8, direction: "rtl" }}
                name="enDescription"
                onChange={handleinp}
              />
            </Box>{" "}
            <Box>
              <Typography variant="h6" gutterBottom>
                المحتوى باللغة الانجليزية{" "}
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
              {" "}
              <FormControl component="">
                <FormLabel> اختر تصنيف التبرع</FormLabel>
                <FormGroup>
                  {options?.map((option) => (
                    <FormControlLabel
                      key={option.id}
                      className="labell"
                      control={
                        <Checkbox
                          checked={selectedValues.includes(option.id)}
                          onChange={() => handleCheckboxChange(option.id)}
                        />
                      }
                      label={option.name}
                      labelPlacement="start" // Align checkboxes at the start of the label
                    />
                  ))}
                </FormGroup>
                {/* <div>
                    <strong>Selected Values:</strong>{" "}
                    {selectedValues.length > 0 ? selectedValues.join(", ") : "No options selected"}
                  </div> */}
              </FormControl>
            </Box>
            <div className="flex" style={{ cursor: "pointer" }}>
              <FormLabel
                onClick={() => {
                  setItemState((prevData) => ({
                    ...prevData,
                    portions: [
                      ...prevData.portions,
                      {
                        name: "",
                        enName: "",
                        amount: 1,
                        isDeleted: false,
                        needForSpecificName: true,
                        customPortionPrice: true,
                        needForDeliveryAddress: true,
                      },
                    ],
                  }));
                }}
                style={{ fontSize: "1.2rem" }}
              >
                {" "}
                اضافة اسهم نشاط جديد
              </FormLabel>
            </div>
            {itemState?.portions?.map((item, index) => (
              <div key={index}>
                <Box>
                  <FormGroup>
                    <FormControlLabel
                      key={"اسم السهم"}
                      className="labell"
                      control={
                        <Checkbox
                          checked={item.needForSpecificName}
                          onChange={(e) => handlechangeArr(e, index, "needForSpecificName")}
                        />
                      }
                      label={"اسم السهم"}
                      labelPlacement="start"
                    />
                  </FormGroup>
                </Box>
                <Box>
                  <Typography variant="h6"> {index + 1} قيمة السهم</Typography>
                  <TextField
                    label={`قيمة السهم${index + 1}`}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    style={{ direction: "rtl" }}
                    required
                    value={item.amount}
                    name="amount"
                    onChange={(e) => handlechangeArr(e, index, "amount")}
                  />
                </Box>
                <Box>
                  <Typography variant="h6"> {index + 1} تفاصيل السهم</Typography>
                  <TextField
                    label={`تفاصيل السهم${index + 1}`}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    style={{ direction: "rtl" }}
                    required
                    value={item.name}
                    onChange={(e) => handlechangeArr(e, index, "eName")}
                  />
                </Box>
                <Box>
                  <Typography variant="h6"> {index + 1} تفاصيل السهم باللغة الانجليزية</Typography>
                  <TextField
                    label={`تفاصيل السهم باللغة الانجليزية${index + 1}`}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name={`accountNumber${index + 1}`}
                    style={{ direction: "rtl" }}
                    required
                    value={item.enName}
                    onChange={(e) => handlechangeArr(e, index, "enName")}
                  />
                </Box>
              </div>
            ))}
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

export default UpdateActivitiesModal;
