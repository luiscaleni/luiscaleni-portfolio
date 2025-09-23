import React from "react";
import './Dock.css';
import AppIcons from "../CompAppIcons";

export default function Dock(){
    
    return (
        <>
            <div id="content_dock">
                <div className="dock">
                    <AppIcons name="safari" classNameApp="appImg" id="Safari"/>
                    <AppIcons name="apple-music" classNameApp="appImg" id="AppleMusic"/>
                    <AppIcons name="ios-message" classNameApp="appImg" id="Message"/>               
                    <AppIcons name="mail" classNameApp="appImg" id="Mail"/>
                    <AppIcons name="contacts" classNameApp="appImg" id="Contacts"/>
                    <AppIcons name="notes" classNameApp="appImg" id="Notes" />
                </div>
            </div>
        </>
    )
}