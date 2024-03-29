import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "../App";

function SignUp() {
  const [show, setShow] = useState(false);
  const [cpassshow, setcpassShow] = useState(false);

  const[inputData,setInputData]=useState({
    name:"",
    email:"",
    password:"",
    cpassword:"",
    role:"",
    status:"",
})
console.log(inputData)

const setData=(e)=>{
const{name,value}=e.target
setInputData(()=>{
return {
    ...inputData,
    [name]:value
}
})
}

const handleSignUp=async(e)=>{
e.preventDefault()

const{name,email,password,cpassword,role,status}=inputData
if(name===""){
    alert("Please Enter Your Name")
}else if(email===""){
    alert("Please Enter Your Email")
}else if(!email.includes("@")){
    alert("Please Enter Your Valid Email")
}else if(password===""){
    alert("Please Enter Your Password")
}else if(password.length<6){
    alert("Password Must Be 6 Characters")
}else if(cpassword===""){
    alert("Please Enter Your Confirm Password")
}else if(password.length<6){
    alert("Confirm Password Must Be 6 Characters")
}else if(password !== cpassword){
    alert("Password and Confirm Password Must Match")
}else if(role===""){
    alert("Please Enter Your Role")
}else if(status===""){
    alert("Please Enter The Status")
}
else{
    // console.log("User Registered Successfully")
try {
    let res=await axios.post(`${url}/signup`,{
        name,email,password,cpassword,role,status
    })
    console.log(res)
    if(res.status===201){
        toast.success(res.data.message)
        setInputData({...inputData,name:"",email:"",password:"",cpassword:""})

    }else{
        toast.error(res.data.error)
    }

} catch (error) {
    // console.log(error)
    toast.error(error.response.data.message)
}
}
}

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h2>SignUp</h2>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" value={inputData.name} onChange={setData} />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" value={inputData.email} onChange={setData} />
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
            <div className="form_input">
              <label htmlFor="password">Confirm Password</label>
              <div className="two">
                <input
                  type={!cpassshow ? "password" : "text"}
                  name="cpassword"
                  id="cpassword"
                  value={inputData.cpassword}
                  onChange={setData}

                />
                <div
                  className="showpass"
                  onClick={() => setcpassShow(!cpassshow)}
                >
                  {!cpassshow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <div className="form_input">
              <label htmlFor="name">Role</label>
              <input type="text" name="role" id="role" value={inputData.role} onChange={setData} />
            </div>
            <div className="form_input">
              <label htmlFor="name">status</label>
              <input type="text" name="status" id="status" value={inputData.status} onChange={setData} />
            </div>
            <button className="btn" onClick={handleSignUp}>SignUp</button>
            <p>
              Already have an account? <Link to="/">Log In</Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default SignUp;
