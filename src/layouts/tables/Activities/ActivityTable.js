import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import React from "react";
import DataTable from "react-data-table-component";

import UseFetch from "UseFetch";
// import DataTable from "react-data-table-component";

export default function ActivityTable({ handleOpene, setrowId }) {
  const data2 = UseFetch("Project/getProjects");


  const columns = [
    {
      name: "العنوان",
      selector: (row) => row.name,
    },
    {
      name: "القسم",
      selector: (row) => row.dep,
    },
    {
      name: "الإجراءات",
      cell: (row) => (
        <div style={{ display: "flex", cursor: "pointer" }}>
          <div>
            <FaRegEdit
              size={30}
              onClick={() => {
                handleOpene()
                setrowId(row.id)
              }}
            />
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
      address: "مستشفى الاورمان لسرطان الكبار بالصعيد",
      dep: "الصحة الجيدة والرفاه",
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
          customStyles={{
            cells: {
              style: {
                whiteSpace: "pre-line",
              },
            },
          }}
          // ... other props
        />
      </>
    </>
  );
}
