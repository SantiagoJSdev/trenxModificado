

import React from 'react'

import '../styles/styles-principal.css'
import { NavBar } from './NavBar'
// import './img/'
// import { useDispatch, useSelector } from 'react-redux'
// import '../../styles/typo.css'

// import {startLogout} from '../../action/auth'


export const PrincipalScreen = () => {

    // console.log(db)

    // const {uid} = useSelector( state => state.auth );
    // console.log(uid)

    // const uid = true;


    // const dispatch = useDispatch();

    // const handleLogout=()=>{
    //     dispatch(startLogout())
    // }

    
    return (
        <>

            <div id="lol" className="container-1 primero">
               <NavBar/>

            </div>



            <div className="container-2">

                <div className="parrafo"> 
                
                <img className="img" src={"https://user-images.githubusercontent.com/87577172/153774344-afb3d82b-042f-4f09-a97c-b20bc8b9f4ff.png"} alt="img" />


                {/* <form
                      
                         >
                        <div className="box-principal">
                        <h4>Name</h4>
                        <div>
                            <input

                               type="text"
                               placeholder="Enter Your Name"
                               name="name"
                               autoComplete="off"
                          
                        
                            />
                        </div>
                        </div>
                        <div className="box-principal">
                        <h4>Email</h4>
                        <div>
                            <input

                               type="text"
                               placeholder="Enter Your Email"
                               name="email"
                               autoComplete="off"
                          
                        
                            />
                        </div>
                        </div>

                        <div className="box-principal">
                        <h4>Phone</h4>
                        <div>
                            <input

                               type="text"
                               placeholder="Enter Your Phone"
                               name="phone"
                               autoComplete="off"
                          
                        
                            />
                        </div>
                        </div>
               

                        <div className="box-principal">
                        <h4>Postal/Zip Code</h4>
                        <div>
                            <input

                               type="text"
                               placeholder="Postal/Zip Code"
                               name="postal"
                               autoComplete="off"
                         
                        
                            />
                        </div>
                        </div> <div className="box-principal">
                        <h4>How can we help you?</h4>
                        <div>
                            <input

                               type="text"
                               placeholder="How can we help you?"
                               name="help"
                               autoComplete="off"
                            
                        
                            />
                        </div>
                        </div>




                        <button 
                        type="submit"
                        className="btn-request btn-sumit">Sumit</button>
                        </form> */}
               
               {/* hasta aqui */}
                </div>
                <div className="flecha">

                    <div className="flecha1">
                        <div className="flecha1-logo"> 
                        <h1 className="triangulo"></h1> 
                        <p className="off">10 OFF</p>

                        </div>
                    </div>

                    <p className="flecha2">Sign up for free and receive a <span>10%</span> discount on all of our services,
                        including routine maintenance and any necessary installation</p>

                        <div className="flecha3">
                        <button className="flecha3-btn"><a href="/auth/register">REGISTER</a></button>

                        </div>

                </div>


                <div className="caja-1">
                    <div className="caja pra div">
                    </div>
                </div>
                <footer className="footer">
                    <ul>
                        <li><a href="/auth/login">CONTACT</a></li>
                        <li><a href="/auth/login">TWITTER</a></li>
                        <li><a href="/auth/login">YOUTUBE</a></li>
                        <li><a href="/auth/login">LINKEDIN</a></li>
                        <li><a href="/auth/login">CAREERS</a></li>

                    </ul>
                </footer>

            </div>

        </>
    )
}
