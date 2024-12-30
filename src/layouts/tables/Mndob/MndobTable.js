import { baseurl } from "BaseUrl";
import UseFetch from "UseFetch";
import axios from "axios";
import React from "react";
import DataTable from "react-data-table-component";
import { FaRegEdit, FaSearch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
// import DataTable from "react-data-table-component";
const CustomCell = ({ data }) => <div style={{ whiteSpace: "pre-line" }}>{data}</div>;
const Imagee = ({ data }) => (
  <div>
    <img
      src={data}
      alt="Newspaper"
      style={{ width: "90px", height: "90px", borderRadius: "50%" }}
    />
  </div>
);
export default function MndobTable({ handleOpenMn }) {
  const data2 = UseFetch("SendingRepresentative");

  // const columns = [
  //   { name: "البريد الاكتروني", selector: "name", sortable: true },
  //   { name: "البلد", selector: "age", sortable: true },
  //   { name: "قيمة التبرع", selector: "city", sortable: true },
  //   { name: "الراعي", selector: "city", sortable: true },
  //   { name: "البنك", selector: "city", sortable: true },
  //   { name: "نوع الكارت", selector: "city", sortable: true },
  //   { name: "نوع العملي", selector: "city", sortable: true },
  //   { name: "التحقق من نجاح العملية", selector: "city", sortable: true },
  // ];

  // const data = [
  //   { name: "John Doe", age: 28, city: "New York" },
  //   { name: "Jane Smith", age: 35, city: "San Francisco" },
  //   { name: "Bob Johnson", age: 42, city: "Los Angeles" },
  // ];
  const handleDel = (id) => {
    axios
      .delete(baseurl + `SendingRepresentative/${id}`)
      .then((res) => {

      })
      .catch();
  };
  const columns = [
    {
      name: "تاريخ الحجز",
      selector: (row) => row.hishagz,
      sortable: true,
      cell: (row) => <Imagee data={row.hishagz} />,
      minWidth: "140px",
    },
    {
      name: "الاسم",
      selector: (row) => row.fullName,
      sortable: true,
      cell: (row) => <CustomCell data={row.fullName} />,
      minWidth: "140px",
    },
    {
      name: "البريد الالكتروني",
      selector: (row) => row.email,
      sortable: true,
      cell: (row) => <CustomCell data={row.email} />,
      minWidth: "140px",
    },
    {
      name: "رقم المحمول",
      selector: (row) => row.phoneNumber,
      sortable: true,
      cell: (row) => <CustomCell data={row.phoneNumber} />,
      minWidth: "140px",
    },
    {
      name: "هدف التبرع",
      selector: (row) => row.project,
      sortable: true,
      cell: (row) => <CustomCell data={row.project} />,
      minWidth: "140px",
    },
    {
      name: "قيمة التبرع",
      selector: (row) => row.amount,
      sortable: true,
      cell: (row) => <CustomCell data={row.amount} />,
      minWidth: "140px",
    },
    {
      name: "المنطقة",
      selector: (row) => row.area,
      sortable: true,
      cell: (row) => <CustomCell data={row.area} />,
      minWidth: "140px",
    },
    {
      name: "التاريخ",
      selector: (row) => row.availableDate,
      sortable: true,
      cell: (row) => <CustomCell data={row.availableDate} />,
      minWidth: "140px",
    },
    {
      name: "",
      cell: (row) => (
        <div style={{ display: "flex", cursor: "pointer" }}>
          <div onClick={handleOpenMn}>
            <FaSearch size={30} />
          </div>
          <div
            onClick={() => {
              handleDel(row.id);
            }}
          >
            <MdDelete size={30} />
          </div>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name: "hossam hosni",
      img: "assets/bg-reset-cover.jpeg",
      hishagz: "02:43 -11/10/24",
      email: "belal@gmail.com",
      mob: "012938383",
      goal: "صدقة جارية",
      value: "EGP 500",
      place: "القاهرة",
      ava: "14/01/24",
    },
    {
      id: 2,
      name: "hossam hosni",
      img: "assets/bg-reset-cover.jpeg",
      hishagz: "02:43 -11/10/24",
      email: "belal@gmail.com",
      mob: "012938383",
      goal: "صدقة جارية",
      value: "EGP 500",
      place: "القاهرة",
      ava: "14/01/24",
    },
    {
      id: 3,
      name: "hossam hosni",
      img: "assets/bg-reset-cover.jpeg",
      hishagz: "02:43 -11/10/24",
      email: "belal@gmail.com",
      mob: "012938383",
      goal: "صدقة جارية",
      value: "EGP 500",
      place: "القاهرة",
      ava: "14/01/24",
    },
    {
      id: 4,
      name: "hossam hosni",
      img: "assets/bg-reset-cover.jpeg",
      hishagz: "02:43 -11/10/24",
      email: "belal@gmail.com",
      mob: "012938383",
      goal: "صدقة جارية",
      value: "EGP 500",
      place: "القاهرة",
      ava: "14/01/24",
    },
    {
      id: 5,
      name: "hossam hosni",
      img: "assets/bg-reset-cover.jpeg",
      hishagz: "02:43 -11/10/24",
      email: "belal@gmail.com",
      mob: "012938383",
      goal: "صدقة جارية",
      value: "EGP 500",
      place: "القاهرة",
      ava: "14/01/24",
    },
  ];

  return (
    <>
      <>
        <DataTable
          columns={columns}
          data={data2 ? data2 : []}
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
                tableLayout: "auto",
              },
            },
          }}
        />
      </>
    </>
  );
}
