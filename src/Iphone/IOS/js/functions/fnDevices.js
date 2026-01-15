function fnDevices(){
    let fontsLoaded = false
    
    function loadFonts() {
        if (fontsLoaded) return
        
        const sfPro = new FontFace(
            'sfPro',
            `url(${new URL("../../public/fonts/sf_pro.ttf", import.meta.url)}) format('truetype')`
        )

        const coffeeSoda = new FontFace(
            "coffeeSoda",
            `url(${new URL("../../public/fonts/coffee_soda.ttf", import.meta.url)})`
        )

        const chocoShake = new FontFace(
            "chocoShake",
            `url(${new URL("../../public/fonts/choco_shake.ttf", import.meta.url)})`
        )

        Promise.all([
            coffeeSoda.load()
        ]).then(() => {
            font => document.fonts.add(font)
            fontsLoaded = true
        }).catch(err => {
            console.error("Error cargando fuentes:", err)
        })
    }

    setTimeout(() => {
        loadFonts()
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
            
            root.appendChild(mainCreate)
            root.style.backgroundColor="black"
            mainCreate.appendChild(contIos)
            contIos.removeAttribute("id")
            contIos.id="addContIos"
            //root.appendChild(p)
        }
    }, 10)
}

export default fnDevices()