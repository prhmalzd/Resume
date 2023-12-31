import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RPS_App from "./pages/RPS-App";
import ImpossibleList from "./pages/ImpossibleList";
import NotFound from "./pages/NotFound";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="RPSLS" element={<RPS_App/>}/>
        <Route path="ImpossibleList" element={<ImpossibleList/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
