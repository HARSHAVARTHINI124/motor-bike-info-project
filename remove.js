import axios from "axios";
import "./user.css";
import {  useNavigate } from "react-router-dom";
import { useState } from "react";


const Remove = () => {

    const [username,setUser] = useState("");
    const [password,setPass] = useState("");
    const navigate = useNavigate();


    const handleRemove= async (e) =>{
    
             axios.delete(`http://localhost:8080/remove?username=${username}&password=${password}`).then(alert("account removed"));
             
             navigate("/reg");
           }
            
           

  return (
    <div class="bodylgn1">
      <div class="bodylgn">
        <div class="containerlgn">
          <center class="lgn-font">Remove my account</center>
          <form>
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
              <center onClick={handleRemove}>
                
                  <button>Signout</button>
                
              </center>
            </div>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Remove;