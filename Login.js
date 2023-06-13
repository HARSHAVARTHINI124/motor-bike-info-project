import axios from "axios";
import "./user.css";
import {Link, useNavigate } from "react-router-dom";
import { useState } from "react";


const Login = () => {
const [user,setUser ]=useState("");
const [pass,setPass]=useState("");
const navigate = useNavigate("");


const handleLogin = async(e)=>{
    e.preventDefault();
    try{
        const response = await axios.get(`http://localhost:8080/login?username=${user}&password=${pass}`);
        console.log(response.data);
        if(response.data==="Login sucessfull"){
            alert("login success");
            navigate("/home");
        }
    }
    catch(error){
        console.log(error);
    }
}


  return (
    <div class="bodylgn1">
      <div class="bodylgn">
        <div class="containerlgn">
          <center class="lgn-font">Login</center>
          <form onSubmit={handleLogin}>
          
            <div class="inputlgn">
              <span>
                <label for="username">Username</label>
              </span>
              <br></br>
              <input type="text" id="username" onChange={(e)=>{setUser(e.target.value)}}></input>
            </div>
            <div class="inputlgn">
              <span>
                <label for="password">Password</label>
              </span>
              <br></br>
              <input type="password" id="password" onChange={(e)=>{setPass(e.target.value)}}></input>
              <br></br>
            </div>
            <div class="fpwd-txt">
              <Link to="/forgot" className="font1">
                Forgot Password?
              </Link>
            </div>
            <div class="btnlgn">
              <center>
                
                  <button>Login</button>
                
              </center>
            </div>
            <div class="sgn-txt1">
              <center>
                <span class="sgn-txt2">Not have an Account? </span>
                <span class="sgn-txt">
                  <Link to="/Reg" className="font1">
                    Sign Up
                  </Link>
                </span>
              </center>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;