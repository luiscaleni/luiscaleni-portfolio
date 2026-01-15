import React from "react";
import './AppIcons.css'

let addClassApp
const imgSrcBase = "src/Iphone/IOS/public/assets/icons/"

export default function AppIcons({name, classNameApp, id="", text}){
    addClassApp = classNameApp + " app"

return (
    <>
        <div className="contTotal">
            <div className="contToggle">
                <div className="content_app_widget">
                    <img src={imgSrcBase + name + ".svg"} className={addClassApp} id={id} />
                    <span className="textApp">{text}</span>
                </div>
            </div>
        </div>
    </>
    )
}