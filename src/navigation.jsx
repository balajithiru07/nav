import React from 'react' ;
import {BrowserRouter, Route, Routes, Link,} from 'react-router-dom';
import './navi.css';
import  p1 from './product 1.jfif'
import  p2 from './product 2.jfif'
import  p3 from './product 3.jfif'
import  p4 from './product 4.jfif'
import  p5 from './product 5.jfif'




const Home=()=>
<section id="main">
<h4>Buy-in-offer</h4>
<h1>Best prices for a deals </h1>
<h2>On all products</h2>
<p>Save more & offers upto 60%</p>
<Link to='/product'>
    <button >Shop Now</button>
</Link>

</section>
const Product=()=> <div class="products">



<div class="product-card">
<img src={p1}alt=""  />
<h3>OTTO</h3>
<p>700</p>
<button>Add to Cart</button>
</div>

<div class="product-card">
    <img src={p2} alt=""/>
    <h3>ALLIS</h3>
    <p>₹ 800</p>
    <button>Add to Cart</button>
    </div>

<div class="product-card">
<img src={p3} alt=""/>
<h3>LEO</h3>
<p>₹ 800</p>
<button>Add to Cart</button>
</div>

<div class="product-card">
<img src={p4} alt=""/>
<h3>FASHION</h3>
<p>₹ 650/-</p>
<button>Add to Cart</button>
</div>

<div class="product-card">
    <img src={p5} alt=""/>
    <h3>FASHION</h3>
    <p>₹ 700/-</p>
    <button>Add to Cart</button>    
</div>
</div>
const Contact=()=><div className='con'>
    <h1>
        Contact us 
    </h1>
    <h3>Address: 202 SouthStreet,<br></br> Nathamedu , Bhuvanagiri<br></br> Cuddalore 608-601</h3>
    <h3 >Phone: 6379472953</h3>
    <h3>Email: thirubalaji628@gmail.com</h3>
    
    
</div>

const Navi= ()=> 
    <nav>
        <ul className='nav'>
            <li ><Link className='n'to='/'>Home</Link></li>
            <li ><Link className='n' to='/product'>Product</Link></li>
            <li ><Link className='n' to='/contact'>Contact</Link></li>
        </ul>
    </nav>


const Nav = ()=>{
    return <BrowserRouter>
    <div>
        <Navi/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </div>
    </BrowserRouter>

}
export default Nav;