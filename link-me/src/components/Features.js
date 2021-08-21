import React from 'react'
import Navbar from './Navbar'
import '../components/Features.css'
import pic1 from '../images/features.png'
import pic3 from '../images/pic3.png'
import pic4 from '../images/pic4.png'
import pic5 from '../images/pic5.png'
import Footer from '../components/Footer'

const Features = () => {
    return (
        <div>
            <Navbar />
            
            <div className="container">
                <div className="row">
                <h1>Press Link &amp; Connect!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada, velit at ultricies molestie, leo mauris faucibus turpis, vel euismod nulla lorem vel mi. Nunc eget nisl sit amet risus suscipit molestie. </p>
                </div>

            <div className="row" style={{paddingTop: 20}}>
              
                <img className="border" src={pic1} />
                <p>Sign Up and send friend private invites</p>

            </div>

            <div className="row" style={{paddingTop: 20}}>
              
              <p>Locate events from anywhere in your remote area</p>
              <img className="border" src={pic4} />

          </div>

          <div className="row" style={{paddingTop: 20}}>
              
              <img className="border" src={pic5} />
              <p>Send private messages and locations to friends,</p>

          </div>
            </div>
        </div>
    )
}

export default Features
