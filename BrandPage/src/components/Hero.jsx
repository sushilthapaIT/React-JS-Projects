

const Hero = () => {
    return(
        <>
            <main className="hero container">
                <div className="hero-content">
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem natus, exercitationem ipsum rerum, quod ea porro magni veritatis quos amet reiciendis dolorum sapiente a veniam, alias minima! Odit, ipsam beatae!
                    </p>

                    <div className="hero-button">
                        <button>Shop Now</button>
                        <button className="secondary-btn">Category</button>
                    </div>

                    <div className="shop">
                        <p>Also Available On</p>
                    </div>

                    <div className="brand-icon">
                        <img src="./images/amazon.png" alt="amazon-logo"/>
                        <img src="./images/flipkart.png" alt="flipkart" />
                    </div>
                </div>

                <div className="hero-image">
                    <img src="./images/hero-image.png" alt="brand-image"/>
                </div>
            </main>
        </>
    );
}

export default Hero