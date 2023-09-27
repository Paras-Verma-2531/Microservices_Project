import React, { useEffect } from 'react'
import axios from 'axios'
function ViewBooks() {
    async function callViewBook()
    {
        await axios.get("http://localhost:4000/s1/all");
    }
    useEffect(()=>
    {
       
    },[])
  return (
   <>
   </>
  )
}

export default ViewBooks