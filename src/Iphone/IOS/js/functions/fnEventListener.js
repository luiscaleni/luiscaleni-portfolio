import fnBlackElm from "./fnBlackElm"
import darkMode from "./darkMode"

document.addEventListener("click",(event)=>{
    for (let index = 0; index < darkMode.length; index++) {
        const e = darkMode[index]
        if (event.target.id === e) {
            setTimeout(() => {
                fnBlackElm()
            }, 600)
        }
    }
})  