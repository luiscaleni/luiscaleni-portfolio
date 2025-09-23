export default function fnFullScreen(element) {
    if (element.requestFullScreen) {
        element.requestFullScreen()
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen()
    }
}