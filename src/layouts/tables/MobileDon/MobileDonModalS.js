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
  import { FaUser } from "react-icons/fa";
  import { Link } from "react-router-dom";
  
  const MobileDonModalS = ({ handleClose, handleOpen, open, setRowd }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 490,
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
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="successnomod">
            <div
              style={{
                width: "100%",
                background: "green",
                padding: "0.5rem 0.4rem",
                textAlign: "right",
                color:"white"
              }}
              className="flex-bet "
            >
              <div>مهندس حاتم</div>
              <div>
                <FaUser size={26} />
              </div>
            </div>
            <p>
              <span>ainshams-darorman@gmail.com</span>
              <span> : البريد الالكتروني</span>
            </p>
            <p>
              <span>CIB</span>
              <span> : البنك</span>
            </p>{" "}
            <p>
              <span> : الاسم </span>
              <span>مهندس حاتم</span>
            </p>{" "}
            <p>
              <span>012528273638</span>
              <span> : رقم المحمول </span>
            </p>{" "}
            <p>
              <span> الراعي: </span>
              <span>منة الله عصام</span>
            </p>{" "}
            <p>
              <span>9238366353526-927262525</span>
              <span> : رقم التحويل </span>
            </p>{" "}
            <p>
              <span>697444</span>
              <span> : رقم الايصال </span>
            </p>{" "}
            <p>
              <span> pm 11:55:21 1/12/2014 </span>
              <span> : تارخي العملية</span>
            </p>{" "}
            <p>
              <span>330</span>
              <span> : قيمة التبرع</span>
            </p>{" "}
            <p>
              <span>EGP</span>
              <span> : العملة</span>
            </p>
            <p>
              <span>هدف التبرع :</span>
              <span> صدقة</span>
            </p>
            <p>
              <span>نوع التبرع :</span>
              <span> صدقة</span>
            </p>
            <div
              style={{ width: "100%", background: "#222", padding: "0.5rem 0.4rem" }}
              className="flex-cen"
            >
              <span style={{ color: "#fff" }}>تبرعات مضافة</span>
            </div>
            <p>
              <span>697444</span>
              <span> : رقم الايصال</span>
            </p>
            <p>
              <span>pm 11:55:21 1/12/2014</span>
              <span> : تاريخ العملية </span>
            </p>
            <p>
              <span>صافي التبرع :</span>
              <span> 330</span>
            </p>
            <div style={{ marginTop: "15px" }} className="flex-cenc">
              <Button
                variant="contained"
                color="success"
                style={{ background: "green", color: "white" }}
              >
                اعادة ارسال
              </Button>
              <Link to="" style={{ marginTop: "5px" }}>
                الذهاب الى العملية
              </Link>
            </div>
            <form>
              <Box>
                <Typography variant="h6" mb={2}>
                  اختر الحالة
                </Typography>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label"> الحالة</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label=" الحالة"
                    style={{ direction: "rtl", height: "50px" }}
                    onChange={handleChange}
                  >
                    <MenuItem value={0}>كفارة اليمين</MenuItem>
                    <MenuItem value={1}>كفارة اليمين</MenuItem>
                    <MenuItem value={2}>كفارة اليمين</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className="flex-cen" style={{marginTop:"15px"}}>
                  <Button
                    variant="contained"
                    color="success"
                    style={{ background: "green", color: "white" }}
                  >
                    حفظ{" "}
                  </Button>
                </FormControl>
              </Box>{" "}
            </form>
            <div
              style={{
                width: "100%",
                background: "green",
                padding: "0.5rem 0.4rem",
                textAlign: "right",
                marginTop: "15px",
                color:"white"
              }}
              className="flex-bet "
            >
              <div>Succeess</div>
              <div>الحالة</div>
            </div>
            {/* <form className="modall">
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
            </form> */}
          </Box>
        </Modal>
      </div>
    );
  };
  
  export default MobileDonModalS;
  