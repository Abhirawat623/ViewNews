import { useEffect, useState } from "react";
import NewsCard from "../News-card/NewsCard";
import axios  from "axios";
 const NewsContainer=()=>{

const [items,setItems]= useState([]);


    useEffect(()=>{
    async function fetchData(){
        try{
             const response = await axios.get('https://newsapi.org/v2/everything?q=keyword&apiKey=8a4f493837be4924b72307cb5ca09e67');
             const data = [response.data];
         
             setItems(data);
        }
        catch(err){
             console.log("error",err);
             alert("Some error occured")
        }};
         fetchData()
       
   },[])

    return(
       
        <div className="card-container">
          
          {items.map(item=>{
           

  return (<NewsCard data={item}/>)})
}

        </div>
    )
}
export default NewsContainer;