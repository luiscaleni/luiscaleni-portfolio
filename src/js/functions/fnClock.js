function fnClock(){
    setTimeout(() => {
        let screenLoader = document.getElementById("screenLoader")
        if (screenLoader) {
            function myHour() {
                let currentDate = new Date() //Actualizar myDate.
            
                let hour = currentDate.getHours() //hour actual
                let minutes = currentDate.getMinutes() //minutes actual
                
                if(hour > 12 && hour <= 24){
                    switch (hour) {
                        case 12:
                            hour = "12"
                            break
                        case 13:
                            hour = "13"
                            break
                        case 14:
                            hour = "14"
                            break  
                        case 15:
                            hour = "15"
                            break
                        case 16:
                            hour = "16"
                            break
                        case 17:
                            hour = "17"
                            break
                        case 18:
                            hour = "18"
                            break  
                        case 19:
                            hour = "19"
                            break
                        case 20:
                            hour = "20"
                            break
                        case 21:
                            hour = "21"
                            break
                        case 22:
                            hour = "22"
                            break
                        case 23:
                            hour = "23"
                            break
                        case 24:
                            hour = "00"
                            break
                        default:
                            break
                    }
                }
                if (minutes<10) { //dos cifras para el minutes
                    minutes="0"+minutes
                    }
            
                //devolver los datos:
                let myMyResultClock
                if (hour<10) {
                    myMyResultClock = "0"+hour +":"+minutes
                }else {
                    myMyResultClock = hour +":"+minutes
                }
    
                return myMyResultClock 
            }
            
            function myDate(){
                let currentDate = new Date() //Actualizar myDate.
            
                //const currentYear = currentDate.getFullYear()
                let today = currentDate.getDate()
                let day = currentDate.getDay()
                let month = currentDate.getMonth() + 1
                let myResultDate
                
                if(today < 10){
                    today = "0" + today
                }
                switch (day) {
                    case 0:
                        day = "Domingo"
                        break
                    case 1:
                        day = "Lunes"
                        break
                    case 2:
                        day = "Martes"
                        break
                    case 3:
                        day = "Miercoles"
                        break  
                    case 4:
                        day = "Jueves"
                        break
                    case 5:
                        day = "Viernes"
                        break
                    case 6:
                        day = "Sábado"
                        break
                    default:
                        break
                }
                switch (month) {
                    case 1:
                        month = "Enero"
                        break
                    case 2:
                        month = "Febrero"
                        break
                    case 3:
                        month = "Marzo"
                        break  
                    case 4:
                        month = "Abril"
                        break
                    case 5:
                        month = "Mayo"
                        break
                    case 6:
                        month = "Junio"
                        break
                    case 7:
                        month = "Julio"
                        break  
                    case 8:
                        month = "Agosto"
                        break
                    case 9:
                        month = "Septiembre"
                        break
                    case 10:
                        month = "Octubre"
                        break
                    case 11:
                        month = "Noviembre"
                        break
                    case 12:
                        month = "Diciembre"
                        break
                    default:
                        break
                }
                
            
                if(document.getElementById("alwaysOnDisplay").style.display === "flex"){
                    myResultDate= day + " " + today
                }else{
                    myResultDate= day + " " + today + " de " + month
                }
            
                return myResultDate
            }
            function update() { //función del temporizador
                let myCurrentHour = myHour() //recoger hour actual
                let myCurrentDate = myDate()
                let hour
                
                let hourScreen = document.getElementById("hourScreen") //buscar elemento reloj
                let dateScreen = document.getElementById("dateScreen") //buscar elemento reloj
            
                let lockScreen = document.getElementById("lockScreen")
                
                let hourLandscape = document.getElementById("hourLandscape")
                let dateLandscape = document.getElementById("dateLandscape")
                
                let fuenteUno = new FontFace('coffeeSoda',"url(fonts/coffee_soda.ttf) format('truetype')" )
                let fuenteDos = new FontFace('chocoShake',"url(fonts/choco_shake.ttf) format('truetype')" )
            
                document.fonts.add(fuenteUno)
                document.fonts.add(fuenteDos)
            
                if (lockScreen) {
                    if (lockScreen.classList.contains("lockScreen")) {
                        hourScreen.innerHTML= myCurrentHour //incluir hour en elemento
                        dateScreen.innerHTML= myCurrentDate //incluir fecha en elemento
            
                        hourLandscape.innerHTML = myCurrentHour 
                        dateLandscape.innerHTML = myCurrentDate
                    }else if(lockScreen.classList.contains("unlockScreen")){
                        let hour =  document.getElementById("hour")
                        hour.innerHTML= myCurrentHour+", "+myCurrentDate //incluir hour en elemento
            
                        hourLandscape.innerHTML = myCurrentHour 
                        dateLandscape.innerHTML = myCurrentDate
                    }
                }else{
                    hour =  document.getElementById("hour")
                    if (hour) {
                        hour.innerHTML= myCurrentHour
                    }
                }
            }
            
            setInterval(update,1000) //iniciar temporizador
        }
    }, 100);
}

export default fnClock()