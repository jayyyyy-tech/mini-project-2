// import React from "react";
// import Pagination from "react-bootstrap/Pagination";

// async function getPage() {
//   const [page, setPage] = useState([]);

//   const data = await axios.get("https://books-api7.p.rapidapi.com/books", {
//     params: { p: page },
//     headers: {
//       "X-RapidAPI-Key": "60cd4e9d0cmsh64a7a4a8c41603ap143847jsn7ed494b53bcd",
//       "X-RapidAPI-Host": "books-api7.p.rapidapi.com",
//     },
//   });

//   setPage(page);
//   const Paging = () => {
//     let active = 2;
//     let items = [];
//     for (let page = 1; page <= 5; page++) {
//       items.push(
//         <Pagination.Item key={page} active={page === page}>
//           {page}
//         </Pagination.Item>
//       );
//     }

//     const paginationBasic = (
//       <div>
//         <Pagination>{items}</Pagination>
//       </div>
//     );

//     return paginationBasic;
//   };
// }

// export default Paging;
