import React, { useEffect , useState} from "react";
import { baseurl } from "BaseUrl";
import DataTable from "react-data-table-component";
import { FaRegEdit, FaSearch, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import DataTable from "react-data-table-component";
const CustomCell = ({ data }) => <div style={{ whiteSpace: "pre-line" }}>{data}</div>;
export default function Mytable1data({
  handleOpenEdit,
  handleOpenEmail,
  handleOpenMG,
  setRowd,
  rowD,
}) {

const [data1 , setData1] = useState(0);

useEffect(() => {
  (async () => {
    try {
      const response = await axios.get(`${baseurl}Donate/AllDonates`);
      console.log ('MOs==>>' , response.status);
      setData1(response.data);
    } catch (err) {
      setData1(null);
    }
  })();
} , []);






  const CustomCellWithIcons = ({ data, onClickEdit, onClickSearch, onClickEmail, onClickInfo }) => (
    <div
      style={{
        whiteSpace: "pre-line",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div onClick={() => onClickEdit(data)} style={{ backgroundColor: "green", padding: "5px" }}>
        <FaRegEdit size={20} style={{ cursor: "pointer" }} />
      </div>
      {/* <div
        onClick={() => onClickSearch(data)}
        style={{ backgroundColor: "#87CEFA ", padding: "5px" }}
      >
        <FaSearch size={20} style={{ cursor: "pointer" }} />
      </div>
      <div
        onClick={() => onClickEmail(data)}
        style={{ backgroundColor: "#90EE90 ", padding: "5px" }}
      >
        <MdEmail size={20} style={{ cursor: "pointer" }} />
      </div> */}
      <div onClick={() => onClickInfo(data)} style={{ backgroundColor: "gray", padding: "5px" }}>
        <Link to={`/تبرعات/${data.id}`}>
          <FaUser size={20} style={{ cursor: "pointer" }} />
        </Link>
      </div>
    </div>
  );

  const columns = [
    {
      name: "رقم الايصال",
      selector: (row) => row.wasl,

      sortable: true,
      cell: (row) => <CustomCell data={row.wasl} />,
      minWidth: "130px",
    },
    {
      name: "البريد الاكتروني",
      selector: (row) => row.email,

      sortable: true,
      cell: (row) => <CustomCell data={row.email} />,
      minWidth: "290px",
    },
    {
      name: "البلد",
      selector: (row) => row.bld,
      cell: (row) => <CustomCell data={row.bld} />,
    },
    {
      name: "قيمة التبرع",
      selector: (row) => row.tbro,
      cell: (row) => <CustomCell data={row.tbro} />,
    },
    {
      name: "الراعي",
      selector: (row) => row.rayy,
      cell: (row) => <CustomCell data={row.rayy} />,
      minWidth: "190px",
    },
    {
      name: "البنك",
      selector: (row) => row.bank,
      cell: (row) => <CustomCell data={row.bank} />,
    },
    {
      name: "نوع الكرت",
      selector: (row) => row.krt,
      cell: (row) => <CustomCell data={row.krt} />,
    },
    {
      name: "نوع العملية",
      selector: (row) => row.no3,
      cell: (row) => <CustomCell data={row.no3} />,
    },
    {
      name: "التحقق من نجاح العملية",
      selector: (row) => row.suc,
      cell: (row) => <CustomCell data={row.suc} />,
      minWidth: "120px",
    },
    {
      name: "",
      selector: (row) => row.email,
      sortable: true,
      cell: (row) => (
        <CustomCellWithIcons
          data={row}
          onClickEdit={() => handleEdit(row)}
          onClickSearch={() => handleSearch(row)}
          onClickEmail={() => handleEmail(row)}
          onClickInfo={(row) => handleInfo(row)}
        />
      ),
      minWidth: "190px",
    },
  ];
  const handleRowClick = (row) => {
    const clickedId = row.id;
    // handleOpen();
  };
  const handleEdit = (row) => {

    setRowd(row);
    handleOpenEdit();
  };

  const handleSearch = (row) => {
    // Handle search action

    handleOpenMG();
  };

  const handleEmail = (row) => {
    // Handle email action
    handleOpenEmail();

  };
  const handleInfo = (row) => {
    // Handle email action

  };
  const data = [
    // {
    //   id: 1,
    //   email: "mohamedata@gmail.com",
    //   bld: "Egypt",
    //   tbro: "100",
    //   rayy: "Company XYZ",
    //   bank: "Paymob",
    //   krt: "mobile wallet",
    //   no3: "ONe time",
    //   suc: "Transaction",
    //   wasl: 938373,
    // },
    // {
    //   id: 2,
    //   email: "karreeem@gmail.com",
    //   bld: "Egypt",
    //   tbro: "100",
    //   rayy: "Company XYZ",
    //   bank: "Paymob",
    //   krt: "mobile wallet",
    //   no3: "ONe time",
    //   wasl: 938373,
    //   suc: "Transaction",
    // },
    // {
    //   id: 3,
    //   email: "mohamedata@gmail.com",
    //   bld: "Egypt",
    //   wasl: 938373,
    //   tbro: "100",
    //   rayy: "Company XYZ",
    //   bank: "Paymob",
    //   krt: "mobile wallet",
    //   no3: "ONe time",
    //   suc: "Transaction",
    // },
    // {
    //   id: 4,
    //   email: "mohamedata@gmail.com",
    //   bld: "Egypt",
    //   wasl: 938373,
    //   tbro: "100",
    //   rayy: "Company XYZ",
    //   bank: "Paymob",
    //   krt: "mobile wallet",
    //   no3: "ONe time",
    //   suc: "Transaction",
    // },
    // {
    //   id: 5,
    //   email: "mohamedata@gmail.com",
    //   bld: "Egypt",
    //   tbro: "100",
    //   rayy: "Company XYZ",
    //   bank: "Paymob",
    //   krt: "mobile wallet",
    //   no3: "ONe time",
    //   wasl: 938373,
    //   suc: "Transaction",
    // },
    // {
    //   id: 6,
    //   email: "mohamedata@gmail.com",
    //   bld: "Egypt",
    //   tbro: "100",
    //   rayy: "Company XYZ",
    //   bank: "Paymob",
    //   krt: "mobile wallet",
    //   no3: "ONe time",
    //   wasl: 938373,
    //   suc: "Transaction",
    // },
    // {
    //   id: 7,
    //   email: "mohamedata@gmail.com",
    //   bld: "Egypt",
    //   tbro: "100",
    //   rayy: "Company XYZ",
    //   bank: "Paymob",
    //   krt: "mobile wallet",
    //   no3: "ONe time",
    //   wasl: 938373,
    //   suc: "Transaction",
    // },
    // {
    //   id: 8,
    //   email: "mohamedata@gmail.com",
    //   bld: "Egypt",
    //   tbro: "100",
    //   rayy: "Company XYZ",
    //   bank: "Paymob",
    //   krt: "mobile wallet",
    //   wasl: 938373,
    //   no3: "ONe time",
    //   suc: "Transaction",
    // },
    // {
    //   id: 9,
    //   email: "mohamedata@gmail.com",
    //   bld: "Egypt",
    //   tbro: "100",
    //   rayy: "Company XYZ",
    //   bank: "Paymob",
    //   krt: "mobile wallet",
    //   no3: "ONe time",
    //   suc: "Transaction",
    //   wasl: 938373,
    // },
    // {
    //   id: 10,
    //   email: "mohamedata@gmail.com",
    //   bld: "Egypt",
    //   tbro: "100",
    //   rayy: "Company XYZ",
    //   bank: "Paymob",
    //   krt: "mobile wallet",
    //   no3: "ONe time",
    //   suc: "Transaction",
    //   wasl: 938373,
    // },
    // {
    //   id: 11,
    //   email: "mohamedata@gmail.com",
    //   bld: "Egypt",
    //   tbro: "100",
    //   rayy: "Company XYZ",
    //   bank: "Paymob",
    //   krt: "mobile wallet",
    //   no3: "ONe time",
    //   suc: "Transaction",
    //   wasl: 938373,
    // },
    // {
    //   id: 12,
    //   email: "mohamedata@gmail.com",
    //   bld: "Egypt",
    //   tbro: "100",
    //   rayy: "Company XYZ",
    //   bank: "Paymob",
    //   krt: "mobile wallet",
    //   wasl: 938373,

    //   no3: "ONe time",
    //   suc: "Transaction",
    // },

    // Add more data entries with unique id values as needed
  ];

  return (
    <>
      <>
        <DataTable
          columns={columns}
          data={data}
          // Customize other DataTable props as needed
          onRowClicked={handleRowClick}
          pagination
          responsive
          // ... other props
          customStyles={{
            cells: {
              style: {
                whiteSpace: "pre-line",
                cursor: "pointer",
              },
            },
          }}
        />
      </>
    </>
  );
}
