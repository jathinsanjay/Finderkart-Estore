import React from 'react';
import Item1 from './item-lap';
import style from './smartphones.module.css';
import laptopsData from '../data/laptops.json';


function Getlaptops() {
  return (<div>
    <h1 className="text-2xl font-extrabold text-[#0c6cfb] m-20"> Laptops for you! <p className='text-sm text-[#625e5e]'>Get the Co-pilot for your work </p></h1>
    <div className={style.products}>
     
      {laptopsData.map((product, index) => (
        <Item1
          key={index}
          title={product.name}
          price={product.price}
          mrp={product.mrp}
          desc={product.description}
          rating={product.ratings}
        />
      ))}
    </div>
    </div>
  );
}

export default Getlaptops;