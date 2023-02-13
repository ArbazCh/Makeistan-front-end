
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { userRegister } from "../../../redux/slices/register/thunk";


const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/;
  const cpassword = watch("password")
  

  const onSubmit = async (data) => {

    try{ 
      dispatch(userRegister(data))
      navigate('/Login')
    }catch(error){
    console.error("reg err: ", error.message)}
  };

  return (
    <>
      <div className="main-form">
        <div className="form-inner">
          <h1>Register</h1>
          <p>
            Already registered,{" "}
            <span>
              <Link to="/Login">login</Link>
            </span>{" "}
            here!
          </p>
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
            {/* {errors.email?.message} */}
            {errors.email && <p className='errors-forms'>{errors.email.message}</p>}
            <br />
            <label className="labelReg">
              Password <span className="rsymbol">*</span>{" "}
            </label>
            <br />
            <input
              type="password"
              name="password"
              className="regInput"
              {...register("password", {
                required: "password is required & must be 8 characters long",
                minLength: 8,
                pattern: {
                  value: passwordRegex, 
                  message: `Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number`
                }
              })}
            />
            {errors.password && <p className='errors-forms'>{errors.password.message}</p>}
            <br />
            <br />
            <label className="labelReg">
              Confirm Password <span className="rsymbol">*</span>{" "}
            </label>
            <br />
            <input
              type="password"
              name="cpassword"
              className="regInput"
              {...register("cpassword", {
                required: " confirm password is required",
                minLength: 8,
                pattern: {
                  value: passwordRegex,
                  message: " Passwords must match  ",



                },
                validate: value => value === cpassword || "Passwords do not match"
              })}
            />
            {errors.cpassword && <p className='errors-forms'>{errors.cpassword.message}</p>}
            <br />
            <br />
            <label className="labelReg">
              First Name <span className="rsymbol">*</span>{" "}
            </label>
            <br />
            <input
             name="firstName"
              className="regInput"
              {...register("firstName", {
                required: "First Name Cannot be empty"
              })}
            />
            {errors.firstName && <p className='errors-forms'>{errors.firstName.message}</p>}
            <br />
            <br />
            <label className="labelReg">
              Last Name <span className="rsymbol">*</span>{" "}
            </label>
            <br />
            <input
              name="lastName"
              className="regInput"
              {...register("lastName", {
                required: "Last Name Cannot be empty "
              })}
            />
            {errors.lastName && <p className='errors-forms'>{errors.lastName.message}</p>}
            <br />
            <br />
            <label className="labelReg">
              Address <span className="rsymbol">*</span>{" "}
            </label>
            <br />
            <input
              name="address"
              className="regInput"
              {...register("address", {
                required: "Address is required "
              })}
            />
            {errors.address && <p className='errors-forms'>{errors.address.message}</p>}
            <br />
            <br />
            <input
              type="submit"
              name="signup"
              id="signup"
              className="main-button"
              value="register"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;







    // try {

    //   const res = await fetch("http://localhost:5000/api/customer/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   const resdata = res.json();
    //   if (res.status === 422 || !resdata) {
    //     window.alert("Invalid Registration ");
    //     console.log(data)
    //   } else {
    //     window.alert("user successfully Registered");
    //   }
    // } catch (error) {
    //   console.error(error)
    // }
    //   const res = await fetch("http://localhost:3000/api/customer/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   const resdata = res.json();
    //   if (res.status === 422 || !resdata) {
    //     window.alert("Invalid Registration ");
    //     console.log(data)
    //   } else {
    //     window.alert("user successfully Registered");
    //   }
    // } catch (error) {
    //   console.error(error)
    // }