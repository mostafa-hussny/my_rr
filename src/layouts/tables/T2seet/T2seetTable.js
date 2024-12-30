/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components

import { baseurl } from "BaseUrl";
import UseFetch from "UseFetch";
import axios from "axios";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

// import DataTable from "react-data-table-component";
export default function T2seetTable({ refetch, setRefetch }) {
  const [selectedRows, setSelectedRows] = useState([]);
  const data2 = UseFetch("Installment", refetch);
  const handleRowSelected = (state) => {
    const selectedRowIds = state.selectedRows.map((row) => row.id);
    setSelectedRows(selectedRowIds);
  };

  const CustomHeader = ({ selectAllRows, isSelected }) => (
    <div>
      <input type="checkbox" checked={isSelected} onChange={selectAllRows} />
      <span style={{ marginLeft: "8px" }}>Select All</span>
    </div>
  );
  const handleCheckboxChange = (id) => {
    const updatedSelectedRows = selectedRows.includes(id)
      ? selectedRows.filter((rowId) => rowId !== id)
      : [...selectedRows, id];

    setSelectedRows(updatedSelectedRows);
  };

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
      name: "النشاط",
      selector: (row) => row.active,
    },
    {
      name: "عدد الاقساط",
      selector: (row) => row.installmentsCount,
    },
    {
      name: "عدد اقساط في الشهر",
      selector: (row) => row.monthlyAmount,
    },

    {
      name: "",
      selector: "id",
      sortable: true,
      grow: 2,
      cell: (row) => (
        <div>
          <input
            type="checkbox"
            checked={selectedRows.includes(row.id)}
            onChange={() => handleCheckboxChange(row.id)}
            style={{ marginLeft: "10px" }}
          />
          التفعيل
        </div>
      ),
      header: <CustomHeader />,
    },
    {
      name: "الإجراءات",
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
                  .delete(`${baseurl}Installment/${row.id}`)
                  .then(() => {
                    setRefetch(!refetch);
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
      active: "مستشفى  شفاء الاورمان لسرطان الكبد ",
      sahm: "خرطوشة حائط الشفاء",
      num: "10",
    },
    {
      id: 2,
      active: "مستشفى  شفاء الاورمان لسرطان الكبد ",
      sahm: "خرطوشة حائط الشفاء",
      num: "10",
    },
    {
      id: 3,
      active: "مستشفى  شفاء الاورمان لسرطان الكبد ",
      sahm: "خرطوشة حائط الشفاء",
      num: "10",
    },
  ];

  return (
    <>
      <>
        <DataTable
          columns={columns}
          data={data2 ? data2 : []}
          // Customize other DataTable props as needed
          keyField="id"
          selectableRows
          selectableRowsComponentProps={{ inkDisabled: true }}
          onSelectedRowsChange={handleRowSelected}
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
