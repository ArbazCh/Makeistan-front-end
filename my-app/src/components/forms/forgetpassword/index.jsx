import React from 'react'
import { useForm } from 'react-hook-form';

const ForgetP = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/;
      const onSubmit = async (data) => {
        try {
    
          const res = await fetch("http://localhost:5000/api/customer/forgetpassword", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(
            data
            ),
          });
          const resdata = res.json();
          console.log(resdata)
          
          
    
           
        } catch (error) {
          console.error(error)
        }
      };
  return (
    <>
    <div className="main-form">
        <div className="form-inner">
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className="labelReg">
              Email Address <span className="rsymbol">*</span>{" "}
            </label>
            <br />
            <input
              name="email"
              className="regInput"
              type="email"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: emailRegex,
                  message: "invalid email address"
                }
              })}
            />
            {errors.email?.message}
            <br />
            <label className="labelReg">
              Password <span className="rsymbol">*</span>{" "}
            </label>
            <br />
            <input
              type="password"
              name="newpassword"
              className="regInput"
              {...register("newpassword", {
                required: "password is required & must be 8 characters long",
                minLength: 8,
                pattern: {
                  value: passwordRegex, 
                  message: `Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number`
                }
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <br />
            <br />
            <button type='submit' className='main-button'>Submit</button>
           </form> 
        </div>
    </div>
    </>
  )
}

export default ForgetP