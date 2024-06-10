import React, { useEffect, useState } from 'react'

import axios from 'axios'
import NavBar from './NavBar'

const ViewStudent = () => {
    const [data, changeData] = useState([])
    const fetchdata = () => {
      axios.get("https://friendsapi-re5a.onrender.com/view").then((response)=>{
        changeData(response.data)
        console.log(response.data)
      }).catch ((error)=>{
        alert.apply(error.message)
      })
    }

    useEffect(
      ()=>{fetchdata()},[]
    )
    return (
        <div>
         <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col"> NAME </th>
                                        <th scope="col">ADMISSION NO</th>
                                        <th scope="col">ROLL NO.</th>
                                        <th scope="col">DOB</th>
                                        <th scope="col">COURSE</th>
                                        <th scope="col">MOBILE</th>
                                        <th scope="col">EMAIL</th>
                                        <th scope="col">ADDRESS</th>
                                        
                                        
                                        
                                </tr>
                            </thead>
                            {data.map(
                                (value, index) => {
                                    return <tbody>
                                        <tr>
                                            <th scope="row">{value.name}</th>
                                            <td>{value.admNo}</td>
                                            <td>{value.rollNo}</td>
                                            <td>{value.dob}</td>
                                            <td>{value.course}</td>
                                            <td>{value.mob}</td>
                                            <td>{value.email}</td>
                                            <td>{value.address}</td>
                                            
                                        </tr>

                                    </tbody>
                                }
                            )}

                         </table>

                     </div>
                 </div>
             </div>

     </div>
    )
}

export default ViewStudent