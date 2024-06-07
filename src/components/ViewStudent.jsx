import React, { useState } from 'react'
import NavBar from './NavBar'
import { getValue } from '@testing-library/user-event/dist/utils'

const ViewStudent = () => {
    const [data,changeData]=useState(
        [
            {"name":"ahalya","admNo":101,"rollNo":11},
            {"name":"aryan","admNo":111,"rollNo":12},
            {"name":"Noah","admNo":109,"rollNo":13}

        ]
        
    )
    return (
        <div>
           <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value,index) => {
                                    return  <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                        <div className="card" >
                                        <img src="https://img.freepik.com/free-photo/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1717632000&semt=sph" height="300px" class="card-img-top" alt="..."></img>
                                        <div className="card-body">
                                        <p className="card-text">name :{value.name}</p>
                                        <p className="card-text">admNo :{value.admNo}</p>
                                        <p className="card-text">rollNo :{value.rollNo}</p>
                                            
                                        </div>
                                </div>
                            </div>
                            

                                }
                            )}
                           
                                
                                  
                                       
                           
                           
                           
                            
                           
                          
                            
                           
                           
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewStudent