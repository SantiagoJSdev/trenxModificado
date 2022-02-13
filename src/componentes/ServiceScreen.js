import React from 'react'
import { NavBar } from './NavBar'

import '../styles/styles-service.css'

export const ServiceScreen = () => {
    return (
        <>
        <NavBar/>

        <div className="containerService">
            <div className="primeraCaja">
                <h3>Heating</h3>
                <ul>
                    <li>Installation</li>
                    <li>Repair</li>
                    <li>Maintance</li>
                    <li>Furnaces</li>
                    <li>Heat Pump</li>
                    <li>Boilers</li>
                    <li>Ductless Systems</li>
                    

                </ul>
            </div>
            <div className="segundaCaja">
            <h3>Air Conditioning</h3>
                <ul>
                    <li>Installation</li>
                    <li>Repair</li>
                    <li>Maintance</li>
                    <li>Heat Pump</li>
                    <li>Ductless Systems</li>
                </ul>

            </div>
            <div className="terceraCaja">
            <h3>Indoor Quality</h3>
                <ul>
                    <li>Air Cleaners</li>
                    <li>Air Filtration And Purifiers</li>
                    <li>Humidifiers And Dehumidifiers</li>
                    <li>Heat And Energy Recovery</li>
                    <li>Ventilators</li>
                    <li>Carbon And Smoke Detectors</li>
                   
                </ul>
            </div>
            <div className="cuartaCaja">
            <h3>Water Heating</h3>
                <ul>
                    <li>Installation</li>
                    <li>Repair</li>
                </ul>
            </div>
            <div className="quintaCaja">
            <h3>Standy Generators</h3>
                <ul>
                    <li>Installation</li>
                    <li>Repair</li>
                    <li>Maintance</li>
                </ul>
            </div>

        </div>
            
        </>
    )
}
