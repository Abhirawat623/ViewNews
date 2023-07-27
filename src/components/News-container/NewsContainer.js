import { useEffect } from "react";
import NewsCard from "../News-card/NewsCard";
import axios  from "axios";
 const NewsContainer=()=>{

    useEffect(()=>{
    async function fetchData(){
        try{
             const response = await axios.get('https://news67.p.rapidapi.com/v2/topic-search');
             const data = response.data;
        }
        catch(err){
             console.log("error",err);
             alert("Some error occured")
        }};
         fetchData(),[]
       
   })

    return(
        <div className="Card-container">
        <NewsCard />
        </div>
    )
}
export default NewsContainer;