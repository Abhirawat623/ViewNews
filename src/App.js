import Navbar from "./components/Navbar/Navbar";
import NewsContainer from "./components/News-container/NewsContainer";
import React from "react";
import {BrowserRouter as Router,
Routes,
Route} from "react-router-dom";
import './App.css';



function App() {
  return (
    <Router>
     <Navbar/>
     
     <Routes>
      
        <Route exact path="/general" element={<NewsContainer cat="general"/>}/>
        <Route path="/sports" element={<NewsContainer cat="sports"/>}/>
        <Route path="/entertainment" element={<NewsContainer cat="entertainment"/>}/>
        <Route path="/business" element={<NewsContainer cat="business"/>}/>
        <Route path="/health" element={<NewsContainer cat="health"/>}/>
        <Route path="/science" element={<NewsContainer cat="science"/>}/>

     </Routes>
    
    </Router>
  );
}

export default App;
