import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import DeckIcon from '@material-ui/icons/Deck';
import Button from "@material-ui/core/Button"
import '../components/Homepage.css'
import hp from '../images/hp-image.png'
import {Auth, Hub} from 'aws-amplify'
import Main from '../components/mainPage'
import {Link} from 'react-router-dom'
import Footer from './Footer'

const initialFormState = {
    username: '', password: '', email: '', authCode: '', formType: 'signUp'
}

const Homepage = () => {
    const [formState, updateFormState] = useState(initialFormState)
    const [user, updateUser] = useState(null)
    useEffect(() => {
        checkUser()
        setAuthListener()
    }, [])
async function setAuthListener() {
    Hub.listen('auth', (data) => {
        switch (data.payload.event) {
            case 'signOut':
                console.log('data from event: ', data)
                updateFormState(() => ({...formState, formType: "signUp"}))
                break;
            default:
                break;
        }

    })
}
    async function checkUser() {
        try {
            const user = await Auth.currentAuthenticatedUser()
            console.log('user', user)
            updateUser(user)
        } catch (err) {
            updateFormState(() => ({...formState, formType: "signedIn"}))
        }
    }
    function onChange(e) {
        e.persist()
        updateFormState(() => ({...formState, [e.target.name]: e.target.value}))
    }
    const {formType } = formState
    async function signUp() {
        const { username, email, password } = formState
        await Auth.signUp({username, password, attributes: { email }})
        updateFormState(() => ({...formState, formType: "confirmSignUp"}))

    }
    

    async function confirmSignUp() {
        const { username, authCode} = formState
        await Auth.confirmSignUp(username, authCode)
        updateFormState(() => ({...formState, formType: "signIn"}))

    }
    async function signIn() {
        const { username, password} = formState
        await Auth.signIn(username, password)
        updateFormState(() => ({...formState, formType: "signedIn"}))

    }
    return (
        <div>
            <Navbar />
            {/* {
                formType === 'signUp' && (
                    <div>
                            <input name="username" onChange={onChange} placeholder="username"  />
                            <input name="password" type="password" onChange={onChange} placeholder="password"  />
                            <input name="email" onChange={onChange} placeholder="email"  />
                            <button onClick={signUp}>Sign Up</button>
                            <button onClick={() => updateFormState(() => ({...formState, formType: "signIn"}))}>Sign In</button>
                        </div>
                )
            }


{
                formType === 'confirmSignUp' && (
                    <div>
                            <input name="authCode"  onChange={onChange} placeholder="Confirmation Code"  />
                            <button onClick={confirmSignUp}> Confirm Sign Up</button>
                        </div>
                )
            }

{
                formType === 'signIn' && (
                    <div>
                            <input name="username" onChange={onChange} placeholder="username"  />
                            <input name="password" type="password" onChange={onChange} placeholder="password"  />
                            <button onClick={signIn}>Sign In</button>
                        </div>
                )
            }

            {
                formType === 'signedIn' && (
                    <div>
                    <Main /> 
                </div>
                )
            } */}

            <div className="main-title" style={{left: '10%', position: 'absolute'}}>
                <h1 style={{maxWidth: 223, fontSize: 68}}>A safer way to connect</h1>
                <p className="dt" style={{maxWidth: '60%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit nibh sit amet ex laoreet,</p>
            <Link to="/Location" style={{textDecoration: 'none'}}>
                 <Button style={{left: '1%'}}color="primary" variant="contained">Try Demo</Button>  
            </Link>
            </div>
            <img src={hp} style={{float: 'right', width: '50%', marginTop: -45}} />

            
            <Footer />
        </div>
    )
}

export default Homepage
