import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";
import "../../../style.css";
// import { loginUserService } from '../../../services/user.service';
import {useDispatch} from "react-redux"
// import { setUser } from '../../../redux/slices/auth';
import { userLogin } from '../../../redux/slices/auth/thunk';


const Login = () => {
  const dispatch=useDispatch()
  // const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/;

  const onSubmit = async (data) => {    
      dispatch(userLogin(data))
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