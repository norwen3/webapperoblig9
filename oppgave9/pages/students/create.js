import React, { useState } from 'react'
import axios from 'axios'
import {dataService} from '../../services/dataService';


const data = async () => await axios.get("/api/students").then(res => res.data);
const CreateStudent = () => {

    const initalStudentState = {
        id: null,
        name: ""
    }
    //const axios = require("axios");
    
    const [student, setStudent] = useState(initalStudentState)
    const [submitted, setSubmitted] = useState(false)
    //const {data} = useSWR(`/api/students`, fetch)

    

    const handleSubmit = async (event) => {
        var data = {
            name: student.name
        };

        event.preventDefault()
        
        await axios.post("/api/students", data).then(res => {
            setStudent({
                id: res.data.id,
                name: res.data.name
            });
            setSubmitted(true);
            console.log(res.data)
        }).catch(e => {
            console.log(e);
        });
        //dataService.create(data)
        
    }

    const newStudent = () => {
        setStudent(initalStudentState);
        setSubmitted(false)
    }


    const handleChange = (event) =>{
        const { name, value } = event.target
        setStudent({...student, [name]: value})
    }

    return (
        <div className="submit-form">
            {submitted ? (
                <div> 
                    <h4>
                        You submitted successfully!
                    </h4>
                    <button className="btn btn-success" onClick={newStudent}>Add</button>
                </div>
            ): (
                <div>

                
                <div className="form-group">
                    <label htmlFor="name">
                        Name
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        required
                        value={student.name}
                        onChange={handleChange}
                        name="name"
                    />
        
            
                </div>
                <button onClick={handleSubmit} className="btn btn-success">Submit</button>
                </div>
            )}
            
        </div>
    )
}

export default CreateStudent