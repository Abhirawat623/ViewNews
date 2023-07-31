import { useEffect, useState } from "react";
import NewsCard from "../News-card/NewsCard";
import axios  from "axios";
 const NewsContainer=()=>{

const [news,setNews]= useState([]);


    useEffect(()=>{
    async function fetchData(){
        try{
             const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=8a4f493837be4924b72307cb5ca09e67');
             const data = response.data.articles
             const transformedData = data.map( (item,index)=>{
               return{
                ...item,
                id:index
               }
             })
             setNews(transformedData);
        }
        catch(err){
             console.log("error",err);
             alert("Some error occured in the api link")
        }};
         fetchData()
       
   },[])

  
    
    return(
       
     <>
     <NewsCard key={news.id} props={news}/>
     </>
    )
}
export default NewsContainer;