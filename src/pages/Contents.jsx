import React, { useState } from 'react';
import chocolate from './photos/Chocolate.jpg';
import fudge from './photos/chocofudge.jpg';
import vanilla from './photos/vanilla.jpg';
import lava from './photos/lava.jpg';
import redvelvet from './photos/redvelvet.jpg';
import german from './photos/german.jpg';
import forest from './photos/forest.webp';
import fruit from './photos/fruit.jpg';
import light from './photos/lightfruit.jpg';
import citrus from './photos/citrus.jpg';
import italian from './photos/italian.jpg';
import stollen from './photos/stollen.jpg';
import pineapple from './photos/pineapple.jpg';
import torte from './photos/torte.jpg';
import king from './photos/king.jpg';
import { Link } from 'react-router-dom';

export default function Contents() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const cakes = [
    { src: redvelvet, title: 'Blood Velvet Cake', link: '/pages/Velvet', price: '₹3,800' },
    { src: vanilla, title: 'Frosted Vanilla Cake', link: '/pages/Vanilla', price: '₹3,200' },
    { src: pineapple, title: 'Pineapple Cake', link: '/Details/Pineapple', price: '₹3,500' },
    { src: chocolate, title: 'Classic Chocolate Cake', link: '/Details/ClassicChoco', price: '₹4,000' },
    { src: fudge, title: 'Chocolate Fudge Cake', link: '/Details/ChocoFudge', price: '₹4,500' },
    { src: lava, title: 'Choco Lava Cake', link: '/Details/ChocoLava', price: '₹800' },
    { src: german, title: 'German Chocolate Cake', link: '/Details/GermanChoco', price: '₹4,500' },
    { src: forest, title: 'Black Forest', link: '/Details/BlackForest', price: '₹4,800' },
    { src: torte, title: 'Chocolate Torte', link: '/Details/Torte', price: '₹4,800' },
    { src: fruit, title: 'Traditional Fruit Cake', link: '/Details/Traditional', price: '₹5,000' },
    { src: light, title: 'Light Fruit Cake', link: '/Details/Light', price: '₹4,200' },
    { src: citrus, title: 'Citrus Fruit Cake', link: '/Details/Citrus', price: '₹4,500' },
    { src: italian, title: 'Italian Fanforte', link: '/Details/Italian', price: '₹4,500' },
    { src: stollen, title: 'Stollen', link: '/Details/Stollen', price: '₹2,200' },
    { src: king, title: 'King Cake', link: '/Details/King', price: '₹3,800' }
  ];

  return (
    <>
      <h2 className='title'>Today's Special</h2>
      <div className='section'>
        {cakes.slice(0, 3).map((cake, index) => (
          <div className='card' key={index}>
            <img className='card-image' src={cake.src} alt={cake.title} />
            <h2 className='card-title'>
              <Link to={cake.link} className='card-title'>{cake.title}</Link>
            </h2>
            <p className='price'>{cake.price}</p>
            <div className='button'>
              <button
                className='addtocart'
                onClick={() => addToCart(cake)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <h2 className='title'>Chocolate Cakes</h2>
      <div className='section'>
        {cakes.slice(3, 9).map((cake, index) => (
          <div className='card' key={index}>
            <img className='card-image' src={cake.src} alt={cake.title} />
            <h2 className='card-title'>
              <Link to={cake.link} className='card-title'>{cake.title}</Link>
            </h2>
            <p className='price'>{cake.price}</p>
            <div className='button'>
              <button
                className='addtocart'
                onClick={() => addToCart(cake)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <h2 className='title'>Fruit Cakes</h2>
      <div className='section'>
        {cakes.slice(9).map((cake, index) => (
          <div className='card' key={index}>
            <img className='card-image' src={cake.src} alt={cake.title} />
            <h2 className='card-title'>
              <Link to={cake.link} className='card-title'>{cake.title}</Link>
            </h2>
            <p className='price'>{cake.price}</p>
            <div className='button'>
              <button
                className='addtocart'
                onClick={() => addToCart(cake)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className='title'>Cart</h2>
      <div className='cart-section'>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <ul key={index} className='cart-item'>
                <img src={item.src} alt={item.title} className='cart-item-image' />
                <div className='cart-item-info'>
                  <h3>{item.title}</h3>
                  <p>{item.price}</p>
                </div>
              </ul>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </>
  );
}
