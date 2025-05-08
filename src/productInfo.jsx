const productInfo = [
    // Croissants & Crackers (formerly Croissant)
    {
        id: 1,
        Name: 'Classic Butter Croissant',
        Cat: 'Croissant',
        price: 180,
        Des: 'Flaky, buttery croissant made with French butter and slow-fermented dough',
        Deal: '',
        Image: '/Images/ac1.jpg'
    },
    {
        id: 2,
        Name: 'Almond Croissant',
        Cat: 'Croissant',
        price: 210,
        Des: 'Buttery croissant filled with almond cream and topped with sliced almonds',
        Deal: '',
        Image: '/Images/ac2.jpg'
    },
    {
        id: 3,
        Name: 'Chocolate Croissant',
        Cat: 'Croissant',
        price: 240,
        Des: 'Classic croissant with rich dark chocolate filling',
        Deal: '',
        Image: '/Images/ac3.webp'
    },
    {
        id: 4,
        Name: 'Sea Salt Crackers',
        Cat: 'Croissant',
        price: 180,
        Des: 'Artisan crackers with sea salt and rosemary',
        Deal: '',
        Image: '/Images/ac4.jpeg'
    },
    {
        id: 5,
        Name: 'Cheese & Herb Crackers',
        Cat: 'Croissant',
        price: 220,
        Des: 'Savory crackers with aged cheddar and thyme',
        Deal: '',
        Image: '/Images/ac5.webp'
    },
    {
        id: 6,
        Name: 'Multigrain Crackers',
        Cat: 'Croissant',
        price: 250,
        Des: 'Healthy crackers with five-grain blend and flax seeds',
        Deal: '',
        Image: '/Images/ac6.webp'
    },

    // Cupcakes & Macaroons (formerly Cupcake)
    {
        id: 7,
        Name: 'Vanilla Bean Cupcake',
        Cat: 'Cupcake',
        price: 150,
        Des: 'Moist vanilla cupcake with Madagascar vanilla bean frosting',
        Deal: 'Today',
        Image: '/Images/c1.jpg'
    },
    {
        id: 8,
        Name: 'StrawBerry Cupcake',
        Cat: 'Cupcake',
        price: 150,
        Des: 'Classic red velvet with cream cheese frosting',
        Deal: '',
        Image: '/Images/c2.webp'
    },
    {
        id: 9,
        Name: 'BlueBerry Cupcake',
        Cat: 'Cupcake',
        price: 160,
        Des: 'Rich chocolate cupcake with dark chocolate ganache',
        Deal: '',
        Image: '/Images/c3.jpg'
    },
    {
        id: 10,
        Name: 'French Macaron Assortment',
        Cat: 'Cupcake',
        price: 80,
        Des: '6-piece assortment of classic French macarons',
        Deal: '',
        Image: '/Images/m1.jpg'
    },
    {
        id: 11,
        Name: 'Pistachio Macarons',
        Cat: 'Cupcake',
        price: 90,
        Des: 'Delicate pistachio-flavored macarons with creamy filling',
        Deal: '',
        Image: '/Images/m2.jpg'
    },
    {
        id: 12,
        Name: 'Seasonal Macaron Box',
        Cat: 'Cupcake',
        price: 540,
        Des: '6-piece box of seasonal flavored macarons',
        Deal: '',
        Image: '/Images/m3.jpg'
    },

    // Cakes & More (formerly Home Appliances)
    {
        id: 13,
        Name: 'Classic Chocolate Cake',
        Cat: 'Cake',
        price: 560,
        Des: 'Rich chocolate cake with chocolate buttercream',
        Deal: 'Today',
        Image: '/Images/ca1.jpg'
    },
    {
        id: 14,
        Name: 'Strawberry Shortcake',
        Cat: 'Cake',
        price: 560,
        Des: 'Vanilla sponge with fresh strawberries and whipped cream',
        Deal: '',
        Image: '/Images/ca2.jpg'
    },
    {
        id: 15,
        Name: 'Carrot Cake',
        Cat: 'Cake',
        price: 500,
        Des: 'Moist carrot cake with cream cheese frosting',
        Deal: '',
        Image: '/Images/ca6.jpg'
    },
    {
        id: 16,
        Name: 'Cheesecake Sampler',
        Cat: 'Cake',
        price: 800,
        Des: 'Assortment of New York, berry, and chocolate cheesecakes',
        Deal: '',
        Image: '/Images/ca4.jpg'
    },
    {
        id: 17,
        Name: 'Tiramisu',
        Cat: 'Cake',
        price: 450,
        Des: 'Classic Italian dessert with espresso-soaked ladyfingers',
        Deal: '',
        Image: '/Images/ca5.jpg'
    },
    {
        id: 18,
        Name: 'Flourless Chocolate Torte',
        Cat: 'Cake',
        price: 430,
        Des: 'Rich gluten-free chocolate dessert with raspberry sauce',
        Deal: '',
        Image: '/Images/ca3.jpg'
    },


    // Brownies (formerly Kitchen Appliances)
    {
        id: 19,
        Name: 'Classic Fudge Brownie',
        Cat: 'Brownie',
        price: 100,
        Des: 'Dense, fudgy brownie with crisp crust',
        Deal: 'Today',
        Image: '/Images/br1.jpg'
    },
    {
        id: 21,
        Name: 'Salted Caramel Brownie',
        Cat: 'Brownie',
        price: 110,
        Des: 'Rich brownie with caramel swirl and sea salt',
        Deal: '',
        Image: '/Images/br3.jpg'
    },
    {
        id: 23,
        Name: 'Peanut Butter Brownie',
        Cat: 'Brownie',
        price: 110,
        Des: 'Chocolate brownie with peanut butter swirl',
        Deal: '',
        Image: '/Images/br5.jpg'
    },
    {
        id: 49,
        Name: 'Lick-A-Ble Brownie',
        Cat: 'Brownie',
        price: 110,
        Des: 'Fudge brownie with crunchy walnuts',
        Deal: '',
        Image: '/Images/br7.jpg'
    },
    {
        id: 50,
        Name: 'Brownie with Ice Cream',
        Cat: 'Brownie',
        price: 180,
        Des: 'Fudge brownie with crunchy walnuts',
        Deal: '',
        Image: '/Images/br8.jpg'
    },
    {
        id: 51,
        Name: 'Death By Chocolet Brownie',
        Cat: 'Brownie',
        price: 240,
        Des: 'Fudge brownie with crunchy walnuts',
        Deal: '',
        Image: '/Images/br9.jpg'
    },

    // Seasonal Specials (formerly PC/Laptops)
    {
        id: 25,
        Name: 'Glazed Donuts',
        Cat: 'Donuts',
        price: 190,
        Des: 'Moist pumpkin bread with warm spices',
        Deal: 'Today',
        Image: '/Images/s1.jpg'
    },
    {
        id: 26,
        Name: 'Fresh Mango Cream Pastry',
        Cat: 'Donuts',
        price: 80,
        Des: 'Creamy holiday cheesecake with nutmeg',
        Deal: '',
        Image: '/Images/s2.webp'
    },
    {
        id: 27,
        Name: 'Sweet Pie',
        Cat: 'Donuts',
        price: 380,
        Des: 'Dark and white chocolate with crushed peppermint',
        Deal: '',
        Image: '/Images/s3.jpg'
    },
    {
        id: 28,
        Name: 'Mango Tart',
        Cat: 'Donuts',
        price: 200,
        Des: 'Chocolate spheres with cocoa mix and marshmallows',
        Deal: '',
        Image: '/Images/s4.webp'
    },
    {
        id: 29,
        Name: 'Mango Bento Cheesecake',
        Cat: 'Donuts',
        price: 900,
        Des: 'Fresh apple muffins with cinnamon streusel',
        Deal: '',
        Image: '/Images/s5.webp'
    },
    {
        id: 30,
        Name: 'Sprinkler Cookies',
        Cat: 'Donuts',
        price: 300,
        Des: 'Complete kit to build and decorate your gingerbread house',
        Deal: '',
        Image: '/Images/s6.jpg'
    },

    // Breads (formerly Breads)
    {
        id: 31,
        Name: 'Sourdough Boule',
        Cat: 'Bread',
        price: 100,
        Des: 'Traditional sourdough with crisp crust',
        Deal: 'Today',
        Image: '/Images/bre1.jpg'
    },
    {
        id: 32,
        Name: 'Baguette',
        Cat: 'Bread',
        price: 100,
        Des: 'Classic French baguette with golden crust',
        Deal: '',
        Image: '/Images/br2.jpg'
    },
    {
        id: 33,
        Name: 'Whole Grain Loaf',
        Cat: 'Bread',
        price: 100,
        Des: 'Hearty multigrain bread with seeds',
        Deal: '',
        Image: '/Images/bre3.jpg'
    },
    {
        id: 34,
        Name: 'Cinnamon Raisin Bread',
        Cat: 'Bread',
        price: 110,
        Des: 'Sweet bread with cinnamon swirl and plump raisins',
        Deal: '',
        Image: '/Images/br4.jpg'
    },
    {
        id: 35,
        Name: 'Brioche Loaf',
        Cat: 'Bread',
        price: 114,
        Des: 'Buttery, enriched French bread',
        Deal: '',
        Image: '/Images/bre5.jpg'
    },
    {
        id: 36,
        Name: 'Focaccia',
        Cat: 'Bread',
        price: 152,
        Des: 'Olive oil-rich Italian flatbread with rosemary',
        Deal: 'Today',
        Image: '/Images/br6.jpg'
    },

    // Gifting (formerly Smart Home)
    {
        id: 37,
        Name: 'Tea Cake Loft',
        Cat: 'Gift_Hapmers',
        price: 1002,
        Des: 'Customizable cake box for special occasions',
        Deal: 'Today',
        Image: '/Images/g1.webp'
    },
    {
        id: 38,
        Name: 'Box Of Macarons',
        Cat: 'Gift_Hapmers',
        price: 600,
        Des: 'Assorted gourmet cookies in decorative tin',
        Deal: '',
        Image: '/Images/g2.jpg'
    },
    {
        id: 39,
        Name: 'Baker\'s Dozen Box',
        Cat: 'Gift_Hapmers',
        price: 1100,
        Des: '13 assorted pastries in gift packaging',
        Deal: '',
        Image: '/Images/g3.webp'
    },
    {
        id: 40,
        Name: 'Chocolate Lover\'s Hamper',
        Cat: 'Gift_Hapmers',
        price: 1500,
        Des: 'Assortment of chocolate desserts and treats',
        Deal: '',
        Image: '/Images/g4.webp'
    },
    {
        id: 41,
        Name: 'Chocolets Basket',
        Cat: 'Gift_Hapmers',
        price: 1700,
        Des: 'Assorted breakfast pastries with coffee',
        Deal: '',
        Image: '/Images/g5.webp'
    },
    {
        id: 42,
        Name: 'Custom Dessert Platter',
        Cat: 'Gift_Hapmers',
        price: 2000,
        Des: 'Personalized selection of mini desserts',
        Deal: 'Today',
        Image: '/Images/g6.webp'
    },

    //  Biscuits, Cookies & Crackers (formerly Biscuit)
    {
        id: 43,
        Name: 'Aachener Printen Biscuit',
        Cat: 'Biscuit',
        price: 600,
        Des: 'A type of German gingerbread from Aachen, made with spices like cinnamon and anise.',
        Deal: 'Today',
        Image: '/Images/bus1.jpg'
    },
    {
        id: 44,
        Name: 'Ginger Nut Biscuit',
        Cat: 'Biscuit',
        price: 239,
        Des: 'A hard, spicy biscuit flavored with ground ginger',
        Deal: '',
        Image: '/Images/bus2.webp'
    },
    {
        id: 45,
        Name: 'Chocolate Chip Cookies',
        Cat: 'Biscuit',
        price: 419,
        Des: 'A classic American cookie featuring chocolate chips embedded in a sweet dough.',
        Deal: '',
        Image: '/Images/co1.webp'
    },
    {
        id: 46,
        Name: 'Oatmeal Raisin Cookies',
        Cat: 'Biscuit',
        price: 599,
        Des: 'Soft, chewy cookies packed with oats and sweet raisins, often flavored with cinnamon.',
        Deal: '',
        Image: '/Images/co2.webp'
    },
    {
        id: 47,
        Name: 'Saltine Crackers',
        Cat: 'Biscuit',
        price: 329,
        Des: 'Square, light, and crispy, often topped with salt.',
        Deal: '',
        Image: '/Images/cra1.webp'
    },
    {
        id: 48,
        Name: 'Cheese Crackers',
        Cat: 'Biscuit',
        price: 329,
        Des: ' Infused with cheese flavor, these savory snacks are crunchy and satisfying.',
        Deal: '',
        Image: '/Images/cra2.webp'
    }
];
export default productInfo;