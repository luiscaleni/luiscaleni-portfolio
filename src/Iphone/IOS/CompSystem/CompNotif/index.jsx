import './Notif.css'

let classNotif
let imgNameSrc

const persons = import.meta.glob(
  '../../static/assets/persons/*.png',
  { 
    eager: true,
    query: '?url',
    import: 'default'
  }
)

export default function Notif({imgName, title, text, index=""}){
    if (index) {
        classNotif=index
    }else{
        classNotif="notif"
    }
    const imgSrc = persons[`../../static/assets/persons/${imgName}.png`]

    if (!imgSrc) {
    console.warn(`Icono no encontrado: ${imgName}.png`)
    return null
    }
    
    return (
        <>
            <div className="contNotif">
                <div className={classNotif}>
                    <img src={imgSrc} className="imgNotif" />
                    <div id="contentTextNotif">
                        <h4>{title}</h4>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}