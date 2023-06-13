import { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {

  const [bikedetails, setBikedetails] = useState([]);

  useEffect(() => {
    loadBikeDetails();
  }, []);
  const loadBikeDetails = async () => {
    const result = await axios.get("http://localhost:8080/getbike");
    setBikedetails(result.data);
    console.log(result.data);
  }

  const deleteBike = async (e) => {
    const sno = e.target.value;
    await axios.delete("http://localhost:8080/dltbike/" + sno);
    loadBikeDetails();
  }

  return (
    <div className="adm-bdy">
      <div className="adm-nav">
      <Link className="n-link" to="/addbike">
          <button>Add Bike</button>
        </Link>
        <Link className="n-link" to="/bikeedit">
          <button>Edit Bike</button>
        </Link>
        <Link className="n-link" to="/home">
          <button>Home</button>
        </Link>
      </div>
      <div className="adm-table1">
        <div className="adm-table">
          <table>
            <tbody>
              <tr>
                <td className="m-head" colSpan="7">BIKE DETAILS</td>
              </tr>
              <tr>
                <th>SNO</th>
                <th>BIKE MODEL</th>
                <th>PRICE</th>
                <th>DELETE</th>
              </tr>
              {
                bikedetails && bikedetails.map((bike, index) => (
                  <tr key={index}>
                     <td>{index + 1}</td> 
                    <td>{bike.bmodel}</td>
                    <td>{bike.price}</td> 
                    <td><button value={bike.sno} onClick={(e)=>deleteBike(e)} className="adm-delbtn" title="Delete">Delete</button></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home;