import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { callApi } from '../utilis/callApi';
import ProductsDetails from './ProductsDetails';
import { GB_CURRENCY } from '../utilis/constants';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductPage = () => {
    const {id} = useParams();
    const [product,setProduct] = useState(null);
    
    const [quantity, setQuantity] = useState("1");
    const dispatch = useDispatch();


    const getProduct =()=>{
        callApi(`data/products.json`)
        .then((productResults) =>{
            setProduct(productResults[id]);
                                                                    
        });

    }

    const addQuantityToProduct =()=>{
        setProduct((product.quantity
            = quantity))
            return product;
    };

    useEffect(()=>{
        getProduct();

    },[]);

 if(!product?.title) return<h1> Loading Product ...</h1>;



  return ( product&&(
    <div className='h-screen 
     bg-amazonCLone-background'>
        <div className='min-w-[1000px] max-w-[1500px] m-auto
         p-4'>
            <div className=' grid grid-cols-10 gap-2
            '>
                <div className='col-span-3 p-8 rounded bg-white m-auto'>
                    <img src= {`${product.image}`} alt=''/>
                </div>
                <div className='col-span-5 p-4 rounded
                 bg-white divide-y divide-gray-400'>
                <div className='mb-3'>
                    <ProductsDetails product={product} ratings={true}/>
                </div>
                <div className=' text-base xl:text-lg mt-3'>
                    {product.description}
                </div>
                </div>
                <div className='col-span-2 p-4 rounded bg-white'>
                    <div className='text-xl xl:text-2xl font-semibold text-red-700 text-right'>
                        {GB_CURRENCY.format(product.price)}</div>
                    <div className='text-right text-base xl:text-lg font-semibold text-gray-500'>
                    <span className=' line-through'>{GB_CURRENCY.format(product.oldPrice)}</span></div>
                    <div className='text-sm xl:text-base font-semibold mt-3 text-blue-500 '>FREE Returns</div>
                    <div className='text-sm xl:text-base font-semibold mt-1 text-blue-500'>FREE Delivery</div>
                    <div className='text-base xl:text-lg text-green-700  mt-1 font-semibold'>In Stock</div>
                    <div>Quantity:
                        <select onChange={(e)=> setQuantity(e.target.value)} className='p-2 bg-white rounded-md focus:border-indigo-600
                        '> 
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        </select>
                    </div>
                    <Link to="/checkout">
                    <button onClick={()=>dispatch(addToCart(addQuantityToProduct()))} className='
                     bg-yellow-400 w-full
                    text-xs xl:text-sm rounded p-3
                     hover:bg-yellow-500 mt-3'> Add to Cart
                     </button>
                    </Link>
                    

                </div>

            </div>

        </div>
       
    </div>
    )
  )
}

export default ProductPage;