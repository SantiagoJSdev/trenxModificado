import React from 'react'
import { useDispatch } from 'react-redux';
import { newdata } from '../action/data';
// import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
// import { moduloPrueba } from '../moduloPrueba';

import '../styles/styles-request.css'

export const RequestServiceScreen = () => {

    const dispatch = useDispatch();
    const [formValues, handleInputChange, reset] = useForm({
        name:"",
        email:"",
        phone:"",
        message:"",
        street:"",
        city:"",
        region:"",
        postal:""

    })

    const {name, email, phone, message, street, city, region, postal} = formValues;

    const data = {
        name,
        email,
        phone,
        message,
        street,
        city,
        region,
        postal
        // date: new Date().getTime()
    }

const handleSubmit =(e) =>{
    reset()
    e.preventDefault()
    dispatch(newdata(data))
    console.log(data)
    // moduloPrueba()
}















    return (
        <div>
            <div className="container-request">

                <div className="mitad1">
                    <div className="container-img">
                        <img className="img2" src={"../img/logo.png"} alt="img" />
                    </div>
                </div>

                <div className="mitad2">
                    <div className="requestBox">
                        <h3> Request A Service </h3>
                        <form
                         onSubmit={handleSubmit}>
                        <div className="box">
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
                        <p>Phone</p>
                        <div>
                            <input

                               type="text"
                               placeholder="Enter Your Phone"
                               name="phone"
                               autoComplete="off"
                               value={phone}
                               onChange={handleInputChange}
                        
                            />
                        </div>
                        </div>

                        <div className="box">
                        <p>Message</p>
                        <div>
                            <input

                               type="text"
                               placeholder="Enter Your Message"
                               name="message"
                               autoComplete="off"
                               value={message}
                               onChange={handleInputChange}
                        
                            />
                        </div>
                        </div>

                        <div className="box">
                        <p>Street Address</p>
                        <div>
                            <input

                               type="text"
                               placeholder="Street Address"
                               name="street"
                               autoComplete="off"
                               value={street}
                               onChange={handleInputChange}
                        
                            />
                        </div>
                        </div>

                        <div className="box">
                        <p>City</p>
                        <div>
                            <input

                               type="text"
                               placeholder="City"
                               name="city"
                               autoComplete="off"
                               value={city}
                               onChange={handleInputChange}
                        
                            />
                        </div>
                        </div>

                        <div className="box">
                        <p>Region/State/Province</p>
                        <div>
                            <input

                               type="text"
                               placeholder="Region/State/Province"
                               name="region"
                               autoComplete="off"
                               value={region}
                               onChange={handleInputChange}
                        
                            />
                        </div>
                        </div>

                        <div className="box">
                        <p>Postal/Zip Code</p>
                        <div>
                            <input

                               type="text"
                               placeholder="Postal/Zip Code"
                               name="postal"
                               autoComplete="off"
                               value={postal}
                               onChange={handleInputChange}
                        
                            />
                        </div>
                        </div>
                        <button 
                        type="submit"
                        className="btn-request btn-sumit">Sumit</button>
                        </form>
                    </div>
                   

                    <button className="btn-request btn-home1"><a href="/">HOME</a></button>
                  
                </div>
            </div>
        </div>
    )
}
