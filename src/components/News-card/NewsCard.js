

const NewsCard = ({props})=>{

 

 



    
  

    return(
     
        <div className="card-container">


          { props.map((value)=>{

               return(
            <div className="card">
            <div className="card-image-container">
            <a href={value.url} className="card-know-more">
            <img className="card-image" src={value.urlToImage} alt="image"/></a>
            </div>
              <div className="news-details">
                 <div className="news-title">{value.content}
                 </div>
                 <div className="news-description">
                      <p className="card-des">{value.description}</p>
                        <p className="card-published">{value.publishedAt}</p>
                          
                            <span className="author">{value.author}</span>
                        
                 </div>
                
               </div>
            </div>)
          })}
           
        </div>
    )
}
export default NewsCard;