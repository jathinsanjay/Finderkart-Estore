import Nav from '../components/navbar';

import React from 'react';

import Footer from '../components/footer';
import Floaters from '../components/floaters';
import Getlaptops from '../components/laptops.jsx';

import  Smartphones from '../components/smartphones.jsx';
import Headset from '../components/headset.jsx';

function Home() {
    return(
 <div className="body">
    <Nav />
    <Floaters/>
    <Smartphones/>
     

    <Footer/>
 </div>
);}
export default Home;