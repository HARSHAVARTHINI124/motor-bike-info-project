import { useState } from "react";
import "./user.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Resetpassword = () => {

  const location = useLocation();
  const use = location?.state?.user;
  const [user,setUser] = useState("");
  const [pass,setPass] = useState("");
  const [cpass,setCpass] = useState("");
  const nav = useNavigate();
  const [error,setError] = useState("")


  console.log(use);
  const handleForgot = async(e) =>{
    e.preventDefault();
    if(pass===cpass){
      try{
        const response = axios.put(`http://localhost:8080/updateByPassword?password=${pass}&username=${user}`);
        console.log((await response).data)
        if((await response).data==="updated"){
          alert("password updated");
          nav("/login");
        }
        else{
          setError("No user found");
        }
      }
      catch(error){
        console.log(error);
      }
    }
    else{
      setError("password mismatch");
    }
  }

  return (
    <div class="bodylgn1">
      <div class="bodylgn">
        <div class="containerlgn">
          <center class="lgn-font">Reset Password</center>
          <form onSubmit={handleForgot}>
          <div class="inputlgn">
              <span>
                <label for="password">Username</label>
              </span>
              <br></br>
              <input type="text" id="password" onChange={(e)=>{setUser(e.target.value)}} value={use}></input>
              <br></br>
            </div>
            <div class="inputlgn">
              <span>
                <label for="password">Password</label>
              </span>
              <br></br>
              <input type="password" id="word" onChange={(e)=>{setPass(e.target.value)}}></input>
              <br></br>
            </div>
            <div class="inputlgn">
              <span>
                <label for="pass">Confirm Password</label>
              </span>
              <br></br>
              <input type="password" id="pass" onChange={(e)=>{setCpass(e.target.value)}}></input>
            </div>
            <br></br>
            <div class="btnlgn">
              <center>
                  <button>Confirm</button>
              </center>
              {error&&<center>{error}</center>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Resetpassword;