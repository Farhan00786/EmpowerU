import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "../src/pages/Home"
import {About} from "../src/pages/About"
import {Contact} from "../src/pages/Contact"
import {Service} from "../src/pages/Service"
import {Register} from "../src/pages/Register"
import {Login} from "../src/pages/Login"
import {Navbar} from "../src/components/Navbar"
import {Error} from "../src/pages/Error"

const App = () => {
  return <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/service" element={<Service/>} />
         <Route path="/register" element={<Register/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  </>
};

export default App;
