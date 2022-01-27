import { useTable } from 'react-table'
import React from 'react'
 
 export default function Table2() {
   const data = React.useMemo(
     () => [
       {
         org: 'Org1',
         location: 'Loc1',
       },
       {
         org: 'Org2',
         location: 'Loc2',
       },
       {
         org: 'Org3',
         location: 'Loc3',
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
         Header: 'Location',
         accessor: 'location',
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
     <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                   borderBottom: 'solid 3px red',
                   background: 'aliceblue',
                   color: 'black',
                   fontWeight: 'bold',
                 }}
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
                     style={{
                       padding: '10px',
                       border: 'solid 1px gray',
                       background: 'papayawhip',
                     }}
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