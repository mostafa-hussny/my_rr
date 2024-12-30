import { baseurl } from "BaseUrl";
import UseFetch from "UseFetch";
import axios from "axios";
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
export default function PartenerTable({refetch,setrefetch}) {
  const data1 = UseFetch("SuccessPartener",refetch);
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
      name: "شعار الشريك",
      selector: (row) => row.img,
      sortable: true,
      cell: (row) => <Imagee data={row.img} />,
    },
    {
      name: "اسم الشريك",
      selector: (row) => row.name,
      sortable: true,
      cell: (row) => <CustomCell data={row.name} />,
    },
    {
      name: "",
      cell: (row) => (
        <div style={{ display: "flex", cursor: "pointer" }}>
          <div>
            <FaRegEdit size={30} />
          </div>
          <div style={{ cursor: "pointer" }} onClick={(()=>{
            axios
            .delete(`${baseurl}SuccessPartener/${row.id}`)
            .then(() => {
         
              setrefetch(!refetch);
            })
            .catch((e) => {});
          })}>
            <MdDelete size={30} />
          </div>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name: "نهضة مصر",
      img: "assets/Nahda.webp",
    },
    {
      id: 2,
      name: "نهضة مصر",
      img: "assets/Nahda.webp",
    },
    {
      id: 3,
      name: "نهضة مصر",
      img: "assets/Nahda.webp",
    },
  ];

  return (
    <>
      <>
        <DataTable
          columns={columns}
          data={data1 ? data1 : []}
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
