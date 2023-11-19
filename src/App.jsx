import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import FeatureProduct from './components/FeatureProduct';
import Login from './components/login';
import Electronics from './components/electronics';
import Jewelery from './components/jewelery';
import Mens from './components/mens';
import Womens from './components/womens';
import About from './components/about';
import Contracts from './components/contracts';
function App() {
  return (
    <div className="App">
       
       <BrowserRouter>     
        <Routes>
                <Route path = "/" element={<FeatureProduct/>}></Route> 
                <Route path = "/login" element={<Login/>}></Route>
                <Route path = "/electronics" element={<Electronics/>}></Route> 
                <Route path = "/jewelery" element={<Jewelery/>}></Route> 
                <Route path = "/mens" element={<Mens/>}></Route>
                <Route path = "/womens" element={<Womens/>}></Route>
                <Route path = "/about" element={<About/>}></Route> 
                <Route path = "/contracts" element={<Contracts/>}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
