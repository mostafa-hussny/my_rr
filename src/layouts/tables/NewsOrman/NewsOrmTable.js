import UseFetch from "UseFetch";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
// import DataTable from "react-data-table-component";
const CustomCell = ({ data }) => <div style={{ whiteSpace: "pre-line" }}>{data}</div>;
export default function NewsOrmTable() {
  const data1 = UseFetch("OrmanNews");
  //   const filteredData = data1?.filter((item) =>
  //   item.name.toLowerCase().includes(filterValue.toLowerCase())
  // );
  // const [filterdata, setfilterdata] = useState([]);
  // useEffect(() => {
  //   setfilterdata(filteredData);
  // }, [filterValue]);
  const columns = [
    {
      name: "العنوان",
      selector: (row) => row.title,
      sortable: true,
      cell: (row) => <CustomCell data={row.title} bool={true} />,
      grow: 20, // Set a minimum width for the first column
    },
    {
      name: "تاريخ الاضافة",
      selector: (row) => row.hisadd,
      cell: (row) => <CustomCell data={row.hisadd} />,
    },
    {
      name: "",
      cell: (row) => (
        <div style={{ display: "flex", cursor: "pointer" }}>
          <div>
            <FaRegEdit size={30} />
          </div>
          <div style={{ cursor: "pointer" }}>
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
