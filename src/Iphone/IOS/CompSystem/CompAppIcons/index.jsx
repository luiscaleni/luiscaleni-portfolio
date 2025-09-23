import React from "react";
import './AppIcons.css'

let addClassApp
let ctn

export default function AppIcons({name, classNameApp, id="", text, contTotalValue}){
    addClassApp = classNameApp + " app"

    if(contTotalValue == "home"){
        ctn="home"
    }else{
        ctn=""
    }

return (
    <>
        <div className="contTotal" id={ctn}>
            <div className="contToggle">
                <div className="content_app_widget">
                    <img src={"/assets/icons/"+ name + ".svg"} className={addClassApp} id={id} />
                    <span className="textApp">{text}</span>
                </div>
            </div>
        </div>
    </>
    )
}