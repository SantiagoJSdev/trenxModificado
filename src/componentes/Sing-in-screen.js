import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { startGoogleLogin, startLoginEmailPassword } from '../action/auth';


import { useForm } from '../hooks/useForm';


import '../styles/styles-sing-in.css'

export const SingInScreen = ({history}) => {

    const dispatch = useDispatch();
    const {uid} = useSelector( state => state.auth );

    const [formValues, handleInputChange] = useForm({
        email:"",
        password:""
    })

    const {email, password} = formValues;


const handleSubmit =(e) =>{
    e.preventDefault()
    dispatch(startLoginEmailPassword(email,password))
    console.log(email, password)
}

const handleGoogle = () => {

    console.log('click')

    dispatch(startGoogleLogin())
}

if (uid) {
    history.push('/');
     } 










    return (
        <> 
            <div className ="container-sing-in">

                <div className="parte1">
                    <div className="container-img">
                     <img className="img2" src = {"../img/logo.png"} alt="img"/> 
                     </div>
                </div>

                <div className="parte2">

                <button className="Btn-sing-in btn-home"><a href="/">HOME</a></button>
                    <div className="caja-3">
                    
                        <p>Not a member? <a href="/auth/register"> Sign up now</a></p>
                    </div>


                    <div className="caja-2">

                        <div className="heading">
                                                <div 
                                                onClick={handleGoogle}
                                                className="Btn-sing-in">
                                                        <div 
                                                        className="google-btn"
                                                        >
                                                        <div className="google-icon-wrapper">
                                                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                                        </div>
                                                        <p className="btn-text">
                                                            <b>Sign in with google</b>
                                                        </p>
                                                        </div>
                                                        </div>
                            <button className="Btn-sing-in"></button>
                        </div>

                        <p className="or">OR</p>
                        <form 
                        onSubmit={handleSubmit}
                        >
                        <div className="box">
                        <p>Email</p>
                        <div>
                            <input

                               type="text"
                               placeholder="Enter Your Email"
                               name="email"
                               autoComplete="off"
                               value={email}
                               onChange={handleInputChange}
                        
                            />
                        </div>
                    </div>

                    <div className="box">
                        <p>Password</p>
                        <div>
                            <input

                               type="password"
                               placeholder="Enter Your Password"
                               name="password"
                               autoComplete="off"
                               value={password}
                               onChange={handleInputChange}
                        
                            />
                        </div>
                    </div>

                    <button 
                    type="submit"
                    className="Btn-sing-in btn-login">Login</button>

                    </form>


                    </div>
                </div>

            </div>
        </>
    )
}
