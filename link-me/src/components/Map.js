import React from 'react'
import {Link} from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import GoogleMapReact from 'google-map-react';


export const Map = () => {
    
    return (
        
        <div>
         <Link to="/Location" className="arrow">
            <ArrowBackIcon />
            
        </Link>

        <GoogleMapReact>

        </GoogleMapReact>
            
        </div>
    )
}

export default Map
