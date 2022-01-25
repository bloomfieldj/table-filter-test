import { useEffect, useState } from 'react'
import {db} from '../lib/db'
const entry = {"id":1,"location":"Song’ao","min_age":5,"max_age":14,"gender":"Male"}


export default function Table(){
    const [location, setLocation] = useState("Guadalupe")
    

    
    const database = db.filter( entry => (
        entry.location == location
    ))

    
    return (
        <>
          <h1>My Table </h1>
          <table>
              <tr>
                  <th>
                    id
                  </th>
                  <th>
                      Location
                  </th>
                  <th>
                      Age Range
                  </th>
                  <th>
                      Gender
                  </th>
              </tr>
            {database.map( (entry) => (
               <tr key={entry.id}>
                <td>
                    {entry.id}
                </td>
                <td>
                    {entry.location}
                </td>
                <td>
                {`${entry.min_age} to ${entry.max_age}`}
                </td>
                <td>
                    {entry.gender}
                </td>
               </tr>
               ))} 
            </table>
        </>
    )
}