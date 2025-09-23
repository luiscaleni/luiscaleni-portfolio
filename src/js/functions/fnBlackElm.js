export default function fnBlackElm(){  
    document.getElementById("hour").style.color="black"
    document.getElementById("hour").style.textShadow="none"
    
    document.getElementById("wifi").style.display="none"
    document.getElementById("signal").style.display="none"
    document.getElementById("wifiBlack").style.display="block"
    document.getElementById("signalBlack").style.display="block"

    document.getElementById("buttonHome").style.backgroundColor="rgba(0, 0, 0, 0.5)"
    document.getElementById("contNav").classList.add("black_blur")
}