function fnDevices(){
    let fontsLoaded = false
    
    function loadFonts() {
        if (fontsLoaded) return
        
        const sfPro = new FontFace(
            'sfPro',
            `url(${new URL("/fonts/sf_pro.ttf", import.meta.url)}) format('truetype')`
        )

        const coffeeSoda = new FontFace(
            "coffeeSoda",
            `url(${new URL("/fonts/coffee_soda.ttf", import.meta.url)})`
        )

        const chocoShake = new FontFace(
            "chocoShake",
            `url(${new URL("/fonts/choco_shake.ttf", import.meta.url)})`
        )

        Promise.all([
            coffeeSoda.load(),
            chocoShake.load(),
            sfPro.load()
        ]).then((fonts) => {
            fonts.forEach(font => document.fonts.add(font))
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
        
        let mainCreate = document.createElement("div")
        mainCreate.id="main"
    
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {          

            main.remove()
            
            root.style.backgroundColor="black"
            root.appendChild(mainCreate)
            mainCreate.appendChild(contIos)
            contIos.removeAttribute("id")
            contIos.id="addContIos"
        }
    }, 10)
}

export default fnDevices()