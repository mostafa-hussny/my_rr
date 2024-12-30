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
import React, { useEffect, useState } from "react";

const BankModal = ({ handleClose, open, refetch, setrefetch }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [bankData, setBankData] = useState({
    name: "",
    eName: "",
    enName: "",
    swiftCode: "",
    image: "sjsj",
    bankAcountNumbers: [
      {
        bankType: "",
        enBankType: "",
        accountNumber: "",
        iban: "",
      },
    ],
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

      // Set the image property in bankData
      setBankData((prevData) => ({
        ...prevData,
        image: file,
      }));
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setBankData({
      ...bankData,
      [name]: value,
    });
  };
  const handlechangeArr = (e, index, field) => {
    const { value } = e.target;

    setBankData((prevData) => {
      const updatedBankAcountNumbers = [...prevData.bankAcountNumbers];
      updatedBankAcountNumbers[index] = {
        ...updatedBankAcountNumbers[index],
        [field]: value,
      };

      return {
        ...prevData,
        bankAcountNumbers: updatedBankAcountNumbers,
      };
    });
  };
  useEffect(() => {});
  const addData = (e) => {
    e.preventDefault();

    // Create a FormData object
    // const formDataObject = new FormData();
    // formDataObject.append("swiftCode", bankData.swiftCode);
    // formDataObject.append("enName", bankData.eName);
    // formDataObject.append("bankAcountNumbers", bankData.name);
    // formDataObject.append("image", bankData.image);
    // bankData.bankAcountNumbers.forEach((account, index) => {
    //   formDataObject.append(`bankAcountNumbers[${index}][bankType]`, account.bankType);
    //   formDataObject.append(`bankAcountNumbers[${index}][enBankType]`, account.enBankType);
    //   formDataObject.append(`bankAcountNumbers[${index}][accountNumber]`, account.accountNumber);
    //   formDataObject.append(`bankAcountNumbers[${index}][iban]`, account.iban);
    // });


    // Send a POST request using Axios
    axios
      .post(baseurl + "DisplayBankAcount/AddBankAccount", bankData)
      .then((response) => {
        // Handle the response as needed
        setrefetch(!refetch);
      })
      .catch((error) => {
        console.error("Error:", error);
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
          <form className="modall" onSubmit={addData}>
            <Box>
              <Typography variant="h6">اسم البنك</Typography>
              <TextField
                label="الاسم"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
                name="name"
                onChange={handleChange}
              />
            </Box>
            <Box>
              <Typography variant="h6">اسم البنك باللغة الانجليزية</Typography>
              <TextField
                label="الاسم"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                style={{ direction: "rtl" }}
                name="eName"
                onChange={handleChange}
              />
            </Box>
            <Box>
              <Typography variant="h6">سويفت كود</Typography>
              <TextField
                label="code"
                variant="outlined"
                margin="normal"
                fullWidth
                style={{ direction: "rtl" }}
                required
                onChange={handleChange}
                name="swiftCode"
              />
            </Box>
            <Button
              onClick={() => {
                setBankData((prevData) => ({
                  ...prevData,
                  bankAcountNumbers: [
                    ...prevData.bankAcountNumbers,
                    {
                      bankType: "",
                      enBankType: "",
                      accountNumber: "",
                      iban: "",
                    },
                  ],
                }));
              }}
            >
              {" "}
              Add banks
            </Button>
            {bankData.bankAcountNumbers.map((item, index) => {
              return (
                <>
                  <Box>
                    <Typography variant="h6">نوع الحساب</Typography>
                    <TextField
                      label={`نوع الحساب${index + 1}`}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      style={{ direction: "rtl" }}
                      required
                      onChange={(e) => handlechangeArr(e, index, "bankType")}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6">نوع الحساب باللغة الانجليزية</Typography>
                    <TextField
                      label={`نوع الحساب${index + 1}`}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      style={{ direction: "rtl" }}
                      required
                      onChange={(e) => handlechangeArr(e, index, "enBankType")}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6">رقم الحساب</Typography>
                    <TextField
                      label={`رقم الحساب${index + 1}`}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      name={`accountNumber${index + 1}`}
                      style={{ direction: "rtl" }}
                      required
                      onChange={(e) => handlechangeArr(e, index, "accountNumber")}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6">iban</Typography>
                    <TextField
                      label={`Iban${index + 1}`}
                      variant="outlined"
                      margin="normal"
                      name={`iban${index + 1}`}
                      fullWidth
                      style={{ direction: "rtl" }}
                      required
                      onChange={(e) => handlechangeArr(e, index, "iban")}
                    />
                  </Box>
                </>
              );
            })}
            <Box>
              <Typography variant="h6"> اختر صورة للبنك</Typography>
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
                type="submit"
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

export default BankModal;
