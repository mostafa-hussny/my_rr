import { baseurl } from "BaseUrl";
import UseFetch from "UseFetch";
import axios from "axios";
import React from "react";
import DataTable from "react-data-table-component";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
// import DataTable from "react-data-table-component";
const CustomCell = ({ data }) => <div style={{ whiteSpace: "pre-line" }}>{data}</div>;
export default function NewsTable({ refetch, setRefetch }) {
  const data2 = UseFetch("OnlineNews", refetch);
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
      name: "العنوان",
      selector: (row) => row.description,

      sortable: true,
      cell: (row) => <CustomCell data={row.description} />,
    },
    {
      name: "الجريدة",
      selector: (row) => row.enDescription,
      cell: (row) => <CustomCell data={row.enDescription} />,
    },
    {
      name: "تاريخ الاضافة",
      selector: (row) => row.creationDate,
      cell: (row) => <CustomCell data={row.creationDate} />,
    },
    {
      name: "",
      cell: (row) => (
        <div style={{ display: "flex", cursor: "pointer" }}>
          <div>
            <FaRegEdit size={30} />
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              axios
                .delete(baseurl + `OnlineNews/${row.id}`)
                .then((res) => {
               
                  setRefetch(!refetch);
                })
                .catch((err) => {});
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
      address: "حملة ستر ودفا لاطعام الاسر الاولى بالرعاية بقري ونجوع",
      jor: "اخبار اليوم",
      hisadd: "1/11/2024",
    },
    {
      id: 2,
      address: "حملة ستر ودفا لاطعام الاسر الاولى بالرعاية بقري ونجوع",
      jor: "اخبار اليوم",
      hisadd: "1/11/2024",
    },
    {
      id: 3,
      address: "حملة ستر ودفا لاطعام الاسر الاولى بالرعاية بقري ونجوع",
      jor: "اخبار اليوم",
      hisadd: "1/11/2024",
    },
    {
      id: 4,
      address: "حملة ستر ودفا لاطعام الاسر الاولى بالرعاية بقري ونجوع",
      jor: "اخبار اليوم",
      hisadd: "1/11/2024",
    },
    {
      id: 5,
      address: "حملة ستر ودفا لاطعام الاسر الاولى بالرعاية بقري ونجوع",
      jor: "اخبار اليوم",
      hisadd: "1/11/2024",
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
              },
            },
          }}
        />
      </>
    </>
  );
}
