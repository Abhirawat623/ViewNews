import Navbar from "./components/Navbar/Navbar";
import NewsContainer from "./components/News-container/NewsContainer";
import './App.css';
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
     <Navbar/>
    <NewsContainer/>
    </Fragment>
  );
}

export default App;
