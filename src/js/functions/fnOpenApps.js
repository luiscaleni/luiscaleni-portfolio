import appsData from "./appsData"
import appCamera from "../appJs/appCamera"
import appCameraMemoji from "../appJs/appCameraMemoji" 

export default function fnOpenApps(){
    if (document.getElementById("contFSReplace")) {
        let contFSReplace = document.getElementById("contFSReplace")
        let contFSReplaceChild = contFSReplace.firstChild
        let id = contFSReplaceChild.firstChild.id
        
        let iframe = document.createElement("iframe")
        iframe.id="iframe"

        for (let index = 0; index < appsData.length; index++) {
            const e = appsData[index]

            if (id === e) {
                if(id === "Camera"){
                    appCamera()
                    appCameraMemoji()                    
                }else{
                    iframe.src=`/pages/${e}.html`
                    contFSReplace.appendChild(iframe)
                }
                contFSReplace.removeChild(contFSReplaceChild)   
            }else{
                others()
            }      
        }
        function others(){
            let textApp = contFSReplaceChild.childNodes[1]
            textApp.textContent="Podes probar abriendo la Cámara."
        }
    }
}