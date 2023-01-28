import React from 'react'
import { useEffect } from 'react'
import {Link, useNavigate } from 'react-router-dom'

const Protected = (props) => {
  const { Component } = props
    const navigate = useNavigate();
    useEffect(() => {
      let login = localStorage.getItem('token');
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