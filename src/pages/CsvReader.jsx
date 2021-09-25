// import React, { useState } from "react";
// // import * as XLSX from "xlsx";
// // import DataTable from "react-data-table-component";
// import { Link } from "react-router-dom";
// import Header from "../components/Header";
// import SideBar from "../components/SideBar";
// import Footer from "../components/Footer";

// const CsvReader = () => {
//   const [csvFile, setCsvFile] = useState();
//   const [csvArray, setCsvArray] = useState([]);
//   // [{name: "", age: 0, rank: ""},{name: "", age: 0, rank: ""}]

//   const processCSV = (str, delim = ",") => {
//     const headers = str.slice(0, str.indexOf("\n")).split(delim);
//     const rows = str.slice(str.indexOf("\n") + 1).split("\n");

//     const newArray = rows.map((row) => {
//       const values = row.split(delim);
//       const eachObject = headers.reduce((obj, header, i) => {
//         obj[header] = values[i];
//         return obj;
//       }, {});
//       return eachObject;
//     });

//     setCsvArray(newArray);
//   };

//   const submit = () => {
//     const file = csvFile;
//     const reader = new FileReader();

//     reader.onload = function (e) {
//       const text = e.target.result;
//       console.log(text);
//       processCSV(text);
//     };

//     reader.readAsText(file);
//   };

//   return (
//     <form id="csv-form">
//       <input
//         type="file"
//         accept=".csv"
//         id="csvFile"
//         onChange={(e) => {
//           setCsvFile(e.target.files[0]);
//         }}
//       ></input>
//       <br />
//       <button
//         onClick={(e) => {
//           e.preventDefault();
//           if (csvFile) submit();
//         }}
//       >
//         Enviar
//       </button>

//       <br />
//       <br />
//       {csvArray.length > 0 ? (
//         <>
//           <table>
//             <thead>
//               <th>Codigo</th>
//               <th>Nombre</th>
//               <th>Apellido P.</th>
//               <th>Apellido M.</th>
//               <th>Email</th>
//             </thead>
//             <tbody>
//               {csvArray.map((item, i) => (
//                 <tr key={i}>
//                   <td>{item.cod_student}</td>
//                   <td>{item.name}</td>
//                   <td>{item.f_lastname}</td>
//                   <td>{item.m_lastname}</td>
//                   <td>{item.email}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </>
//       ) : null}
//     </form>
//   );
// };
// export default CsvReader;
