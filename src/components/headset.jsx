import React from 'react';
import Item1 from './item-heads';
import style from './smartphones.module.css';
import headsetsData from '../data/headset.json';

function Getheadsets() {
  return (<div>
    <h1 className="text-2xl font-extrabold text-[#0c6cfb] m-20"> Headsets  for you!- <p className='text-sm text-[#625e5e]'>Good music deserves a good One</p></h1>
    <div className={style.products}>
        
      {headsetsData.map((product, index) => (
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

export default Getheadsets;