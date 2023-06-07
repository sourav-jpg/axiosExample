import React,{useState , useEffect} from 'react'
import axiosInstance from '../helpers/axiosInstance'
import { useNavigate, useParams } from 'react-router-dom'



const UpdatePosts = () => {
    const[course,setCourse] = useState("")
    const[trainer,setTrainer] = useState("")

    let {id} = useParams()
    let navigate = useNavigate()

    let fetchData = async ()=>{
        let {data} = await axiosInstance.get(`/posts/${id}`)
        setTrainer(data.trainer)
        setCourse(data.course)
    }

    useEffect(()=>{
        fetchData()
    },[])


    const handleSubmit = async(e) =>{
        e.preventDefault()
        let payload = {
            course , trainer
        }
        let {data} = await axiosInstance.put(`/posts/${id}` , payload)
        navigate('/view')
    }

    // let fetchData = async()=>{
    //     let payload = {course,trainer} 
    //     let result = await axiosInstance.post("/posts",payload)
    //     console.log(result);
    // }

  return (
    <>
      <div className='create'>
       <h2>Update</h2>
       <label>course name : </label>
       <input type='text' onChange={(e)=>setCourse(e.target.value)} value={course}/><br/><br/>
       <label>trainer name : </label>
       <input type='text' onChange={(e)=>setTrainer(e.target.value)} value={trainer}/><br/><br/>
       <button onClick={handleSubmit}>Submit</button>
    </div>
    </>
  )
}

export default UpdatePosts
