function fnFinder(){
    window.addEventListener("load", ()=>{
        let main = document.getElementById("main")

        if (main) {   
            setTimeout(() => {
                let divFinder = document.createElement("div")
                let imgFinder = document.createElement("img")
                let buscar = document.createElement("span")
                let splidePagination = document.getElementsByClassName("splide__pagination")[0]
                let childs = splidePagination.childNodes
            
                divFinder.id="finder"
                imgFinder.src="/assets/iconsSystem/finder.png"
                buscar.textContent="Buscar"
                childs[0].style.display="none"
                childs[1].style.display="none"
                
                divFinder.appendChild(imgFinder)
                divFinder.appendChild(buscar)
                
                splidePagination.appendChild(divFinder)
                
                let splide = document.getElementsByClassName("splide__list")[0]
                splide.addEventListener("mouseup", ()=>{/*Presionar click*/
                    divFinder.style.display="none"
                    childs[0].style.display="block" 
                    childs[1].style.display="block"
                })
                splide.addEventListener("mousedown", ()=>{/*Soltar click*/
                    divFinder.style.display="none" 
                    childs[0].style.display="block"
                    childs[1].style.display="block"
                })
                splide.addEventListener("mouseover", ()=>{/*Ingresar al elemento*/
                    divFinder.style.display="flex"
                    childs[0].style.display="none"
                    childs[1].style.display="none"
                })
                splide.addEventListener("mouseout", ()=>{/*Salir del elemento*/
                    divFinder.style.display="flex" 
                    childs[0].style.display="none"
                    childs[1].style.display="none"
                })
                splide.addEventListener("click", ()=>{/*Ingresar al elemento*/
                    divFinder.style.display="flex"
                    childs[0].style.display="none"
                    childs[1].style.display="none"
                })
                
                if (divFinder.getAttribute("display") === "block") {
                    splidePagination.style.display="none" 
                }else if(divFinder.getAttribute("display") === "none"){
                    splidePagination.style.display="block"
                }
            }, 5000)
        }
    })
}

export default fnFinder()