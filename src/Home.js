import React from 'react'
import "./Home.css"
import Product from './Product'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
        <Carousel
          showThumbs={false}
          infiniteLoop
          showArrows={false}
          interval={2000}
          className="home__image"
          autoPlay
          transitionTime={1500}
          stopOnHover={false}
          swipeable={true}
          emulateTouch
          showIndicators={false}
          showStatus={false}
          
        >
                <div> 
                    <img src="https://m.media-amazon.com/images/I/71Z0Z8dGwWL._SX3000_.jpg" />
                    
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/71KChS6ZVdL._SX3000_.jpg" />
                    
                  </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/71OHWlch4cL._SX3000_.jpg" />
                   
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
                   
                </div>
            </Carousel>
           

            {/* <img 
            className='home__image'
            src='https://m.media-amazon.com/images/I/71Z0Z8dGwWL._SX3000_.jpg'/> */}
            
            <div className='home__row'> 
            <Product
            id="123456"
            title="        Bose SoundLink Revolve (Series II) Portable Bluetooth Speaker – Wireless Water-Resistant Speaker wif 360° Sound, Silver "
            price={219.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71g3dvFN4xL._AC_SS260_.jpg"
            />
            <Product
             id="123456"
             title="Barbie Dreamhouse (3.75-ft) 3-Story Dollhouse Playset with Pool & Slide, Party Room, Elevator, Puppy Play Area, Customizable Lights & Sounds, 75+...
             "
             price={179.99}
             rating={5}
             image="https://m.media-amazon.com/images/I/81q9LI10A6L._AC_SL1500_.jpg/XCM_Manual_1365288_1881901_4103703_US_us_gw_pc_single_category_card_2x_us_en_758x608_2X_en_US._SY608_CB641689811_.jpg"
             />
             <Product
             id="123456"
             title="Amazon Basics Ergonomic Adjustable High-Back Mesh Chair with Flip-Up Arms and Headrest Contoured Mesh Seat - Black "
             price={163.99}
             rating={5}
             image="https://m.media-amazon.com/images/I/81pVe8Dl7KS._AC_SL1500_.jpg" 
             />
          
          </div>
          <div className='home__row'> 
            <Product
             id="123456"
             title="(Renewed) Apple iPhone 11 Pro Max, US Version, 64GB, Silver - Unlocked"
             price={524.95}
             rating={4}
             image="https://m.media-amazon.com/images/I/717jfWIn6tL._AC_SY350_.jpg"
           />
            <Product
             id="123456"
             title=" All-New Toshiba 55-inch Class M550 Series LED 4K UHD Smart Fire TV with Hands-Free with Alexa (55M550KU, 2021 Model)       "
             price={497.99}
             rating={5}
             image="https://images-na.ssl-images-amazon.com/images/I/81MZvjRyWXL._AC_UL400_SR300,400_.jpg"
             />
          <Product
          id="123456"
          title="Brajttt 2.5 Inch Ceramic Succulent Planter Pot with Drainage,Planting Pot Flower Pots,Small Planter Pots for Mini Plant Ceramic Flowing Glaze Base Serial..."
          price={13.99}
          rating={5}
                    image="https://m.media-amazon.com/images/I/71woFMJfiGL._AC_SL1500_.jpg"
          />
          </div>
          <div className='home__row'> 
            <Product
             id="123456"
             title="Echo Show 5 (2nd Gen, 2021 release) | Smart display wif Alexa and 2 MP camera | Charcoal "
             price={149.99}
             rating={5}
             image="https://m.media-amazon.com/images/I/51iobpaEM5S._AC_SY400_.jpg"
             />
            <Product
             id="123456"
             title="Laptop Bag for Women, 15.6 inch Slim Computer Briefcase Sleeve Case, Lightweight Cute Girls Messenger Shoulder Carrying Work Bag with Rfid Pocket for Office Travel School Fits 15.6 inch Notebook, Pink
             "
             price={33.99}
             rating={5}
             image="https://m.media-amazon.com/images/I/71o2qbF0v+L._AC_SX679_.jpg"
             />
          </div>
 
          </div>
          </div>
          
         
         

  )
}

export default Home