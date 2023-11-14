import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import FeatureProduct from './components/FeatureProduct';
import Login from './components/login';
function App() {
  return (
    <div className="App">
       
       <BrowserRouter>     
        <Routes>
                <Route path = "/" element={<FeatureProduct/>}></Route> 
                <Route path = "/login" element={<Login/>}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
