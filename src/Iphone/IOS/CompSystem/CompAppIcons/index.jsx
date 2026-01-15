import './AppIcons.css'

// importa todos los svg del directorio
const icons = import.meta.glob(
  '../../public/assets/icons/*.svg',
  { 
    eager: true,
    query: '?url',
    import: 'default'
  }
)

export default function AppIcons({name, classNameApp="", id="", text}){
    const imgSrc = icons[`../../public/assets/icons/${name}.svg`]

    if (!imgSrc) {
    console.warn(`Icono no encontrado: ${name}.svg`)
    return null
    }

return (
    <>
        <div className="contTotal">
            <div className="contToggle">
                <div className="content_app_widget">
                    <img src={imgSrc} className={`${classNameApp} app`} id={id} alt={text} />
                    <span className="textApp">{text}</span>
                </div>
            </div>
        </div>
    </>
    )
}