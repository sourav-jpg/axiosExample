import React, { useEffect, useState } from 'react'
import axiosInstance from '../helpers/axiosInstance';
import "./global.css";
import { useNavigate } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const CreatePosts = () => {
    const[course,setCourse] = useState("")
    const[trainer,setTrainer] = useState("")
    let navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        fetchData()
        navigate("/view")

    }

    let fetchData = async()=>{
        let payload = {course,trainer} 
        let result = await axiosInstance.post("/posts",payload)
        console.log(result);
    }

  return (
    <>
      <div className='create'>
       <h2>CreatePosts</h2>
       <label>course name : </label>
       <input type='text' onChange={(e)=>setCourse(e.target.value)}/><br/><br/>
       <label>trainer name : </label>
       <input type='text' onChange={(e)=>setTrainer(e.target.value)}/><br/><br/>
       <button onClick={handleSubmit}>Submit</button>
    </div>
    </>
  )
}

export default CreatePosts
