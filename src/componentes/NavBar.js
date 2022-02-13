import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../action/auth';
import { finishLoading } from '../action/uiLoading';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import {startLogout} from '../action/auth'

export const NavBar = () => {
    const dispatch = useDispatch();
    const {uid, name} = useSelector( state => state.auth );
    console.log(uid)

    const handleLogout=()=>{
        dispatch(startLogout())
        dispatch(finishLoading())
    }


    return (
        <>
             <nav className="nav-bar">
                    <div className="logo">
                        <img className="img" src={"./img/logo.png"} alt="img" />
                    </div>
                    <ul className="ul-1">
                        <li> <a href="/service"> SERVICE  </a> </li>
                        <li> <a href="/auth/products"> PRODUCTS </a> </li>
                        <li> <a href="/contact"> CONTACT </a> </li>
                        <li> <a href="/auth/career" > CAREER </a> </li>
                       {  (uid) &&
                     
                        <li> <a onClick={handleLogout} href="/auth/otros">LOGOUT </a> </li> 
                        
                  
                        }
                    </ul>
                    <div className="dropdown ul">
                      { (!uid) &&  <button className="dropdown-btn"><p id="p-3">ACCOUNT</p></button> }
                        <div className="dropdown-content">
                            <a href="/auth/login">SING IN</a>
                            <a href="/auth/register">CREATE ACCOUNT</a>
                        </div>
                        
                    </div>
                    <div className='nameUid'>{name}</div>
                </nav>
        </>
    )
}
