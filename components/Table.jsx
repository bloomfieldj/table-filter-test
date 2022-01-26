import { useEffect, useState } from 'react'
import SelectSearch, {fuzzySearch} from 'react-select-search'
import {db} from '../lib/db'

const locations = db.map( entry => (
    {
        "name" :entry.location,
        "value": entry.location
    }
))

const ages = [
   {name: "6", value : 6},
   {name: "10", value : 10}
]

export default function Table(){
    const [location, setLocation] = useState()
    const [age, setAge] = useState()
    

    
    const database = db.filter( entry => (
        entry.location == location
    ))

    
    return (
        <>
          <h1>My Table </h1>
          <table>
              <thead>
                <tr>
                    <th>
                        My Location
                    </th>
                    <th>
                        My Age
                    </th>
                    <th>
                        My Gender
                    </th>
                    </tr>
              </thead>
              <tbody>
                <tr>
                    <td>
                    <SelectSearch
                        value={location}
                        onChange={setLocation}
                        placeholder='Select your location'
                        options = {locations}
                        search
                        filterOptions={fuzzySearch}                      
                        />
                    </td>
                    <td>
                    <SelectSearch
                        value={age}
                        onChange={setAge}
                        placeholder='Select your age'
                        options = {ages}
                        search
                        filterOptions={fuzzySearch}                      
                        />
                    </td>
                </tr>
            </tbody>

          </table>


          <table>
              <thead>
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
              </thead>
              <tbody>

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
               </tbody>
            </table>
        </>
    )
}