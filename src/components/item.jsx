import style from './item.module.css';
import phone1 from '../imgs/iphone13.webp';
import { Rate } from 'antd';
import React from 'react';

function Item({ title, price, mrp, desc, rating }) {
  return (
    <div className={style.item}>
      <div className={style.img}><img src={phone1} alt="" /></div>
      <h2 className={style.productname}>{title}<h2 className={style.price}>&#8377;{price}</h2></h2>
      <p className="text-[0.75rem] text-gray-500">Mrp: &#8377;{mrp}</p>
      <p className={style.desc}>{desc}</p>
      <div className={style.rating}><Rate disabled defaultValue={rating} /></div>
      <button>Add to cart</button>
    </div>
  );
}

export default Item;
