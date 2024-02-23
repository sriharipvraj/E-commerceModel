import React from 'react'
import "../Styling/Homepage.css"
import img1 from "../Images/gnc1.webp"
import img2 from "../Images/mb1.webp"
import img3 from "../Images/gnc2.webp"
import img4 from "../Images/mb2.webp"
import b1 from "../Images/brand1.png"
import b2 from "../Images/brand2.webp"
import b3 from "../Images/brand3.webp"
import b4 from "../Images/brand4.webp"
import b5 from "../Images/brand5.webp"
import b6 from "../Images/brand6.webp"
import b7 from "../Images/brand7.webp"
import b8 from "../Images/brand8.webp"
import b9 from "../Images/brand9.webp"
import b10 from "../Images/brand10.webp"
import b11 from "../Images/brand11.webp"
import b12 from "../Images/brand12.webp"
import certified from "../Images/certified.jpg"
import { Carousel, Col, Row } from 'react-bootstrap';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


function Homepage() {
  return (
    <div>
        <div className='Carousal' responsive={responsive}>
        <Carousel>
      <Carousel.Item>
       <img src={img1}  className='images'></img>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2}  className='images'></img>
       
      </Carousel.Item>
      <Carousel.Item >
       <img src={img3} className='images'></img>
      </Carousel.Item>
      <Carousel.Item>
       <img src={img4} className='images'></img>
      </Carousel.Item>
    </Carousel>
        </div>

        <div className='definesYou'>
          <h1 className='ShopByGoal'>WHAT DEFINES YOU BEST?</h1>
          <div className='defineOptions'>
            <Row className='optionRow'>
              <Col className='optionCol'>
            <button className='optionButton'> NEW TO FITNESS</button>
            
            
            <button style={{marginLeft:'100px'}} className='optionButton'>FREQUENT GYM GOER</button>
            </Col>
            
            </Row>
            <Row className='optionRow'>
              <Col className='optionCol'>
            <button className='optionButton'>HARDCORE GYM FREAK</button>
            
            <button style={{marginLeft:'100px'}} className='optionButton'>ROOKIE ATHLETES</button>
            </Col>
            
            </Row>

            <Row className='optionRow'>
              <Col className='optionCol'>
            <button className='optionButton'>HARDCORE ATHLETES</button>
            
            <button style={{marginLeft:'100px'}} className='optionButton'>VEGAN LOVERS</button>
            </Col>
            
            </Row>

          </div>

        </div>

        <div className='goal'>
          <h1 className='ShopByGoal'>SHOP BY GOAL</h1>
          <Row  className='rows'>
            <Col>
            <h2 className='shopOptions'> BODYBUILDING</h2>
            </Col>
            <Col>
            <button className='sbtn'>BCAA</button>
            </Col>
            <Col>
            <button className='sbtn'>CREATINE</button>
            </Col>
            <Col>
            <button className='sbtn'>WHEY PROTEINN</button>
            </Col>
            <Col>
            <button className='sbtn'>FISH OIL</button>
            </Col>

            
          </Row >
          <Row className='rows'>
            <Col>
            <h2 className='shopOptions'>WEIGHT LOSS</h2>
            </Col>
            <Col>
            
            <button className='sbtn'>FAT BURNER</button>
            </Col>
            <Col>
            <button className='sbtn'>L-CARNITINE</button>
            </Col>
            <Col>
            <button className='sbtn'>CLA</button>
            </Col>
            <Col>
            <button className='sbtn'>GARCINIA</button>
            </Col>
          </Row>

          <Row className='rows'>
            <Col>
            <h2 className='shopOptions'>WELLNESS</h2>
            </Col>
            <Col>
            
            <button className='sbtn'>VITAMIN D</button>
            </Col>
            <Col>
            <button className='sbtn'>MULTIVITAMINS</button>
            </Col>
            <Col>
            <button className='sbtn'>IMMUNITY</button>
            </Col>
            <Col>
            <button className='sbtn'>DIGETION</button>
            </Col>
          </Row>

          

        </div>

        <div>
          <h1 className='popularBrandHeading'>POPULAR BRANDS</h1>

          <div className='brands'>
            <Row className='brow1'>
              <Col>
          <img src={b1} className='bimg'/>
          </Col>
          <Col>

          <img src={b2} className='bimg'/>
          </Col>
          <Col>
          <img src={b3} className='bimg'/>
          </Col>
          <Col>
          <img src={b4} className='bimg'/>
          </Col>
          <Col>
          <img src={b5} className='bimg'/>
          </Col>
          <Col>
          <img src={b6} className='bimg'/>
          </Col>
          </Row>
          <Row>
            <Col>
          <img src={b7} className='bimg'/>
          </Col>
          <Col>
          <img src={b8} className='bimg'/>
          </Col>
          <Col>
          <img src={b9} className='bimg'/>
          </Col>
          <Col>
          <img src={b10} className='bimg'/>
          </Col>
          <Col>
          <img src={b11} className='bimg'/>
          </Col>
          <Col>
          <img src={b12} className='bimg'/>
          </Col>
          </Row>
          </div>

          <div>
          <img className='certified' src={certified}></img>
        </div>

          <div className='about'>
            <h2 className='aboutHeading'>Authentic Online Supplement Store in India for Whey Protein, Health, Nutrition & Bodybuilding</h2>
            <p>Nutrabay is India’s #1 trusted and fastest growing nutrition and online supplement store with a wide range of products for health, wellness, fitness & bodybuilding, making them easy to purchase & accessible all over India. </p>
            <h5 className='ourspeciality'>Our Speciality</h5>
            <ul>
              <li>You get all products delivered directly from us, without any middlemen or 3rd party sellers. Additionally, we are certified by all the brands or their official Indian supplement importers for authentic supplements. This ensures that you always get an authentic supplement as the entire supply chain is controlled by us.</li>
              <li>Customer satisfaction and happiness is our number 1 priority, we deliver this by ensuring a great user experience, fast delivery, and high-quality products.</li>
              <li>Nutrabay is not only a multi-brand store with many top International and Indian brands but since April 2019, we have launched our own supplement range with a huge level of success and customer appreciation.</li>
              <li>Committed to providing you genuine products at price points that are fair and affordable by all. We often run a lot of freebie offers with top products like samples, gym gloves, shakers, gym bags, t-shirts and more to keep customers satisfied.</li>
              <li>A company run by young and enthusiastic people whose mission is to help India become a fitter and stronger nation and are committed to bringing quality products to support this cause.</li>

            </ul>
            <h5 className='ourspeciality'>Products we offer</h5>
            <p>We offer products for Bodybuilding, Weight Loss, Wellness and Accessories. Our best seller products and categories include Whey Proteins, Mass Gainers, Vitamins, BCAAs, Creatine, Pre Workouts. We list and fulfil all popular and top supplement brands in India. Our best seller brands include Nutrabay, Optimum Nutrition, Ultimate Nutrition, MuscleBlaze, Dymatize, GNC, Universal Nutrition, GAT Sport, MuscleTech, MusclePharm and many more.</p>
            <h5 className='ourspeciality'>Authenticity Guarantee</h5>
            <p>Nutrabay is the only online supplement store in India that can truly guarantee authenticity. When purchasing from our website, you never have to worry about getting a harmful substance and be 100% confident on what you get.</p>

          </div>

          
        </div>
    </div>
  )
}

export default Homepage