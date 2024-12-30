import React from "react";
import DataTable from "react-data-table-component";
import { FaRegEdit, FaSearch } from "react-icons/fa";
import { MdDelete, MdEmail } from "react-icons/md";
// import DataTable from "react-data-table-component";
const CustomCell = ({ data }) => <div style={{ whiteSpace: "pre-line" }}>{data}</div>;
const Imagee = ({ data }) => (
  <div>
    <img src={data} alt="Newspaper" style={{ width: "50px", height: "50px" }} />
  </div>
);
export default function MobileDonationTable({ handleOpenEmail, handleOpenS }) {
  const columns = [
    {
      name: "رقم الايصال",
      selector: (row) => row.wasl,

      sortable: true,
      cell: (row) => <CustomCell data={row.wasl} />,
      minWidth: "130px",
    },
    {
      name: "البريد الاكتروني",
      selector: (row) => row.email,

      sortable: true,
      cell: (row) => <CustomCell data={row.email} />,
      minWidth: "290px",
    },
    {
      name: "البلد",
      selector: (row) => row.bld,
      cell: (row) => <CustomCell data={row.bld} />,
    },
    {
      name: "قيمة التبرع",
      selector: (row) => row.tbro,
      cell: (row) => <CustomCell data={row.tbro} />,
    },
    {
      name: "الراعي",
      selector: (row) => row.rayy,
      cell: (row) => <CustomCell data={row.rayy} />,
      minWidth: "190px",
    },
    {
      name: "البنك",
      selector: (row) => row.bank,
      cell: (row) => <CustomCell data={row.bank} />,
    },
    {
      name: "نوع الكرت",
      selector: (row) => row.krt,
      cell: (row) => <CustomCell data={row.krt} />,
    },
    {
      name: "نوع العملية",
      selector: (row) => row.no3,
      cell: (row) => <CustomCell data={row.no3} />,
    },
    {
      name: "التحقق من نجاح العملية",
      selector: (row) => row.suc,
      cell: (row) => <CustomCell data={row.suc} />,
      minWidth: "120px",
    },
    {
      name: "",
      selector: (row) => row.email,
      sortable: true,
      cell: (row) => (
        <div className="flex-cen">
          <MdEmail size={30} style={{ cursor: "pointer" }} />
          <div onClick={handleOpenS} style={{ cursor: "pointer" }}>
            <FaSearch size={30} />
          </div>
        </div>
      ),
      minWidth: "190px",
    },
  ];
  const data = [
    {
      id: 1,
      email: "mohamedata@gmail.com",
      bld: "Egypt",
      tbro: "100",
      rayy: "Company XYZ",
      bank: "Paymob",
      krt: "mobile wallet",
      no3: "ONe time",
      suc: "Transaction",
      wasl: 938373,
    },
    {
      id: 2,
      email: "karreeem@gmail.com",
      bld: "Egypt",
      tbro: "100",
      rayy: "Company XYZ",
      bank: "Paymob",
      krt: "mobile wallet",
      no3: "ONe time",
      wasl: 938373,
      suc: "Transaction",
    },
    {
      id: 3,
      email: "mohamedata@gmail.com",
      bld: "Egypt",
      wasl: 938373,
      tbro: "100",
      rayy: "Company XYZ",
      bank: "Paymob",
      krt: "mobile wallet",
      no3: "ONe time",
      suc: "Transaction",
    },
    {
      id: 4,
      email: "mohamedata@gmail.com",
      bld: "Egypt",
      wasl: 938373,
      tbro: "100",
      rayy: "Company XYZ",
      bank: "Paymob",
      krt: "mobile wallet",
      no3: "ONe time",
      suc: "Transaction",
    },
    {
      id: 5,
      email: "mohamedata@gmail.com",
      bld: "Egypt",
      tbro: "100",
      rayy: "Company XYZ",
      bank: "Paymob",
      krt: "mobile wallet",
      no3: "ONe time",
      wasl: 938373,
      suc: "Transaction",
    },
    {
      id: 6,
      email: "mohamedata@gmail.com",
      bld: "Egypt",
      tbro: "100",
      rayy: "Company XYZ",
      bank: "Paymob",
      krt: "mobile wallet",
      no3: "ONe time",
      wasl: 938373,
      suc: "Transaction",
    },
    {
      id: 7,
      email: "mohamedata@gmail.com",
      bld: "Egypt",
      tbro: "100",
      rayy: "Company XYZ",
      bank: "Paymob",
      krt: "mobile wallet",
      no3: "ONe time",
      wasl: 938373,
      suc: "Transaction",
    },
    {
      id: 8,
      email: "mohamedata@gmail.com",
      bld: "Egypt",
      tbro: "100",
      rayy: "Company XYZ",
      bank: "Paymob",
      krt: "mobile wallet",
      wasl: 938373,
      no3: "ONe time",
      suc: "Transaction",
    },
    {
      id: 9,
      email: "mohamedata@gmail.com",
      bld: "Egypt",
      tbro: "100",
      rayy: "Company XYZ",
      bank: "Paymob",
      krt: "mobile wallet",
      no3: "ONe time",
      suc: "Transaction",
      wasl: 938373,
    },
    {
      id: 10,
      email: "mohamedata@gmail.com",
      bld: "Egypt",
      tbro: "100",
      rayy: "Company XYZ",
      bank: "Paymob",
      krt: "mobile wallet",
      no3: "ONe time",
      suc: "Transaction",
      wasl: 938373,
    },
    {
      id: 11,
      email: "mohamedata@gmail.com",
      bld: "Egypt",
      tbro: "100",
      rayy: "Company XYZ",
      bank: "Paymob",
      krt: "mobile wallet",
      no3: "ONe time",
      suc: "Transaction",
      wasl: 938373,
    },
    {
      id: 12,
      email: "mohamedata@gmail.com",
      bld: "Egypt",
      tbro: "100",
      rayy: "Company XYZ",
      bank: "Paymob",
      krt: "mobile wallet",
      wasl: 938373,

      no3: "ONe time",
      suc: "Transaction",
    },

    // Add more data entries with unique id values as needed
  ];

  return (
    <>
      <>
        <DataTable
          columns={columns}
          data={data}
          // Customize other DataTable props as needed
          pagination
          responsive
          selectableRows // Enable checkboxes
          selectableRowsVisibleOnly // Show checkboxes only when rows are visible
          // ... other props
          customStyles={{
            cells: {
              style: {
                whiteSpace: "pre-line",
              },
            },
          }}
        />
      </>
    </>
  );
}
