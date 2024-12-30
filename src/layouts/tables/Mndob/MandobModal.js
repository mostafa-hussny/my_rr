import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const MandobGModal = ({ handleCloseMn, handleOpen, openMn, setRowd }) => {
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

 
  return (
    <div>
      <Modal
        open={openMn}
        onClose={handleCloseMn}
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
              color: "white",
            }}
            className="flex-bet "
          >
            <div>القاهرة</div>
            <div>
              <FaUser size={26} />
            </div>
          </div>
          <p>
            <span>ainshams-darorman@gmail.com</span>
            <span> : البريد الالكتروني</span>
          </p>
          <p>
            <span>Hossam Hosny</span>
            <span> : الاسم </span>
          </p>{" "}
          <p>
            <span>012528273638</span>
            <span> : رقم المحمول </span>
          </p>{" "}
          <p>
            <span> المحافظة : </span>
            <span>القاهرة</span>
          </p>{" "}
          <p>
            <span>500</span>
            <span> : قيمة التبرع</span>
          </p>{" "}
          <p>
            <span> هدف التبرع : </span>
            <span>صدقة جارية</span>
          </p>{" "}
          <p>
            <span> pm 11:55:21 1/12/2014 </span>
            <span> : تاريخ التسجيل</span>
          </p>{" "}
          <p>
            <span> pm 11:55:21 1/12/2014 </span>
            <span> : تاريخ المتاح</span>
          </p>{" "}
          <p>
            <span>العنوان بالتفصيل :</span>
            <span> كورنيش المعادي برج 1 فوق متوسط ابراج عثمان</span>
          </p>
        </Box>
      </Modal>
    </div>
  );
};

export default MandobGModal;
