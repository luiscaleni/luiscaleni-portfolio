import React from "react"
import './LockScreen.css'
import Notif from "../CompNotif"
import AlwaysOnDisplay from "../CompAlwaysOnDisplay"

export default function LockScreen(){
    return (
        <>
            <AlwaysOnDisplay />
            <div id="lockScreen">
                <div id="contElemLockScreen">
                    <div id="groupScreen">
                        <div id="lockScreenMemoji">
                            <div id="groupScreenTop">
                                <div id="dateScreen"></div>
                                <div id="hourScreen"></div>
                            </div>
                        </div>
                        <div id="groupNotif">
                            <Notif imgName="luis" title="Luis Caleni Velasquez" text="Hola, bienvenido a mi portfolio."/>
                            <Notif imgName="jhonyIve" title="Jhony Ive" text="I am Jonathan Paul Ive" index="indexTwo"/>
                            <Notif imgName="philSchiller" title="Phil Schiller" text="Hello!, I am Philip W. Schiller" index="indexThree"/>
                        </div>
                    </div>
                    <div id="groupScreenDown">
                        
                        <div id="unlockOption">
                            <p id="unlockBySliding">Toca para desbloquear</p>
                        </div>
                        
                    </div>
                </div>
                <div id="contWp"></div>
            </div>
        </>
    )
}