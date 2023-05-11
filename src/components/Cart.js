import React, {useEffect, useState} from 'react';
import "../styles/cart.css";

const Cart = ({cart,setCart,handleChange}) => {
  const [price,setPrice] = useState(0);
  
  const handlePrice = ()=>{
    let ans=0;
    cart.map((item)=>(
      ans+= item.amount * item.price
    ))
    setPrice(ans);
  }


const handleRemove = (id) =>{
  const arr = cart.filter((item)=>item.id !==id);
setCart(arr);

}

  useEffect(()=>{
    handlePrice();
  })

  return (
    <article>
    {
      cart?.map((item)=>(
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={()=>handleChange(item,+1)}> + </button>
            <button>{item.amount}</button>
            <button onClick={()=>handleChange(item,-1)}> - </button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={()=>handleRemove(item.id)}> Remove </button>
          </div>
        </div>
      ))
}
<div className="total">
  <span>Total price of your cart</span>
  <span>Rs - {price}</span>
</div>
<br/>
<div className="location">
<select className="location">
  <option selected value="location" disabled>Choose location</option>
  <option value="India">India</option>
  <option value="south korea">South Korea</option>
  <option value="canada">Canada</option>
</select>
</div>
<br/>
<div className="Checkout">
  <button className='button'>Sign-in</button>
  <button className='button'>Registered user</button>
</div>
    </article>

  )
}

export default Cart
