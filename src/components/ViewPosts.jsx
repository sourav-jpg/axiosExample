import React, { useEffect, useState } from 'react'
import axiosInstance from '../helpers/axiosInstance'
import "./global.css"
import { Link } from 'react-router-dom'


const ViewPosts = () => {
    let [userData,setUserData] = useState([])


    let fetchData = async ()=>{
        let {data} = await axiosInstance.get("/posts")
        // console.log(data);
        setUserData(data)
    }

    useEffect(()=>{
        fetchData()
    },[])


    let handledelete = async(id)=>{
      let {data} = await  axiosInstance.delete(`/posts/${id}`)
        window.location.assign('/view')    }

  return (
    <div className='mainblock'>
        {userData.map((x)=>{
            return(
                <div className='items'>
                    <h2>{x.course}</h2>
                    <h3>{x.trainer}</h3>
                    <Link to={`/update/${x.id}`}>Update </Link>
                    <button onClick={()=>{
                        handledelete(x.id)
                    }}>Delete</button>
                </div>
            )
        })}
    </div>
  )
}

export default ViewPosts
