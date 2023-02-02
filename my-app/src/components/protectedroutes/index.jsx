import React from 'react'
import { useEffect } from 'react'
import {Link, useNavigate } from 'react-router-dom'

const Protected = (props) => {
  const { Component } = props
  // console.log("Protect: ",Component)
    const navigate = useNavigate();
    useEffect(() => {
      let login = 1 //localStorage.getItem('token');
      if(!login){
        navigate('/Login')
      }
      }
    , [])
    
    
  return (
    <>
    <Component />
    </>
  )
  }

export default Protected