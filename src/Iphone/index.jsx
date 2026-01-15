import "./Iphone.css"
import Chasis from "./Chasis"
import IOS from "./IOS"
import ModuleOfScreen from "./ModuleOfScreen"

export default function Iphone(){
    return (
        <>
        <main id="main">            
            <Chasis>
                <ModuleOfScreen>
                    <IOS />
                </ModuleOfScreen>
            </Chasis> 
        </main>
        </>
    )
}