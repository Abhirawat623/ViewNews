import { useState } from "react";
const NewsCard = ({data})=>{
console.log(data)



  const news = data.articles[7];

    return(
     
        <div>
           <div className="card">
     <div className="card-image-container">
          <img className="card-image" src={`${news.urlToImage}`} alt="image"/>
     </div>
     <div className="news-details">
          <div className="news-title">{news.title}</div>
          <div className="news-description">
               <p className="card-des">{news.content}</p>
               <p className="card-price">
                 
               	  <span className="price-strike-through">\</span>
                  <span className="autor">{news.author}</span>
               </p>
          </div>
         
     </div>
</div>
        </div>
    )
}
export default NewsCard;