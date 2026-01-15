import {useEffect} from "react"
import "./ScreenLoader.css"
import logo from "../../public/assets/persons/luis.png"
import { CONFIG } from "../../Const/Const"

export default function ScreenLoader(){
    useEffect(()=>{
        let screenLoader = document.getElementById("screenLoader")
        let contIos = document.getElementById("contIos") 
        if (contIos) {
            setTimeout(() => {
                screenLoader.remove()
            }, 5000)
        }
    },[])

    return(
        <>
            <div id="screenLoader">
                <div id="contLoader">
                    <img src={logo} alt="Logo"/>
                    <div id="contLoad">
                        <div id="load"></div>
                    </div>
                </div>
                <div id="copyright">
                    <p id="author">{CONFIG.AUTHOR}</p>
                    <p id="versionDate">{CONFIG.APP_VERSION} - {CONFIG.DATE_VERSION}</p>
                </div>
            </div>
        </>
    )
}