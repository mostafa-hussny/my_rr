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
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Activities.css";
import UseFetch from "UseFetch";
import axios from "axios";
import { baseurl } from "BaseUrl";
const ActivitiesModal = ({ handleClose, handleOpen, open }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [itemState, setItemState] = useState({
    name: "",
    enName: "",
    description: "",
    enDescription: "",
    isDeleted: false,
    image: "strijzjg",
    customPortionPrice: true,
    categoryId: null,
    portions: [
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
    typsIDs: [],
  });

  const data = UseFetch("Category");
  const handlechangeArr = (e, index, field, check) => {
    if (check === null) {
      const { value } = e.target;
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
    } else if (check !== null) {
      const { checked } = check.target;
      setItemState((prevData) => {
        const updatedPortions = [...prevData.portions];
        updatedPortions[index] = {
          ...updatedPortions[index],
          [field]: checked,
        };
        return {
          ...prevData,
          portions: updatedPortions,
        };
      });
    }
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
      setSelectedValues(selectedValues.filter((v) => v !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };
  const [age, setAge] = React.useState("");
  const handleChange1 = (event) => {
    setAge(event.target.value);
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

  const handleInputChange = (event) => {
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
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">اختر قسم</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="اختر قسم"
                  style={{ direction: "rtl", height: "50px" }}
                  onChange={handleChange1}
                >
                  {data?.map((item) => {
                    return (
                      <MenuItem key={item.id} value={item.name}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Typography variant="h6">العنوان</Typography>
              <TextField
                label="عنوان النشاط"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
                name="name"
                value={itemState.name}
                onChange={handleInputChange}
              />
            </Box>
            <Box>
              <Typography variant="h6">العنوان باللغة الانجليزية</Typography>
              <TextField
                label="العنوان باللغة الانجليزية"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
                name="enName"
                value={itemState.enName}
                onChange={handleInputChange}
              />
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom>
                المحتوى
              </Typography>
              <TextareaAutosize
                aria-label="Additional Comments"
                placeholder="المحتوى التفصيلي"
                minRows={6}
                maxRows={7}
                style={{ width: "100%", marginTop: 8, direction: "rtl" }}
                name="description"
                value={itemState.description}
                onChange={handleInputChange}
              />
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom>
                المحتوى باللغة الانجليزية
              </Typography>
              <TextareaAutosize
                aria-label="Additional Comments"
                placeholder="العنوان التفصيلي"
                minRows={6}
                maxRows={7}
                style={{ width: "100%", marginTop: 8, direction: "rtl" }}
                name="enDescription"
                value={itemState.enDescription}
                onChange={handleInputChange}
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
            {itemState.portions.map((item, index) => {
              return (
                <>
                  <Box>
                    <FormGroup>
                      <FormControlLabel
                        key={"اسم السهم"}
                        className="labell"
                        control={
                          <Checkbox
                            onChange={(e) => handlechangeArr(e, index, "needForSpecificName", e)}
                          />
                        }
                        label={"اسم السهم"}
                        labelPlacement="start" // Align checkboxes at the start of the label
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
                      onChange={(e) => handlechangeArr(e, index, "amount", null)}
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
                      onChange={(e) => handlechangeArr(e, index, "eName", null)}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6">
                      {" "}
                      {index + 1} تفاصيل السهم باللغة الانجليزية
                    </Typography>
                    <TextField
                      label={`تفاصيل السهم باللغة الانجليزية${index + 1}`}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      name={`accountNumber${index + 1}`}
                      style={{ direction: "rtl" }}
                      required
                      onChange={(e) => handlechangeArr(e, index, "enName", null)}
                    />
                  </Box>
                </>
              );
            })}
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
                onClick={() => {
                  axios
                    .post(baseurl + "Project", itemState)
                    .then((response) => {
                      // setrefetch(!refetch);
                    })
                    .catch((error) => {
                      console.error("Error:", error);
                    });
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

export default ActivitiesModal;
