import React, { useEffect, useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { FaBirthdayCake } from "react-icons/fa";
import { IoIosBasket, IoMdTime } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { MdOutlineEmail } from "react-icons/md";
import Product_detail from './product_detail';
import { useNavigate } from 'react-router-dom';
import productInfo from './productInfo';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { GiHotMeal, GiWheat } from 'react-icons/gi';

const Home = ({ cart, getdetails, showDetail, setShowDetail, Detail }) => {
    // State for product categories
    const [Deal, setDeal] = useState([]);
    const [Cupcake, setCupcake] = useState([]);
    const [HomeApp, setHomeApp] = useState([]);
    const [kitchenApp, setKitchenApp] = useState([]);
    const [swiperRef, setSwiperRef] = useState(null);
    const navigate = useNavigate();

    // Category data
    const categories = [
        { img: 'category1.jpg', name: 'Croissants & Danishes', cat: 'Croissant' },
        { img: 'category02.jpg', name: 'Cupcakes & Macaroons', cat: 'Cupcake' },
        { img: 'category03.jpg', name: 'Biscuits, Cookies & Crackers', cat: 'Biscuit' },
        { img: 'category04.jpg', name: 'Cakes & More', cat: 'Cake' },
        { img: 'category05.jpg', name: 'Brownies', cat: 'Brownie' },
        { img: 'category06.jpg', name: 'Seasonal Specials', cat: 'Donuts' },
        { img: 'category07.jpg', name: 'Breads', cat: 'Bread' },
        { img: 'category08.jpg', name: 'Gifting', cat: 'Gift_Hapmers' }
    ];

    // About box features
    const features = [
        { icon: <GiHotMeal/>, title: "Freshly Baked Daily", text: "Oven-warm treats made with love every morning" },
        { icon: <FaBirthdayCake />, title: "Custom Celebration Cakes", text: "Personalized designs for your special occasions" },
        { icon: <IoMdTime />, title: "Same-Day Pickup", text: "Order by 10AM for afternoon pickup" },
        { icon: <GiWheat />, title: "Special Diet Options", text: "Gluten-free, vegan & allergy-friendly choices" }
    ];

    // Filter products on component mount
    useEffect(() => {
        filterProducts();
    }, []);

    const filterProducts = () => {
        setDeal(productInfo.filter(x => x.Deal === 'Today'));
        setCupcake(productInfo.filter(x => x.Cat === 'Cupcake'));
        setHomeApp(productInfo.filter(x => x.Cat === 'Cake'));
        setKitchenApp(productInfo.filter(x => x.Cat === 'Brownie'));
    };

    // Render product item
    const renderProduct = (product) => (
        <div className='box' key={product.id} onClick={() => getdetails(product)}>
            <div className='img_box'>
                {product.Deal === 'Today' && (
                    <div className='deal_sign'>
                        <h4 className='deal'>Deal!</h4>
                    </div>
                )}
                <div className='img'>
                    <img src={product.Image} alt={product.Name} />
                </div>
                <div className='cart_sign'>
                    <div className='icon' onClick={(e) => {
                        e.stopPropagation();
                        cart(product);
                    }}>
                        <IoIosBasket />
                    </div>
                </div>
            </div>
            <div className='detail'>
                <p>{product.Cat}</p>
                <h4>{product.Name}</h4>
                <h5>₹  {product.price}</h5>
            </div>
        </div>
    );

    return (
        <div className='home'>
            <div className='top_banner'>
                <div className='container'>
                    <div className='box'>
                        <div className='logo'>
                            <img src='Images/logo.png' alt='logo' />
                        </div>
                        <h2>The Finest Artisan Bakery in Town</h2>
                        <p>Every bite of our handcrafted pastries tells a story of tradition, quality, and passion.</p>
                        <Link to='/product' className='link'>Explore Our Treats</Link>
                    </div>
                </div>
            </div>

            {/* About Box Section */}
            <div className='about_box'>
                <div className='container'>
                    {features.map((feature, index) => (
                        <div className='box' key={index}>
                            <div className='logo'>{feature.icon}</div>
                            <div className='contant'>
                                <h3>{feature.title}</h3>
                                <p>{feature.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Product Category Section */}
            <div className='product_category'>
                <div className='container'>
                    <h2>Our Delicious Creations</h2>
                        <div className='category_box'>
                         {categories.map((category, index) => (
                            <Link to={`/product?category=${category.cat}`} className='box' key={index}>
                         <div className='img-container'>
                     <img src={`Images/${category.img}`} alt={category.name} className='category-img' />
                    <div className='overlay'></div>
                </div>
                <div className='detail'>
                    <h3>{category.name}→</h3>
                </div>
             </Link>
               ))}
            </div>
        </div>
    </div>

            
            {/* Today's Deal Section */}
            <div className='product_section'>
                <div className='container'>
                    <h3>Today's Fresh Bakes</h3>
                    <div className='product_container'>
                        {Deal.map(renderProduct)}
                    </div>
                </div>
            </div>

            {/* Audio & Video Products */}
            <div className='product_section'>
                <div className='container'>
                    <h3>Cupcakes & Macaroons</h3>
                    <div className='product_container'>
                        <Swiper
                            onSwiper={setSwiperRef}
                            slidesPerView={3}
                            centeredSlides={false}
                            spaceBetween={30}
                            pagination={{ type: 'fraction' }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {Cupcake.map((product) => (
                                <SwiperSlide key={product.id}>
                                    {renderProduct(product)}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            {/* Home Appliances Products */}
            <div className='product_section'>
                <div className='container'>
                    <h3>Cakes And More </h3>
                    <div className='product_container'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{ type: 'fraction' }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {HomeApp.map((product) => (
                                <SwiperSlide key={product.id}>
                                    {renderProduct(product)}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            {/* Mid Banner */}
            <div className='mid_banner_box'>
                <div className='banner_container'>
                    <img src='Images/banner01.png' alt="b" />
                </div>
            </div>

            {/* Kitchen Appliances Products */}
            <div className='product_section'>
                <div className='container'>
                    <h3>Brownies</h3>
                    <div className='product_container'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{ type: 'fraction' }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {kitchenApp.map((product) => (
                                <SwiperSlide key={product.id}>
                                    {renderProduct(product)}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            {/* Second Mid Banner */}
            <div className='mid_banner_box'>
                <div className='banner_container'>
                    <img src='Images/banner2.png' alt="banner" />
                </div>
            </div>

            <div className='promotional_banner'>  {/* Fixed typo */}
    <div className='container'>
        <div className='detail'>
            <h4>Dream It, We'll Bake It</h4>
            <h3>Custom Cake Special: Save 20% on First Order</h3>
            <p>
                Create your perfect celebration cake with our easy online designer. 
                Every cake is handcrafted with premium ingredients.
            </p>
            <Link to='/product' className='link'>Design Your Cake Now</Link>
        </div>
        <div className='img_box'>
            <img src='Images/pb01.png' alt="Custom cake promotional banner" />
        </div>
    </div>
</div>

            {/* Newsletter Section */}
            <div className='newslatter'>
                <div className='icon_box'>
                    <MdOutlineEmail />
                    <h3>Subscribe to our newsletter</h3>
                </div>
                <div className="conatiner">
                    <div className='info'>
                        <p>Sign up for all the latest news and special offers</p>
                    </div>
                    <div className='form'>
                        <div className='form_box'>
                            <input type='text' placeholder='Enter Your E-mail' />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Detail Modal */}
            {showDetail && (
                <div className='product_detail_page'>
                    <div className='container'>
                        <Product_detail setShowDetail={setShowDetail} Detail={Detail} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;