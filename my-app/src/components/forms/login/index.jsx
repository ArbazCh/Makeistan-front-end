import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";



const Login = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/;

  const onSubmit = async (data) => {    
    try {
    
      const res = await fetch("http://localhost:5000/api/customer/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          data
        ),
      });
      const resdata = await res.json();
      // console.log("BE Res",resdata)
      if(resdata.jwtToken){
        // localStorage.setItem("token", resdata.jwtToken);
        document.cookie = (`token=${resdata.jwtToken}`);
  
        // toast.success("Logged in Successfully");
        navigate('/product')

      } else if (resdata.status === 422 || !resdata) {
        window.alert("Invalid Registration ");
        console.log(data)
        
        toast.error(resdata);
        
      } 
    } catch (error) {
      console.error(error)
    }
  };
  return (
    <>
     <div className="main-form">
        <div className="form-inner">
            <h1>Login</h1>
            <p>If you don’t have an account, <span  ><Link to="/Register">register</Link></span> now!</p>
            <form  onSubmit={handleSubmit(onSubmit)}>
             <label for="fname" className='labelReg'
              >Email Address <span className='rsymbol'>*</span> </label><br />
             <input type="email"  name="email" className='regInput' 
             {...register("email", {
              required: "email is required",
              pattern: {
                value: emailRegex,
                message: "invalid email address"
              }
            })}
              /><br />
              {errors.email?.message}
             <label for="lname" className='labelReg'>Password <span className='rsymbol'>*</span> </label><br/>
             <input type="password"  name="password" className='regInput' 
             {...register("password", {
              required: "password is required & must be 8 characters long",
              minLength: 8,
              pattern: {
                value: passwordRegex, 
                message: `Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number`
              }
            })} /><br />
            {errors.password && <p>{errors.password.message}</p>}
            <br />
             
             <input type="submit" name='signin' id='signin' className='main-button' value="login" />
           </form> 
           

        </div>
    </div>
    </>
  )
}

export default Login