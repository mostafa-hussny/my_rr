import { Delete } from "@mui/icons-material";
import React from "react";
import DataTable from "react-data-table-component";
import { FaEdit, FaRegEdit, FaSearch } from "react-icons/fa";
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
export default function ClientProfileTable() {
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
      name: "رابط الرابط",
      selector: (row) => row.rbt,
      sortable: true,
      cell: (row) => <CustomCell data={row.rbt} />,
    },
    {
      name: "تاريخ الانشاء",
      selector: (row) => row.his,
      sortable: true,
      cell: (row) => <CustomCell data={row.his} />,
    },
    {
      name: "اسم المستخدم",
      selector: (row) => row.name,
      sortable: true,
      cell: (row) => <CustomCell data={row.name} />,
      width: "150px",
    },
    {
      name: "نوع التبرع",
      selector: (row) => row.type,
      sortable: true,
      cell: (row) => <CustomCell data={row.type} />,
    },
    {
      name: "هدف التبرع",
      selector: (row) => row.goal,
      sortable: true,
      cell: (row) => <CustomCell data={row.goal} />,
      width: "150px",
    },
    {
      name: "السهم",
      selector: (row) => row.arr,
      sortable: true,
      cell: (row) => <CustomCell data={row.arr} />,
    },
    {
      name: "عدد محاولات التبرع",
      selector: (row) => row.num,
      sortable: true,
      cell: (row) => <CustomCell data={row.num} />,
      width: "190px",
    },
    {
      name: "",
      cell: (row) => (
        <div style={{ display: "flex", cursor: "pointer" }}>
          <div>
            <FaEdit size={30} />
          </div>
          <div>
            <MdDelete size={30} />
          </div>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name: "Main",
      rbt: "الرابط",
      his: "25/05/2021",
      no3: "صدقة",
      goal: "حملة ستر ودفا واطعام",
      num: "310 Egp410",
    },
    {
      id: 2,
      name: "Main",
      rbt: "الرابط",
      his: "25/05/2021",
      no3: "صدقة",
      goal: "حملة ستر ودفا واطعام",
      num: "310 Egp410",
    },
    {
      id: 3,
      name: "Main",
      rbt: "الرابط",
      his: "25/05/2021",
      no3: "صدقة",
      goal: "حملة ستر ودفا واطعام",
      num: "310 Egp410",
    },
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
