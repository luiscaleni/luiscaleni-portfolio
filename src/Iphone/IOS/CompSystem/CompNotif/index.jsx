import React from "react"
import './Notif.css'

let classNotif
let imgNameSrc

export default function Notif({imgName, title, text, index=""}){
    if (index) {
        classNotif=index
    }else{
        classNotif="notif"
    }
    imgNameSrc= "/assets/persons/" + imgName + ".png"
    
    return (
        <>
            <div className="contNotif">
                <div className={classNotif}>
                    <img src={imgNameSrc} className="imgNotif" />
                    <div id="contentTextNotif">
                        <h4>{title}</h4>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}