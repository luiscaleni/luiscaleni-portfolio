import fnWhiteElm from "./fnWhiteElm"

window.addEventListener("load", ()=>{
    setTimeout(() => {
        let buttonHome = document.getElementById("buttonHome")
        if (buttonHome) {
            let contFSReplace
            buttonHome.style.display="none"

            setInterval(() => {
                contFSReplace = document.getElementById("contFSReplace")
                if(document.getElementById("lockScreen")){
                    if(document.getElementById("lockScreen").getAttribute("class") === "lockScreen"){
                        buttonHome.style.display="flex"
                    }else if (contFSReplace){
                        buttonHome.style.display="flex"
                    }else{
                        buttonHome.style.display="none"
                    }
                }
            }, 0)

            buttonHome.addEventListener("click", ()=> {
                if (contFSReplace && document.getElementById("lockScreen").getAttribute("class") === "unlockScreen") {
                    buttonHome.style.display="none"
                    if(document.getElementById("contNav").getAttribute("class") === "black_blur"){
                        document.getElementById("contNav").classList.remove("black_blur")
                    }

                    if (document.getElementById("video")) {
                        const videoDom = document.getElementById("video")
                        const activeCamera = document.getElementById("cameraDI")
                        
                        videoDom.srcObject.getTracks()[0].stop()
                        videoDom.classList.add("hideAppCamera")
                        activeCamera.style.background="transparent"
                        setTimeout(() => {
                            document.getElementById("contFSReplace").remove(videoDom)
                        }, 400)
                    }else {
                        fnWhiteElm()
                    }

                    contFSReplace.classList.add("hideApp")
                    document.getElementsByClassName("hideapp").id=""

                    setTimeout(() => {
                        contFSReplace.classList.remove("hideApp")
                        contFSReplace.remove()
                    }, 400)

                }else if (!contFSReplace || (contFSReplace && document.getElementById("lockScreen").getAttribute("class") === "lockScreen")){
                    document.getElementById("unlockBySliding").classList.add("up")
                    setTimeout(() => {
                        document.getElementById("unlockBySliding").classList.remove("up")
                    }, 1000)
                }
            })
        }
    }, 300)
})