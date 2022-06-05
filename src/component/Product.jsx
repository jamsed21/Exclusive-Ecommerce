import React, {useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cardAdd } from '../redux';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Cart from './Cart';

const Product = () => {

    const addCart = () =>{
        <Cart />
    }
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(cardAdd(product));
    }

    useEffect(() => {
         const getProduct = async () => {
             setLoading(true);
             const response = await fetch(`https://fakestoreapi.com/products/${id}`);
             setProduct(await response.json());
             setLoading(false);
         }
         getProduct();
     }, []);

    const Loading = () => {
        return (
            <>
                <div className='col-md-6'>
                    <Skeleton height={400}/>
                </div>

                <div className='col-md-6' style={{lineHeight:2}}>
                    <Skeleton height={50} width={300}/>
                    <Skeleton height={75}/>
                    <Skeleton height={30} width={150}/>
                    <Skeleton height={55}/>
                    <Skeleton height={160}/>
                    <Skeleton height={60} width={110}/>
                    <Skeleton height={60} width={110} style={{marginLeft:8}}/>
                </div>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
            <div className="col-md-6">
                <img src={product.image} alt={product.title} height="400px" width="400px"/>
            </div>

            <div className='col-md-6'>
                <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                <h1 className='display-5'> {product.title}</h1>
                <p className='lead fw-bolder'>
                    Rating{product.rating && product.rating.rate}
                    <i className='fa fa-star'></i>
                </p>
                <h3 className='display-6 fw-bold my-4'> $ {product.price}</h3>
                <p className='lead'> { product.description}</p>
                <button className='btn btn-outline-dark px-4 py-2' onClick={() => addProduct(product)}> Add to Cart</button>
                <NavLink to="/cart" className='btn btn-dark ms-2 py-2 px-3' onClick={()=> addCart(Cart)}> Go to Cart</NavLink>
            </div>
            
            </>
        )
    }

  return (
    <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
    </div>
  )
  }

export default Product;