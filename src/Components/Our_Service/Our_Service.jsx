import React from 'react'
import './Our_Service.css'
import { assets } from '../../assets/assets'

const Our_Service = () => {
  return (
    <section className='service_section'>
        <div className="main-heading">
                    <h2>Experience The Benefits Simplified With Our Service</h2>
                    <p>
                        At love home, we redefine conveyancing by prioritizing
                        simplicity and convenience.
                    </p>
                </div>
        <div className="main_1">
            <div className="img_service" data-aos="fade-right">
                <img src={assets.service_1} alt="" srcset="" />
            </div>
            <div className="details_1" data-aos="fade-up">
                <h3 className='white-text'>Benefits 1:-</h3>
                <h3 className='text_2'>Seamless Digital Experience:</h3>
                <p>Experience the ease of digital convenience with transparent, 24/7 access to documents, updates, and messages. Whether you're at home or on the move, all content is seamlessly delivered to any mobile device, keeping you informed every step of the way.</p>
            </div>
        </div>
        <  hr className='h_r'/>
        <div className="main_1">
            <div className="details_2" data-aos="fade-right">
                <h3 className='white-text'>Benefits 2:-</h3>
                <h3 className='text_2'>Stress-Free Communication:</h3>
                <p>Say goodbye to stress with our streamlined communication process. All correspondence is securely delivered to you, your agent, and your broker in one online space hosted by your dedicated solicitor. This means you can communicate directly with your qualified property lawyer, ensuring clarity and efficiency throughout the transaction.</p>
            </div>
            <div className="img_service_2" data-aos="fade-up">
                <img src={assets.service_2} alt="" srcset="" />
            </div>
            </div>
            <  hr className='h_r'/>
        <div className="main_1">
            <div className="img_service" data-aos="fade-right">
                < img src={assets.service_3}  alt="" srcset="" />
            </div>
            <div className="details_1" data-aos="fade-up">
                <h3 className='white-text'>Benefits 3:-</h3>
                <h3 className='text_2'>Trusted and Proven:</h3>
                <p>At the core of our service is trust and reliability. We prioritize our customers and handle property deals with ease, speed, and confidence, ensuring a smooth and successful experience every time.Discover the difference with love home, where conveyancing is made simple.</p>
            </div>
        
        </div>
    </section>
  )
}

export default Our_Service