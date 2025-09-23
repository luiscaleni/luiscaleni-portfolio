function fnDevices(){
    let sfPro = new FontFace('sfPro',"url(fonts/sf_pro.ttf) format('truetype')" )
    document.fonts.add(sfPro)    
    setTimeout(() => {
        let root = document.getElementById("root")
        let main = document.getElementById("main")
        let contIos =document.getElementById("contIos")
        let contLoader = document.getElementById("contLoader")
        
        let mainCreate = document.createElement("div")
        mainCreate.id="main"
    
        let p = document.createElement("p")
        p.id="adaptP"
        p.textContent="Prueba desde una computadora."
    
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {          

            main.remove()
            
            /*root.appendChild(mainCreate)
            mainCreate.appendChild(contIos)
            contIos.removeAttribute("id")
            contIos.id="addContIos"*/
            root.appendChild(p)
        }
    }, 10)
}

export default fnDevices()