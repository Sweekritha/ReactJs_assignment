import React from 'react';
import '../styles/cards.css'

const Cards = ({item,handleclick,handlePress}) => {
    const {title,price,img}= item;
  return (
    <div className="cards">
        <div className="image_box"> 
            <img src={img} alt=""/>
        </div>
        <div className="details">
          <p>{title}</p>
          <p>Price- {price}Rs</p>
          <button onClick={()=>handleclick(item)}>Add to Cart</button>
          <button onClick={()=>handlePress(item)}>Add to Wishlist</button>
          
        </div>
    </div>
  )
}

export default Cards;
