// Product.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './product.css';
import productInfo from './productInfo';
import { IoIosBasket } from "react-icons/io";

const Product = ({ cart }) => {
    const [data, setData] = useState(productInfo);
    const [page, setPage] = useState(1);
    const [activeCategory, setActiveCategory] = useState(null);
    const itemPerPage = 6;
    const totalPage = Math.ceil(data.length / itemPerPage);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const category = queryParams.get('category');
        
        if (category) {
            filterData(category);
            setActiveCategory(category);
        } else {
            setData(productInfo);
            setActiveCategory(null);
        }
    }, [location.search]);

    const filterData = (category) => {
        const filteredData = productInfo.filter((curElm) => {
            return curElm.Cat === category;
        });
        setData(filteredData);
        setPage(1);
        setActiveCategory(category);
    };

    const AllCat = () => {
        setData(productInfo);
        setPage(1);
        setActiveCategory(null);
    };

    const next = () => setPage(page + 1);
    const prev = () => setPage(page - 1);

    const handleProductClick = (product) => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div className='shop'>
            <div className='container'>
                <div className='category'>
                    <h3>Categories</h3>
                    <ul>
                        <li onClick={() => filterData('Croissant')}>Croissants</li>
                        <li onClick={() => filterData('Cupcake')}>Cupcakes</li>
                        <li onClick={() => filterData('Biscuit')}>Biscuits</li>
                        <li onClick={() => filterData('Bread')}>Breads</li>
                        <li onClick={() => filterData('Cake')}>Cakes</li>
                        <li onClick={() => filterData('Brownie')}>Brownies</li>
                        <li onClick={() => filterData('Donuts')}>Seasonals</li>
                        <li onClick={() => filterData('Gift_Hampers')}>Gift Hampers</li>
                    </ul>
                </div>
                <div className='product'>
                    <h2>Shop</h2>
                    <div className='product_container'>
                        <div className='product_grid'>
                            {data.slice((page - 1) * itemPerPage, page * itemPerPage).map((curElm) => (
                                <div 
                                    className='box' 
                                    key={curElm.id} 
                                    onClick={() => handleProductClick(curElm)}
                                >
                                    <div className='img_box'>
                                        {curElm.Deal === 'Today' && (
                                            <div className='deal_sign'>
                                                <h4 className='deal'>NEWLY LAUNCHED!</h4>
                                            </div>
                                        )}
                                        <div className='img'>
                                            <img src={curElm.Image} alt={curElm.Name} />
                                        </div>
                                        <div className='cart_sign'>
                                            <div className='icon' onClick={(e) => {
                                                e.stopPropagation();
                                                cart(curElm);
                                            }}>
                                                <IoIosBasket />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='detail'>
                                        <h4>{curElm.Name}</h4>
                                        <h5>₹ {curElm.price}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='btn'>
                            <button onClick={prev} disabled={page === 1}>Previous</button>
                            <button onClick={next} disabled={page === totalPage}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;