export default function fnIconHomeEffect(value){
    let contParentNode
    let onOff
    let contFSReplace = document.getElementById("contFSReplace")
    let listaAppImg = document.getElementsByClassName("appImg")
    let listaWidget = document.getElementsByClassName("widget")

    if(value === "showIcons" || value === "hideIcons"){
        onOff = value
        if(!contFSReplace){
            if(onOff === "showIcons"){            
                for (let index = 0; index < listaAppImg.length; index++) {
                    let element = listaAppImg[index]
                    contParentNode = element.parentNode.parentNode.parentNode
                    contParentNode.classList.remove("iconHomePosition_appImg")             
                    contParentNode.classList.add("iconHomeEffect_appImg")
                }
                for (let index = 0; index < listaWidget.length; index++) {
                    let element = listaWidget[index]
                    contParentNode = element.parentNode.parentNode.parentNode
                    contParentNode.classList.remove("iconHomePosition_widget")             
                    contParentNode.classList.add("iconHomeEffect_widget")
                }
            }else if(onOff === "hideIcons"){
                for (let index = 0; index < listaAppImg.length; index++) {
                    let element = listaAppImg[index]
                    contParentNode = element.parentNode.parentNode.parentNode
                    contParentNode.classList.remove("iconHomeEffect_appImg")             
                    contParentNode.classList.add("iconHomePosition_appImg")
                }
                for (let index = 0; index < listaWidget.length; index++) {
                    let element = listaWidget[index]
                    contParentNode = element.parentNode.parentNode.parentNode
                    contParentNode.classList.remove("iconHomeEffect_widget")             
                    contParentNode.classList.add("iconHomePosition_widget")
                }
            }
        }
    }
}
