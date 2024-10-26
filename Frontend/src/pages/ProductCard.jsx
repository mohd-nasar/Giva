import React from 'react'
import { useNavigate } from 'react-router-dom';
import './home.css'

function ProductCard(props){
    const navigate = useNavigate();

     // Function to truncate the description to 20 words
  const truncateDescription = (text) => {
    const words = text.split(' ');
    return words.length > 23 ? words.slice(0, 23).join(' ') + '...' : text;
  };

  const handleBuyNowClick = () => {
    // Navigate to the product detail page
    navigate(`/product/${props.name}`);
  };

   return (
    <div className='product-card'>
    <h2 className='product-name'>{props.name}</h2>
    <p className='product-description'>{truncateDescription(props.description)}</p>
    <p className='product-price'>Price: ${props.price}</p>
    <p className='product-quantity'>Available: {props.quantity}</p>
    <button className='buy-button' onClick={handleBuyNowClick}>View More</button>
  </div>
   )
}

export default ProductCard