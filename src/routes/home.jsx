import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Items from './items';


export default function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);


  return (
    <div>
      <h1>Luca's Shop</h1>
      <h2>This shop is awesome</h2>
      <button onClick={() => navigate('/shop')} className='button'>Shop now</button>
      <hr />
      <h2>Featured</h2>
      <Items products={products} />    
    </div>
  );
}
