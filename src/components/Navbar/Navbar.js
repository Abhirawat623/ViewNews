import React from "react";
import { Link } from "react-router-dom";


const Navbar =(
)=>{



    return(
     <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
       <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
             </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          

           <li className="nav-item">
             
               <Link className="nav-link active" aria-current="home" to={'/general'}>Home</Link>
           </li>

           <li className="nav-item">
             
               <Link to={'/sports'} className="nav-link active" aria-current="sports" >Sports</Link>
           </li>

           <li className="nav-item">
             
               <Link to={'/entertainment'} className="nav-link active" aria-current="entertainment">Entertainment</Link>
           </li>

           <li className="nav-item">
             
               <Link to={'/business'} className="nav-link active" aria-current="business" >Business</Link>
           </li>

           <li className="nav-item">
             
               <Link to={'/science'} className="nav-link active" aria-current="science">Science</Link>
           </li>
           

           <li className="nav-item">
             
             <Link to={'/health'} className="nav-link active" aria-current="health">health</Link>
           </li>
          
          
          
            </ul>
         
            </div>
            </div>
</nav>
        </div>
    )
}

export default Navbar;