import { baseurl } from "BaseUrl";
import UseFetch from "UseFetch";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
// import DataTable from "react-data-table-component";
const CustomCell = ({ data }) => <div style={{ whiteSpace: "pre-line" }}>{data}</div>;
export default function QuestionsMostTable({
  settherow,
  handleOpen,
  refetch,
  setrefetch,
  filterValue,
}) {
  const data2 = UseFetch("Question", refetch);
  const filteredData = data2?.filter((item) =>
    item.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  const [filterdata, setfilterdata] = useState([]);
  useEffect(() => {
    setfilterdata(filteredData);
  }, [filterValue]);
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
      name: "عنوان السؤال",
      selector: (row) => row.name,

      sortable: true,
      cell: (row) => <CustomCell data={row.name} />,
    },
    {
      name: "",
      cell: (row) => (
        <div style={{ display: "flex", cursor: "pointer" }}>
          <div
            onClick={() => {
              settherow(row);
              handleOpen();
            }}
          >
            <FaRegEdit size={30} />
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              axios
                .delete(baseurl + `Question/${row.id}`)
                .then((res) => {
               
                  setrefetch(!refetch);
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
      ask: "ما هي الخدمات التي ",
    },
    {
      id: 2,
      ask: "ما هي الخدمات التي تقدمها الاورمان",
    },
    {
      id: 3,
      ask: "ما هي الخدمات التيدمها الاورمان",
    },
  ];

  return (
    <>
      <>
        <DataTable
          columns={columns}
          data={filterValue.length === 0 ? (data2 ? data2 : []) : filterdata}
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
