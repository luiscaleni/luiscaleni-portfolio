function fnDevices(){
    let fontsLoaded = false

    const fonts = import.meta.glob(
        '../../static/assets/fonts*.ttf',
        { 
            eager: true,
            query: '?url',
            import: 'default'
        }
    )
    const sf_pro = fonts[`../../static/assets/fonts/sf_pro.ttf`]
    const coffee_soda = fonts[`../../static/assets/fonts/coffee_soda.ttf`]
    const choco_shake = fonts[`../../static/assets/fonts/choco_shake.ttf`]
    
    function loadFonts() {
        if (fontsLoaded) return
        
        const sfPro = new FontFace(
            'sfPro',
            `url(${new URL(sf_pro, import.meta.url)}) format('truetype')`
        )

        const coffeeSoda = new FontFace(
            "coffeeSoda",
            `url(${new URL(coffee_soda, import.meta.url)}) format('truetype')`
        )

        const chocoShake = new FontFace(
            "chocoShake",
            `url(${new URL(choco_shake, import.meta.url)}) format('truetype')`
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