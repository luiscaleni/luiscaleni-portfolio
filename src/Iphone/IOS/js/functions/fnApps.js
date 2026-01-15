import fnOpenApps from "./fnOpenApps"
import fnIconHomePosition from "./fnIconHomePosition"

function fnApps(){
    window.addEventListener("load", ()=>{
        let main = document.getElementById("main")

        if (main) {
            let contTotal
            let contToggleAndContFS
            let cloneContToggleAndContFS
            let splide01FirstChild
            let lista = document.getElementsByClassName("app")
            
            setTimeout(() => {
                splide01FirstChild = document.getElementById("splide01").firstChild
                splide01FirstChild.remove()
            }, 5000)
        
            setTimeout(() => {
                fnIconHomePosition()
                
                Array.from(lista).forEach(elm => elm.addEventListener("click", (e)=>{
                    contTotal = elm.closest(".contTotal")
                    contToggleAndContFS = elm.closest(".contToggle")
                    cloneContToggleAndContFS = contToggleAndContFS.cloneNode(true)

                    if (elm.classList.contains("widget")) {
                        e.target.parentNode.parentNode.parentNode.style.width="10em"
                    }
        
                    contToggleAndContFS.id="contFS"
                    contToggleAndContFS.classList.remove("contToggle")
                    
                    cloneContToggleAndContFS.id="contFSReplace"
                    cloneContToggleAndContFS.classList.remove("contToggle")
        
                    document.getElementById("ios").appendChild(contToggleAndContFS)
        
                    setTimeout(() => {
                        document.getElementById("ios").appendChild(cloneContToggleAndContFS)
                        contToggleAndContFS.id=""
                        contToggleAndContFS.classList.add("contToggle")
                        document.getElementById("ios").removeChild(contToggleAndContFS)
                        contTotal.appendChild(contToggleAndContFS)
                        fnOpenApps()
                    }, 500)
                }))
            }, 4000)
        }
    })
}

export default fnApps()