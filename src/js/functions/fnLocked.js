import fnAlwaysOnDisplay from "./fnAlwaysOnDisplay"
import fnIconHomeEffect from "./fnIconHomeEffect"
import fnFullScreen from "./fnFullScreen"

window.addEventListener("load",()=>{
    setTimeout(() => {
        let lockScreen = document.getElementById("lockScreen")
        let addContIos = document.getElementById("addContIos")    
               
        if(lockScreen){
            lockScreen.classList.add("lockScreen")   
            document.getElementById("hour").textContent=""
            document.getElementById("barBottomInfo").style.backgroundColor="white"
            
            document.getElementById("unlockOption").addEventListener("click", ()=> {/* Si se presionó el unlockOption */
                document.getElementById("root").style.height="100vh"
                lockScreen.classList.add("unlockScreen")
                lockScreen.classList.remove("lockScreen")
                navigator.wakeLock.request('screen')
                if(addContIos){
                    fnFullScreen(document.documentElement)
                    setTimeout(() => {
                        inIos = true
                    }, 1000)
                }
                
                setTimeout(() => {
                    lockScreen.style.display="none"
                    document.getElementById("barBottomInfo").style.backgroundColor="transparent"
                }, 500)
                
                setTimeout(() => {
                    fnIconHomeEffect("showIcons")
                }, 200)
            })

            if(document.getElementById("button_lock")){
                document.getElementById("button_lock").addEventListener("click", ()=> { 
                    if(lockScreen.getAttribute("class") === "lockScreen"){/* Si se presionó el button_lock con el dispositivo bloqueado */

                        setTimeout(() => {
                            fnIconHomeEffect("showIcons")
                        }, 200)

                        lockScreen.classList.add("unlockScreen")
                        lockScreen.classList.remove("lockScreen")

                        if(document.getElementById("nav").getAttribute("class") === "" && document.getElementById("contFSReplace")){
                            setTimeout(() => {
                                document.getElementById("ContNav").classList.add("black_blur")
                            }, 500)
                        }
                        
                        setTimeout(() => {
                            lockScreen.style.display="none"
                            document.getElementById("barBottomInfo").style.backgroundColor="transparent"
                        }, 500)

                    }else if (lockScreen.getAttribute("class") === "unlockScreen") {/* Si se presionó el button_lock con el dispositivo desbloqueado */
                        setTimeout(() => {
                            fnIconHomeEffect("hideIcons")
                        }, 500)
                        
                        lockScreen.classList.add("lockScreen")
                        lockScreen.classList.remove("unlockScreen")
                        lockScreen.style.display="flex"

                        if(document.getElementById("contNav").getAttribute("class") === "black_blur"){
                            document.getElementById("contNav").classList.remove("black_blur")
                        }
                        setTimeout(() => {
                            document.getElementById("hour").textContent=""
                            document.getElementById("barBottomInfo").style.backgroundColor="white"
                        }, 100)
                    }else{
                        console.log("Error lockScreen")
                    }
                })
            }
        }
        fnAlwaysOnDisplay()
    }, 0)
})