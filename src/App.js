import './App.css';
import Headernav from './Headernav';
import Home from './Home';
import SignIn from './SignIn';
import Signup from './Signup';
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Headernav/>
      <Routes>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/signin' element={<SignIn/>}/>
         <Route path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
