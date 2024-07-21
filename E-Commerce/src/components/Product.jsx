import React from 'react'
import '../css/Product.css';
import {useNavigate} from 'react-router-dom';

function Product({product}) {
    const {id, price,image, title, description}=product;
    const navigate= useNavigate();
  return (
    <div className='cards'>
<img className='image ' src={image} alt="" />
<div>
    <p style={{textAlign:'center', height:'87px', fontFamily:'Arial'}}>{title} </p>
    <h3 style={{textAlign:'center', color:'rgb(185 76 76)'}}>{price} ₺</h3>
</div>
<div className='flex-row'>
    <button className='detail-button' onClick={()=> navigate("/product-details/"+id)}>Detayına Git</button>
</div>
    </div>
  )
}

export default Product