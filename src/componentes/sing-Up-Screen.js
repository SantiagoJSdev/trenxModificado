
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startGoogleLogin, startRegisterWithEmailPasswordName } from '../action/auth';
// import { useDispatch, useSelector } from 'react-redux';
// import { startGoogleLogin, startRegisterWithEmailPasswordName } from '../action/auth';
// import { uiError, uiRemoveError } from '../action/uiError';
import { useForm } from '../hooks/useForm';
import '../styles/styles-sing-up.css'
import validator from 'validator';
import { uiError, uiRemoveError } from '../action/uiError';


export const SingUpScreen = ({history}) => {
    const state = useSelector(state=>state)
    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        name:"",
        email:"",
        password:""
    })

    const {name, email, password} = formValues;


const handleSubmit =(e) =>{
    e.preventDefault()

    if (isFormVlaid()) {
    dispatch(startRegisterWithEmailPasswordName(email,password,name))
    }
}


const handleGoogle = () => {
    dispatch(startGoogleLogin())
}

const isFormVlaid =()=>{

    if (name.trim().length === 0) {
        dispatch(uiError('name requerido'))
        
        return false
    } else if ( !validator.isEmail(email)){
        dispatch(uiError('email requerido'))
        
        return false
    } else if ( password.length <5){ 
    dispatch(uiError('Verifique password '))
    
    return false
    }
    dispatch(uiRemoveError())
    return true

}



    if (state.auth.uid) {
    history.push('/');
     } 







    return (
        <> 
            <div className ="container-sing-up">

                <div className="parte1-1">
                    <div className="container-img">
                     <img className="img2" src = {"../img/logo.png"} alt="img"/> 
                     </div>
                </div>

                <div className="parte2-2">
                <button className="Btn-sing-in btn-home-1"><a href="/">HOME</a></button>

                    <div className="caja-3-3">
                    
                        <p>Already a member? <a href="/auth/login">  Sign In </a></p>
                    </div>


                    <div className="caja-2-2">

                        <div className="heading-1">
                                                <div onClick={handleGoogle} className="Btn-sing-up">
                                                        <div 
                                                        className="google-btn-1"
                                                        >
                                                        <div className="google-icon-wrapper-1">
                                                            <img className="google-icon-1" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                                        </div>
                                                        <p className="btn-text-1">
                                                            <b>Sign in with google</b>
                                                        </p>
                                                        </div>
                                                        </div>
                            <button className="Btn-sing-up"></button>
                        </div>

                        <p className="or">OR</p>
                        <form
                        onSubmit={handleSubmit}
                        >
                        <div className="box-1">
                        <p>Name</p>
                        <div>
                            <input

                               type="text"
                               placeholder="Enter Your Name"
                               name="name"
                               autoComplete="off"
                               value={name}
                               onChange={handleInputChange}
                        
                            />
                        </div>
                    </div>

                        <div className="box-1">
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

                    <div className="box-1">
                        <p>Password</p>
                        <div>
                            <input

                               type="password"
                               placeholder="Enter 6+ Characters"
                               name="password"
                               autoComplete="off"
                               value={password}
                               onChange={handleInputChange}
                        
                            />
                        </div>
                    </div>
                 
                    <button 
                    type="submit"
                    className="Btn-sing-up btn-login-1">Register</button>

                    </form>


                    </div>
                </div>

            </div>
        </>
    )
}
