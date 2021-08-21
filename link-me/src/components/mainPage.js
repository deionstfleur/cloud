import React from 'react'
import {Auth} from 'aws-amplify'

const mainPage = () => {
    return (
        <div>
            You made it
            <button onClick={() => Auth.signOut()}> Sign Out</button>
        </div>
    )
}

export default mainPage
