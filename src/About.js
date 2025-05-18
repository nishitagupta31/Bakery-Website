import React from 'react';
import './about.css';

const About = () => {
    const teamMembers = [
        {
            id: 1,
            imgSrc: "/Images/owner1.jpg",
            name: "Vishal Jalani",
            role: "Founder",
            bio: "Started the bakery 15 years ago from a small home kitchen with just a basic oven and a dream.",
            funFact: "Can decorate a three-tier cake blindfolded!"
        },
        {
            id: 2,
            imgSrc: "/Images/owner2.png",
            name: "Mukesh Puri",
            role: "Production Head",
            bio: "Ensures every baked good meets the highest standards of taste and presentation. Former pastry chef at a Michelin-starred restaurant.",
            funFact: "Holds a record for the fastest croissant-making (100 in under an hour)!"
        },
        {
            id: 3,
            imgSrc: "/Images/owner3.png",
            name: "Sushant Khandelwal",
            role: "Business Development Head",
            bio: "A people-first leader who ensures every customer leaves with a smile. Known for turning first-time buyers into lifelong patrons.",
            funFact: "Once hand-delivered a wedding cake at midnight when the delivery van broke down!"
        }
    ];

    return (
        
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="hero-image">
                    <img src="/Images/about.jpg" alt="Bakery team preparing delicious pastries" />
                </div>
                <div className="hero-content">
                    <h1>More Than Just a Bakery</h1>
                    <p className="tagline">Freshly Baked Happiness, Delivered with Love!</p>
                </div>
            </section>

            <div className="section-spacer"></div>

            {/* Introduction Section */}
            <section className="intro-section">
                <div className="container">
                    <h2>Our Story</h2>
                    <div className="story-grid">
                    <div class="mission">
    <div class="mission-card">
        <h3>Our Mission</h3>
        <div class="mission-content">
            <p>At Trilicious, we bake more than just desserts—we bake change. As a certified B Corporation, we blend purpose with profit through:</p>
            
            <ul class="mission-list">
                <li class="mission-item">
                    <div class="mission-icon">🍞</div>
                    <div class="mission-text">Creating Inclusive Jobs: Prioritizing hiring from underrepresented communities, including at-risk youth and differently-abled individuals.</div>
                </li>
                <li class="mission-item">
                    <div class="mission-icon">🌱</div>
                    <div class="mission-text">Sustainable Sourcing: Partnering with local farmers for organic ingredients to reduce our carbon footprint.</div>
                </li>
                <li class="mission-item">
                    <div class="mission-icon">🔍</div>
                    <div class="mission-text">Transparent Practices: Sharing our ingredient origins, pricing breakdowns, and impact reports to build trust.</div>
                </li>
            </ul>
            
            <p class="mission-closing">Every bite supports our vision: a world where businesses nourish both people and the planet.</p>
        </div>
    </div>
    
    <div class="story-card">
        <h3>How It Started</h3>
        <div class="story-content">
            <p class="story-intro">From a Home Kitchen to a Community Staple</p>
            <p class="justified-text">
  Trilicious began in 2018 as a passion project in <b>Aayushree's</b> tiny apartment kitchen. Frustrated by the lack of preservative-free indulgences that didn't compromise on flavor, they started baking for friends—word spread, and demand grew.
</p>

            
            <div class="milestones">
                <div class="milestone">
                    <div class="year">2019</div>
                    <div class="event">Launched at a local farmers' market, selling out of signature sea salt caramel brownies within hours.</div>
                </div>
                <div class="milestone">
                    <div class="year">2021</div>
                    <div class="event">Opened our first brick-and-mortar store, with a "pay-what-you-can" shelf for those in need.</div>
                </div>
                <div class="milestone">
                    <div class="year">2023</div>
                    <div class="event">Earned B Corp certification and expanded to online orders, making our treats accessible nationwide.</div>
                </div>
            </div>
        </div>
    </div>
</div>
                    </div>
                </div>
            </section>

            <div className="section-spacer"></div>

            {/* What Makes Us Different Section */}
            <section className="difference-section">
                <div className="container">
                    <h2>Why Choose Trilicious?</h2>
                    <div className="difference-grid">
                        <div className="difference-card">
                            <div className="icon">🍰</div>
                            <h3>Honest Recommendations</h3>
                            <p>
                                No upsells, just real advice. Our bakers help you pick the perfect treat—whether it's for a party, gift, or just because!
                            </p>
                        </div>
                        <div className="difference-card">
                            <div className="icon">🛡️</div>
                            <h3>Freshness Guarantee</h3>
                            <p>
                                Every bite is backed by our promise: If it's not fresh, we'll replace it. No questions asked.
                            </p>
                        </div>
                        <div className="difference-card">
                            <div className="icon">🚚</div>
                            <h3>Same-Day Delivery</h3>
                            <p>
                                Order by noon for fresh, oven-warm goodies delivered before your event (or snack time)!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-spacer"></div>

            {/* Team Section */}
            <section className="team-section">
                <div className="container">
                    <h2>Meet The Team</h2>
                    <p className="team-subhead">
                        We're a group of passionate bakers who put love into every creation.
                    </p>
                    <div className="team-grid">
                        {teamMembers.map(member => (
                            <div className="team-card" key={member.id}>
                                <img 
                                    className="team-image"
                                    src={member.imgSrc} 
                                    alt={member.name} 
                                />
                                <h3>{member.name}</h3>
                                <p className="role">{member.role}</p>
                                <p className="bio">{member.bio}</p>
                                <p className="fun-fact">
                                    <strong>Fun fact:</strong> {member.funFact}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="section-spacer"></div>

            {/* Customer Love Section */}
            <section className="testimonial-section">
                <div className="container">
                    <h2>Why Customers Love Us</h2>
                    <div className="testimonial-grid">
                        <div className="testimonial">
                            <div className="quote">"</div>
                            <p className="text">
                                Trilicious saved my wedding day when another bakery canceled last minute. 
                                Their team worked overnight to create our dream cake!
                            </p>
                            <p className="author">- Priya K., Bride</p>
                        </div>
                        <div className="testimonial">
                            <div className="quote">"</div>
                            <p className="text">
                            Trilicious came to the rescue when my daughter's birthday cake got damaged in transit. They whipped up an even more beautiful design in just 2 hours—complete with her favorite princess theme! The smile on her face was priceless.
                            </p>
                            <p className="author">Neha S., Grateful Mom</p>
                        </div>
                        <div className="testimonial">
                            <div className="quote">"</div>
                            <p className="text">
                            I ordered cupcakes for my corporate event last-minute, and not only did Trilicious deliver on time, but they added custom logo toppers at no extra charge! Clients couldn't stop raving about them.
                            </p>
                            <p className="author">-Rajiv M., Event Planner</p>
                        </div>
                        <div className="testimonial">
                            <div className="quote">"</div>
                            <p className="text">
                                I order their gluten-free brownies every week - you'd never know they're allergen-friendly! 
                                Absolute perfection.
                            </p>
                            <p className="author">- Rahul T., Regular Customer</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-spacer"></div>

            {/* Stats Section */}
            <div className="stats">
                <div className="stat-item">
                    <h3>10,000+</h3>
                    <p>Happy Customers</p>
                </div>
                <div className="stat-item">
                    <h3>4.4/5</h3>
                    <p>Average Rating</p>
                </div>
                <div className="stat-item">
                    <h3>50+</h3>
                    <p>Weddings Catered</p>
                </div>
            </div>

            <div className="section-spacer"></div>
        </div>
    );
};

export default About;