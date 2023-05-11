import React, {useEffect, useState} from 'react';
import "../styles/cart.css";

const Wishlist= ({wish,setWish}) => {



const handleRemove = (id) =>{
  const arr = wish.filter((item)=>item.id !==id);
setWish(arr);

}



  return (
    <article>
    {
      wish?.map((item)=>(
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} />
            <p>{item.title}</p>
          </div>
          <div>
            <span>Rs.{item.price}</span><br/>
            <button onClick={()=>handleRemove(item.id)}> Remove </button>
          </div>
        </div>
      ))
}
    </article>

  )
}

export default Wishlist
