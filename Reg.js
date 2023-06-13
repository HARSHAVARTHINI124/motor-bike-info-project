import { useState } from "react";
import "./user.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Reg = () => {

  const [user,setUser] = useState("");
  const [pass,setPass] = useState("");
  const navigate = useNavigate();


  const handleSignup = async (e) =>{
    e.preventDefault();
      const data={
        username:user,
        password:pass
      };
      try{
        const response = await axios.post("http://localhost:8080/reg",data);
        console.log(response.data);
        alert("sign up successfully");
        navigate("/home");
      }
      catch(error){
        console.log(error);
      }
  }

  return (
    <div class="bodylgn1">
      <div class="bodylgn">
        <div class="containerlgn">
          <center class="lgn-font">Create Account</center>
          <form onSubmit={handleSignup}>
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
            <div class="btnlgn">
              <center>
                  <button>Sign up</button>
              </center>
            </div>
            <div class="sgn-txt1">
              <center>
                <span class="sgn-txt2">Already have an Account? </span>
                <span class="sgn-txt">
                  <Link to="/login" className="font1">
                    Login
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

export default Reg;