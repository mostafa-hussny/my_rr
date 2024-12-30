import React from "react";
import DataTable from "react-data-table-component";
import { FaRegEdit } from "react-icons/fa";
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
export default function EstMontahtyTable() {
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
  const columns = [
    {
      name: "تاريخ الحجز",
      selector: (row) => row.his,
      sortable: true,
      cell: (row) => <CustomCell data={row.his} />,
    },
    {
      name: "الاسم",
      selector: (row) => row.name,
      sortable: true,
      cell: (row) => <CustomCell data={row.name} />,
    },
    {
      name: "البريد الالكتروني",
      selector: (row) => row.email,
      sortable: true,
      cell: (row) => <CustomCell data={row.email} />,
    },
    {
      name: "رقم المحمول",
      selector: (row) => row.mob,
      sortable: true,
      cell: (row) => <CustomCell data={row.mob} />,
    },
    {
      name: "هدف التبرع",
      selector: (row) => row.goal,
      sortable: true,
      cell: (row) => <CustomCell data={row.goal} />,
    },
    {
      name: "قيمة القسط",
      selector: (row) => row.value,
      sortable: true,
      cell: (row) => <CustomCell data={row.value} />,
    },
    {
      name: "قيمة السداد",
      selector: (row) => row.sad,
      sortable: true,
      cell: (row) => <CustomCell data={row.sad} />,
    },
    {
      name: "عدد الاقساط المدفوعة",
      selector: (row) => row.num,
      sortable: true,
      cell: (row) => <CustomCell data={row.num} />,
    },
    {
      name: "تاريخ اخر عملية",
      selector: (row) => row.date,
      sortable: true,
      cell: (row) => <CustomCell data={row.date} />,
    },

  ];

  const data = [
    {
      id: 1,
      name: "",
      his: "",
      email: "",
      mob: "",
      goal: "",
      value: "",
      sad: "",
      num: "",
      date: "",
    },
  
  ];

  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
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
      </div>
    </>
  );
}
