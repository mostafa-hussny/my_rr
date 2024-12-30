import { baseurl } from "BaseUrl";
import UseFetch from "UseFetch";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
// import DataTable from "react-data-table-component";
const CustomCell = ({ data }) => <div style={{ whiteSpace: "pre-line" }}>{data}</div>;
export default function DonationTypesTable({ refetch, setrefetch, filterValue }) {
  const data1 = UseFetch("Type/GetAllTypes", refetch);
  const filteredData = data1?.filter((item) =>
    item.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  const [filterdata, setfilterdata] = useState([]);
  useEffect(() => {
    setfilterdata(filteredData);
  }, [filterValue]);
  const columns = [
    {
      name: "العنوان",
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
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              axios.delete(`${baseurl}Type/${row.id}`).then(() => {
                setrefetch(!refetch);
              });
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
      zakah: "زكاة",
    },
    {
      id: 2,
      zakah: "زكاة",
    },
    {
      id: 3,
      zakah: "زكاة",
    },
    {
      id: 4,
      zakah: "زكاة",
    },
    {
      id: 5,
      zakah: "زكاة",
    },
  ];

  return (
    <>
      <>
        <DataTable
          columns={columns}
          data={filterValue.length === 0 ? (data1 ? data1 : []) : filterdata}
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
