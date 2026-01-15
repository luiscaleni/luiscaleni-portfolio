import fnFullScreen from "./fnFullScreen"

export default function fnAlwaysOnDisplay(){
    let addContIos = document.getElementById("addContIos")
    let alwaysOnDisplay = document.getElementById("alwaysOnDisplay")
    let inIos = false
    let cero = 0

    setTimeout(() => {
        if(document.getElementById("lockScreen")){
            if(addContIos){
                setTimeout(() => {
                    inIos = true
                }, 1000)
            }
        }
        setInterval(() => {
            if(addContIos){
                if (addContIos.offsetWidth < addContIos.offsetHeight) {
                    alwaysOnDisplay.style.display="none"
                }else if (addContIos.offsetWidth > addContIos.offsetHeight) {
                    alwaysOnDisplay.style.display="flex"
                    if (inIos) {
                        //console.log(inIos)
                        setTimeout(() => {
                            
                            if(cero === 0 && inIos===true){
                                cero++
                                let divAlert = document.createElement("div")
                                let divOk = document.createElement("div")

                                divAlert.id= "alert"
                                divOk.id="ok"
                                divAlert.innerHTML="El dispositivo permanecerá encendido con un menor brillo."
                                divOk.innerHTML="OK"

                                divAlert.appendChild(divOk)
                                alwaysOnDisplay.appendChild(divAlert)
                            }
                        }, 1000)
                    }
                }
            }
        },0)
    }, 5000)
    let time = setInterval(() => {
        if (document.getElementById("ok")) {
            let alert = document.getElementById("alert")
            document.getElementById("ok").addEventListener("click",()=>{
                if (addContIos.offsetWidth > addContIos.offsetHeight) {
                    fnFullScreen(document.documentElement)
                    document.getElementById("root").style.height="100vh"
                }
                alert.remove()
                clearInterval(time)
                setTimeout(() => {
                    alwaysOnDisplay.style.filter="brightness(0.2)"
                }, 1000)
            })
        }
    }, 0)
}