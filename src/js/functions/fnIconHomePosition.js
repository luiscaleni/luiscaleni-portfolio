export default function fnIconHomePosition(){
    let contParentNode
    let listaAppImg = document.getElementsByClassName("appImg")
    let listaWidget = document.getElementsByClassName("widget")
    let ihp_appImg = "iconHomePosition_appImg"
    let ihp_widget = "iconHomePosition_widget" 

    for (let index = 0; index < listaAppImg.length; index++) {
        let element = listaAppImg[index]
        contParentNode = element.parentNode.parentNode.parentNode
        contParentNode.classList.add(ihp_appImg)
    }
    for (let index = 0; index < listaWidget.length; index++) {
        let element = listaWidget[index]
        contParentNode = element.parentNode.parentNode.parentNode
        contParentNode.classList.add(ihp_widget)
    }
}