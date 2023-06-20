import React from 'react';
import Item from './item';
import style from './smartphones.module.css';
import smartphonesData from '../data/smartphones.json';

function Getsmartphones() {
  return (<div>
    <h1 className="text-2xl font-extrabold text-[#0c6cfb] m-20 "> Smartphones for you! <p className='text-sm text-[#625e5e]'>Choose your Bestfriend wisely</p></h1>
    <div className={style.products}>
        
      {smartphonesData.map((product, index) => (
        <Item
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

export default Getsmartphones;
