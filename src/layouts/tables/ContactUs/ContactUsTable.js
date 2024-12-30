import UseFetch from "UseFetch";
import React from "react";
import DataTable from "react-data-table-component";
import { FaRegEdit, FaSearch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
// import DataTable from "react-data-table-component";
const CustomCell = ({ data }) => <div style={{ whiteSpace: "pre-line", fontSize: "" }}>{data}</div>;
const Imagee = ({ data }) => (
  <div>
    <img
      src={data}
      alt="Newspaper"
      style={{ width: "90px", height: "90px", borderRadius: "50%" }}
    />
  </div>
);
export default function ContactUsTable() {
  const data1 = UseFetch("ContactUs");

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
      name: "تاريخ الرسالة",
      selector: (row) => row.msgDate,
      sortable: true,
      cell: (row) => <CustomCell data={row.msgDate} />,
      width: "150px",
    },
    {
      name: "الاسم",
      selector: (row) => row.name,
      sortable: true,
      cell: (row) => <CustomCell data={row.name} />,
      width: "150px",
    },
    {
      name: "البريد الالكتروني",
      selector: (row) => row.email,
      sortable: true,
      cell: (row) => <CustomCell data={row.email} />,
      width: "150px",
    },
    {
      name: "رقم المحمول",
      selector: (row) => row.phone,
      sortable: true,
      cell: (row) => <CustomCell data={row.phone} />,
      width: "150px",
    },
    {
      name: " عنوان الرسالة",
      selector: (row) => row.msgHeader,
      sortable: true,
      cell: (row) => <CustomCell data={row.msgHeader} />,
    },
    {
      name: "فتح الرسالة",
      selector: (row) => row.msgContent,
      sortable: true,
      cell: (row) => <CustomCell data={row.msgContent} />,
    },
    {
      name: "تاريخ فتح الرسالة",
      selector: (row) => row.openhis,
      sortable: true,
      cell: (row) => <CustomCell data={row.openhis} />,
    },
    {
      name: "تم الرد",
      selector: (row) => row.replyMessage,
      sortable: true,
      cell: (row) => <CustomCell data={row.replyMssage} />,
    },
    {
      name: "",
      cell: (row) => (
        <div style={{ display: "flex", cursor: "pointer" }}>
          <FaSearch size={30} />
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name: "رضا علي",
      his: "07:12 -14/01/24",
      email: "redaali@gmail.com",
      mob: "0192837372",
      title: "مدينة السادات",
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
