import { useState } from "react";
import "./user.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Addbike = () => {

  const [bkn,setBkn] = useState("");
  const [atn,setAtn] = useState("");
  const navigate = useNavigate();


  const handlebook = async (e) =>{
    e.preventDefault();
      const data={
        bmodel:bkn,
        price:atn,
      };
      try{
        const response = await axios.post("http://localhost:8080/regg",data);
        console.log(response.data);
        alert("bmodel added successfully");
        navigate("/home");
      }
      catch(error){
        console.groupCollapsed(error);
      }
  }

  return (
    <div class="bodylgn1">
      <div class="bodylgn">
        <div class="containerlgn">
          <center class="lgn-font">Add Bike</center>
          <form onSubmit={handlebook}>
            <div class="inputlgn">
              <span>
                <label for="username">Bike Name</label>
              </span>
              <br></br>
              <input type="text" id="username" onChange={(e)=>{setBkn(e.target.value)}}></input>
            </div>
            <div class="inputlgn">
              <span>
                <label for="password">price</label>
              </span>
              <br></br>
              <input type="text" id="password" onChange={(e)=>{setAtn(e.target.value)}}></input>
              <br></br>
            </div>
            <div class="btnlgn">
              <center>
                  <button>Add</button>
              </center>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addbike;