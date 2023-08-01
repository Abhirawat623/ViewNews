import {  React,useEffect, useState } from "react";
import NewsCard from "../News-card/NewsCard";
import axios  from "axios";


 const NewsContainer=({cat})=>{

const [news,setNews]= useState([]);


    useEffect(()=>{
    async function fetchData(){
        try{
             const response = await axios.get(
               cat ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=a211e3b43c3b42208a9123eb13cdfb33` :
               "https://newsapi.org/v2/top-headlines?country=in&apiKey=a211e3b43c3b42208a9123eb13cdfb33");
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
       
   },[cat])

  
    
    return(
       
     <>
     <NewsCard key={news.id} props={news}/>
     </>
    )
}
export default NewsContainer;