import React from "react";
import style from "./floaters.module.css";


function Floaters(){
    return(
        <div className={style.box}> 
      <h3 className={style.floatertext}>Get Headphones upto 50% off</h3>
     <button className={style.buynow}>Buy Now</button>
        </div>
   
    )

}
export default Floaters;