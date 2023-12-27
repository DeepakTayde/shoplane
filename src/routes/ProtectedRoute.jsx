import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { selectCurrentToken } from '../store/authSlice';
import { useSelector } from 'react-redux';

const ProtectedRoute = (props) => {
    const {Component} = props;

    const token = useSelector(selectCurrentToken)
    const navigate = useNavigate();

    useEffect(()=>{
        // if(!localStorage.getItem('token')){
        //     return navigate('/login')
        //     }
        if(token===null){
          return navigate('/login')
          }
    },[])

  return (

    <>
        <Component/>
    </>
  )
}

export default ProtectedRoute