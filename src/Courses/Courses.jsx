import React from 'react'
import Navbar from "../component/Navbar";
import Courselist from '../component/Courselist';
import Footer from '../component/Footer'
//import listdata from '../assets/data/listdata.json'
function Courses() {

  return (
    <>
       <Navbar/>
        <div className='min-h-screen'><Courselist/></div>
       <Footer/>

       
    
    </>
  )
}

export default Courses