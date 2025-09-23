import React from "react";
import './Nav.css'
import wifi from "/assets/icons/wifi.svg"
import wifi_black from "/assets/icons/wifi_black.svg"
import signal from "/assets/icons/signal.svg"
import signal_black from "/assets/icons/signal_black.svg"

export default function Nav(){
    return (
        <>
        <div id="contNav">
        <nav id="nav">
            <p id="hour"></p>
            <div id="info">
                <div id="cameraDI"></div>
                <div id="contConectivity">
                    <div id="contElementsInfo">
                        <div className="contIconNavBar">
                            <img src={signal} alt="signal" id="signal"/>
                            <img src={signal_black} alt="signal" id="signalBlack"/>
                        </div>
                        <div className="contIconNavBar">
                            <img src={wifi} alt="wifi" id="wifi"/>
                            <img src={wifi_black} alt="wifi" id="wifiBlack"/>
                        </div>
                        <div id="battery_group">
                            <span id="battery">100</span>
                            <span id="battery_point"></span>
                        </div>
                    </div>
                    <span id="barBottomInfo"></span>
                </div>
            </div>
        </nav>
        </div>
        </>
    )
}