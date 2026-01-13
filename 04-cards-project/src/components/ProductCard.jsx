import React from 'react'
import {Tag} from 'lucide-react'
import {Star} from 'lucide-react'


const ProductCard = (props) => {
  return (
    <div className='card2'>
        <div className="top2">
                <img src={props.image} alt='Image'></img>
        </div>

        <div className='center2'>
            <h4>{props.title}</h4>
            <div className="tagg">
                <h5><Tag size={20}/></h5>
                <h5>{props.category}</h5>
            </div>
            <div className="star">
                <h3><Star color="#f1f50f" /></h3>
                <h3>{props.rating}</h3>
            </div>
            <div className="h4">
                <h3>{props.stock}</h3>
            </div>
        </div>

        <div className="bottom2">
            <div>
                <h3>Price ${props.price}</h3>
            </div>
            <button>Add to Cart</button>
        </div>


    </div>
  )
}

export default ProductCard
