import React , {useState} from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Items from './components/Items';
import './styles/items.css';
import Wishlist from './components/Wishlist';

const App = () => {
  const [show, setShow] = useState(true);
  const [state, setState] = useState(true);
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);
  const [warning, setWarning] = useState(false);

const handleclick = (item) =>{
  let isPresent = false;
  cart.forEach((product)=>{
    if( item.id === product.id)
    isPresent=true;
  })
  if (isPresent){
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      },2000);
      return ;
  }
  setCart([...cart,item]);
}
const handlePress = (item) =>{
  let isPresent = false;
  wish.forEach((product)=>{
    if( item.id === product.id)
    isPresent=true;
  })
  if (isPresent){
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      },2000);
      return ;
  }
  setWish([...wish,item]);
}

const handleChange = (item, d)=>{
    let ind = -1;
    cart.forEach((data,index)=>{
        if (data.id === item.id)
        ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;
    if (tempArr[ind].amount === 0)
        tempArr[ind].amount = 1;
    setCart([...tempArr])
}


  return (
    <React.Fragment>
      <Navbar size={cart.length} setShow={setShow} setState={setState}/>
      {
        show ? ( state? <Items handleclick={handleclick} handlePress={handlePress}/> : <Wishlist wish={wish} setWish={setWish}/>):<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
      }
      {
        warning && <div className="warning">Item is already added to your cart</div>
      }
      {
        warning && <div className="warning">Item is already added to your Wishlist</div>
      }
    </React.Fragment>
  );
}

export default App;
