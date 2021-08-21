import React, {useState, useEffect} from 'react'
import '../components/SignUp.css'
import {Auth, Hub} from 'aws-amplify'
import Main from '../components/mainPage'
import Navbar from './Navbar'

const initialFormState = {
    username: '', password: '', email: '', authCode: '', formType: 'signUp'
}


const SignUpPage = () => {
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
             <div className="container">
                  {
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
            }
         
           </div>
       </div>
    )
}

export default SignUpPage
