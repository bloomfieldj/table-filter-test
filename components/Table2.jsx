import { useTable } from 'react-table'
import React from 'react'
 
 export default function Table2() {
   const data = React.useMemo(
     () => [
       {
         org: 'Org1',
         location: 'Loc1',
         ages: '5 to 7',
         dates: "March 2022"
       },
       {
         org: 'Org2',
         location: 'Loc2',
         ages: '8 to 9',
         dates: "March 2022"
       },
       {
         org: 'Org3',
         location: 'Loc3',
         ages: '10 to 12',
         dates: "March 2022"
       },
     ],
     []
   )
 
   const columns = React.useMemo(
     () => [
        {
        Header: 'Organization',
        accessor: 'org', // accessor is the "key" in the data
        },
    {
        Header: 'Description',
        accessor: 'description',
    },
    {
        Header: 'Location',
        accessor: 'location',
    },
    {
        Header: 'Ages',
        accessor: 'ages',
    },
    {
        Header: 'Dates',
        accessor: 'dates',
    },
    {
        Header: 'Deadline',
        accessor: 'deadline',
    },
    {
        Header: 'Register',
        accessor: 'link',
    },
     ],
     []
   )
 
   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable({ columns, data })
 
   return (
     <table {...getTableProps()}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
   )
 }