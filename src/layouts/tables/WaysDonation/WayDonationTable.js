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
    <img src={data} alt="Newspaper" style={{ width: "50px", height: "50px" }} />
  </div>
);
export default function WayDonationTable() {
  const data2 = UseFetch("OtherWayToDonate");
  const columns = [
    {
      name: "الشعار",
      selector: (row) => row.img,
      sortable: true,
      cell: (row) => <Imagee data={row.img} />,
    },
    {
      name: " الطريقة",
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
          <div style={{ cursor: "pointer" }}>
            <MdDelete
              size={30}
              onClick={() => {
                axios
                  .delete(`${baseurl}OtherWayToDonate/${row.id}`)
                  .then(() => {
                  
                    // setrefetch(!refetch);
                  })
                  .catch((e) => {});
              }}
            />
          </div>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name: "بساطة",
      img: "assets/basata.png",
    },
    {
      id: 2,
      name: "بساطة",
      img: "assets/basata.png",
    },
    {
      id: 3,
      name: "بساطة",
      img: "assets/basata.png",
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
