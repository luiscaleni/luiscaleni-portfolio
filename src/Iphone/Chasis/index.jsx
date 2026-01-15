import './Chasis.css'

function Chasis({children}) {
    return ( 
        <>
        <div className='chasis'>
            <span id="button_action"></span>
            <span id="button_v_up" className="levelAudio"></span>
            <span id="button_v_down" className="levelAudio"></span>
            <span id="button_lock" title="Bloquear/Desbloquear iPhone"></span>    
            <div className="contentChasis">
                {children}
            </div>
        </div>
        </>
     )
}

export default Chasis