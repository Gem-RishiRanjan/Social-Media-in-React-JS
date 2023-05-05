import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function Error() {
    const navigate = useNavigate();
    useEffect(()=>{
        navigate("/mainpage");
    })
  return (
    <>
        Page not Found
    </>
    )
}

export default Error