import React, { useState } from 'react'

import axios from 'axios'
import NavBar from './NavBar'

const AddStudent = () => {
    const [data, setData] = useState({
       
    })

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
            (Response)=>{
                console.log(Response.data)
                if (Response.data.status ==  "success") {
                    alert("Successfully Added")
                } else {
                    alert("error")
                }
            }
        ).catch(
            (error)=>{
                alert.apply(error.message)
              }
        )

    }
    
    return (
        <div>
          <NavBar/>
            <h1><center>Student Application</center></h1>
            
            <div className="container">
                <div className="row">
                    <div className="col col-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="fname" className="form-label">NAME</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="lname" className="form-label">ADMISSION NO</label>
                                <input type="text" className="form-control" name='admNo' value={data.admNo} onChange={inputHandler} />
                            </div>
                            
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="dob" className="form-label">DOB</label>
                                <input type="date" className="form-control" name='dob' value={data.dob} onChange={inputHandler} />
                            </div>
                            <div className="col col-12">
                                <label htmlFor="" className="form-label">COURSE</label>
                                <select name='' className="form-control" value={data.course} onChange={inputHandler}>
                                    <option value="">Select Course</option>
                                    <option value="MCA">MCA</option>
                                    <option value="MSC">MSC</option>
                                    <option value="MTECH">MTECH</option>
                                    <option value="MBA">MBA</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="mob" className="form-label">MOBILE</label>
                                <input type="text" className="form-control" name='mob' value={data.mob} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="email" className="form-label">EMAIL ID</label>
                                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12">
                                <label htmlFor="address" className="form-label">ADDRESS</label>
                                <textarea className="form-control" name='address' value={data.address} onChange={inputHandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-6">
                                <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudent
