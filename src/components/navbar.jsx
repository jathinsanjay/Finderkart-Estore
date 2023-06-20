import React from "react";
import style from "./navbar.module.css";
import { BsFillTelephoneFill, BsSearch } from "react-icons/bs";
import { Select } from '@chakra-ui/react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import { TbBrandShopee } from "react-icons/tb";
import { GiSmartphone } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";
import { DiYii } from "react-icons/di";
import { GiHamburgerMenu} from "react-icons/gi";



function Nav() {
    const[value,changevalue]=React.useState('')
    const [toggleopen, settoggle] = React.useState(false)
    const togglemenu = () => {
        settoggle(!toggleopen)}
        const [selectedOption, setSelectedOption] =React. useState('');
       
    return (

        <div className={style.nav}>

            <div className="bg-[#0c6bfb] flex text-white justify-around text-xs py-3" id={style.topnav}>
                <div className="flex"><BsFillTelephoneFill />&nbsp; &nbsp; 08571-64645</div>
                <div>Get 50% off on selected items | &nbsp; Shop Now</div>
                <div className="flex"> <FaMapMarkerAlt />&nbsp;<Select placeholder='Country' bg='#0c6bfb'>
                    <option value='India'>India</option>
                    <option value='Others'>Others</option>
                </Select>
                </div>


            </div>
            <div className={style.bottomnav}>
                <div className={style.left}> <div className={style.hamburger} onClick={togglemenu
                }><GiHamburgerMenu/> </div>
                <div className={style.brandslogo}><DiYii /></div> 
                <div className="text-xl text-[#0c6cfb]"><b ><a href="/">Finderkart</a></b></div>
                </div>
                <div className={style.menu} style={{ display: toggleopen? 'none' : 'flex' }}>
                      <div className={style.right}>
                    
                    <div className={style.brandslogo}><BiCategory /></div>
                    <div className={style.select}><a href="/Laptops">Laptops</a></div>
                    
               </div>
               
               
               <div className={style.right}   ><div className={style.brandslogo}><GiSmartphone /></div><a href="/Smartphones">Smartphones</a>

               </div>
               <div className={style.right}><div className={style.brandslogo}><TbBrandShopee /></div><a href="/Headsets">Headsets</a></div>
               <div className={style.search} > <input type="text" placeholder="Search...." className={style.input} value={value} onChange={(e)=>changevalue(e.target.value)}/> 
               <div className={style.searchicon} > <BsSearch /></div>
               </div>

               <div className={style.cartbox}><div className={style.cart} ><ImCart /></div>Cart
               </div>
               <div className={style.right}>About Us</div></div>
                
            </div>
            <div className={style.cartboxphone}><div className={style.cart} ><ImCart /></div>Cart
               </div>


        </div>


    )
}
export default Nav;
