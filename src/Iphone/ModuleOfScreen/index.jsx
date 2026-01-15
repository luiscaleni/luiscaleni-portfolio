
import './ModuleOfScreen.css'
import DynamicIsland from '../DynamicIsland'

function ModuleOfScreen({children}) {
    return ( 
        <div className="moduleOfScreen">
            <DynamicIsland />
            <div id="iphoneScreen">
                {children}
            </div>
        </div>
     )
}

export default ModuleOfScreen