const NewsCard = ()=>{




    return(
        <div>
           <div className="card">
     <div className="card-image-container">
          <img className="card-image" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1eqSUv.img?w=768&h=493&m=6&x=356&y=173&s=179&d=179" alt="shoes"/>
     </div>
     <div className="news-details">
          <div className="news-title">News head</div>
          <div className="news-description">
               <p className="card-des">Men Sneakers</p>
               <p className="card-price">
                  Rs. 1750
               	  <span className="price-strike-through">Rs. 2499</span>
                  <span className="discount">(30% OFF)</span>
               </p>
          </div>
         
     </div>
</div>
        </div>
    )
}
export default NewsCard;