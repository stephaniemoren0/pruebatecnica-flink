import React from 'react'
import './App.css';
import Login from './componets/logIn';
import Singup from './componets/componentssingUp/singUp';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Alls from './componets/componentsAll/componentsAll';
import ContenedorMatch from './componets/componentsMatch/componentsMatch';



function App() {
  return (
    <Router>
    <div>
    <Routes>
        <Route  path="/" element={<Login />}> </Route>  
        <Route  path="/all" element={<Alls />}> </Route>       
        <Route path="/registro" element={<Singup />}></Route>
        <Route path="/match/:email" element={<ContenedorMatch />}></Route>
      </Routes>
      
      
    </div>
    </Router>
  );
}



export default App;
