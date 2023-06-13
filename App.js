import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './Login';
import Reg from './Reg';
import Resetpassword from './forgot';
import Remove from './remove';
import Home from './home';
import Addbike from './Addbike';

import Bike1 from './bike1';
import Bike2 from './bike2';
import Bike3 from './bike3';
import Bike4 from './bike4';
import Bike5 from './bike5';
import Bike6 from './bike6';
import Bike7 from './bike7';
import Bike8 from './bike8';
import Bike9 from './bike9';
import Bike10 from './bike10';
import Bikeedit from './Editbike';


function App() {
  return (
    
      <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/Reg' element={<Reg/>}></Route>
      <Route path='/forgot' element={<Resetpassword/>}></Route>
      <Route path='/remove' element={<Remove/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/bike1' element={<Bike1/>}></Route>
      <Route path='/bike2' element={<Bike2/>}></Route>
      <Route path='/bike3' element={<Bike3/>}></Route>
      <Route path='/bike4' element={<Bike4/>}></Route>
      <Route path='/bike5' element={<Bike5/>}></Route>
      <Route path='/bike6' element={<Bike6/>}></Route>
      <Route path='/bike7' element={<Bike7/>}></Route>
      <Route path='/bike8' element={<Bike8/>}></Route>
      <Route path='/bike9' element={<Bike9/>}></Route>
      <Route path='/bike10' element={<Bike10/>}></Route>
      <Route path='/addbike' element={<Addbike/>}></Route>
      <Route path='/Editbike' element={<Bikeedit/>}></Route>
      </Routes>
      );

}
export default App;