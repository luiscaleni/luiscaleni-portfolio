import React from "react"
import "./AlwaysOnDisplay.css"

export default function AlwaysOnDisplay() {
    return (
        <>  
            <div id="alwaysOnDisplay">
                <div id="contentWidgetLandscape">
                    <div id="hourLandscape"></div>
                    <div id="contMiniWidget">
                        <div id="dateLandscape"></div>
                        <div id="infoLandscape">por: Luis Caleni</div>
                    </div>
                </div>
            </div>           
        </>
    )
}