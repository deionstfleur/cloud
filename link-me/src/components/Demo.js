import React from 'react'
import '../components/Demo.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'

const city = [
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2l0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
]

const Demo = () => {
    return (
        <div>
            <Link to="/" className="arrow">
            <ArrowBackIcon />
            </Link>
            <div className="location">
                <h1>Choose Location</h1>
                <div className="row flex">
                    <Link to="/demo">
                         <img src={city} style={{width:'80%'}} className="city" />
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Demo
