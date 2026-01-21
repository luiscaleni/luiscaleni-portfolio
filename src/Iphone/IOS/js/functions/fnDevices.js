function fnDevices(){
    setTimeout(() => {
        const root = document.getElementById("root")
        
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {          
            root.style.backgroundColor="black"
            const main = document.getElementById("main")
            const contIos = document.getElementById("contIos").cloneNode(true)
            
            main.innerHTML=""
            contIos.removeAttribute("id")
            contIos.id="addContIos"
            main.appendChild(contIos)
        }
    }, 10)
}

export default fnDevices()