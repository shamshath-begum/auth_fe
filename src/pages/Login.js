import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "../App";

function Login() {
    let navigate = useNavigate();

  const [show, setShow] = useState(false);

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  console.log(inputData);

  const setData = (e) => {
    const { name, value } = e.target;
    setInputData(() => {
      return {
        ...inputData,
        [name]: value,
      };
    });
  };

  const handleLogin =async(e) => {
    e.preventDefault();

    const { email, password } = inputData;
    if (email === "") {
      alert("Please Enter Your Email");
    } else if (!email.includes("@")) {
      alert("Please Enter Your Valid Email");
    } else if (password === "") {
      alert("Please Enter Your Password");
    } else if (password.length < 6) {
      alert("Password Must Be 6 Characters");
    } else {
    //   console.log("User Login Successfully");

    try {
        let res=await axios.post(`${url}/login`,{
            email,password,
        })
        console.log(res)
        if(res.status===200){
            localStorage.setItem("token",res.data.token)
            sessionStorage.setItem("role", res.data.role);
            toast.success(res.data.message)
            setInputData({...inputData ,email:"",password:""})
            navigate("/dashboard");
        }else{
            toast.error(res.data.error)
        }
    } catch (error) {
        console.log(error)
    }
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h2>Login</h2>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={inputData.email}
                onChange={setData}
              />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={!show ? "password" : "text"}
                  name="password"
                  id="password"
                  value={inputData.password}
                  onChange={setData}
                />
                <div className="showpass" onClick={() => setShow(!show)}>
                  {!show ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <button className="btn" onClick={handleLogin}>
              Login
            </button>
            <p>
              Don't have an Account? <Link to="/signup">SignUp</Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
