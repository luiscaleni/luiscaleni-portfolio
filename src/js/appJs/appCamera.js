export default function appCamera(){
    const videoDom = document.createElement("video")
    const contFSReplace = document.getElementById("contFSReplace")
    const activeCamera = document.getElementById("cameraDI")
    
    activeCamera.classList.add("activeCamera")
    
    videoDom.id="video"
    videoDom.autoplay="true"
    videoDom.playsInline="true"
    contFSReplace.appendChild(videoDom)
}