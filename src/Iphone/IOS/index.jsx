import React from "react"

import "./IOS.css"
import LockScreen from "./CompSystem/CompLockScreen"
import ButtonHome from "./CompSystem/CompButtonHome"
import Nav from "./CompSystem/CompNav"
import ContHome from "./ContHome"
import ScreenLoader from "./CompSystem/CompScreenLoader"

export default function IOS(){    
    return (
        <>
        <div id="contIos">
            <div id="ios">
                <ScreenLoader />
                <LockScreen />
                <Nav />
                <ContHome />
                <ButtonHome />
            </div>
        </div>
        </>
    )
}