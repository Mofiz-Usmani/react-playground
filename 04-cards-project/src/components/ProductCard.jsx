import React from 'react'
import {Tag} from 'lucide-react'
import {Star} from 'lucide-react'

const ProductCard = () => {
  return (
    <div className='card2'>
        <div className="top2">
            <img src='https://i.pinimg.com/736x/99/21/76/992176e775eb7b233eec0de1ded5e633.jpg' alt='Image'></img>
        </div>

        <div className='center2'>
            <h4>Adidas Samba OG <span><Tag />Fashion</span></h4>
            <h3><Star color="#f1f50f" /></h3>
            <h2>In Stock</h2>
        </div>

        <div className="bottom2">
            <div>
                <h3>Price $100</h3>
            </div>
            <button>Add to Cart</button>
        </div>


    </div>
  )
}

export default ProductCard
