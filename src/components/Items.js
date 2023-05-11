import React from 'react';
import list from '../data';
import '../styles/items.css';
import Cards from './Cards'

const Items = ({handleclick,handlePress}) => {
  return (
    <section>
      {
       list.map((item)=>(
           <Cards key={item.id} item={item} handleclick={handleclick} handlePress={handlePress}/>
       ) )
      }
    </section>
  )
}

export default Items;
