export default function appCamera(){
    const videoDom = document.createElement("video")
    const contFSReplace = document.getElementById("contFSReplace")
    const activeCamera = document.getElementById("cameraDI")
    const canvas = document.querySelector("canvas")
    
    activeCamera.classList.add("activeCamera")
    
    document.addEventListener("click", function(){
        if (contFSReplace) {
            setTimeout(() => {
                contFSReplace.appendChild(canvas)
            }, 2000)
        }
    })
    
    videoDom.id="video"
    videoDom.autoplay="true"
    videoDom.playsInline="true"
    contFSReplace.appendChild(videoDom)
}