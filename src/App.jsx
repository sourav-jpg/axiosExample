import React, { useEffect } from 'react'
import CreatePosts from './components/CreatePosts'
import ViewPosts from './components/ViewPosts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UpdatePosts from './components/UpdatePosts';

const App = () => {

  useEffect(()=>{
      
  },[])
  return (
    <Router>
       <Routes>
        <Route path="/" element={<CreatePosts/>}/>
        <Route path="/view" element={<ViewPosts/>}/>
        <Route path="/update/:id" element={<UpdatePosts/>}/>

       </Routes>
    </Router>
  )
}

export default App
