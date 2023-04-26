import { SiWhatsapp } from 'react-icons/si'
import './styles.sass'

export default function ConversionButton(props){
  const {text, whatsIcon, size} = props
  return(
    <a href="#" className="conversion-button" style={{width: size || 220}}>
      {whatsIcon == true ? (
        <span className="icon">
          <SiWhatsapp size={18}/>
        </span>
      ) : null}

      <span className="text">
        {text}
      </span>
    </a>
  )
}