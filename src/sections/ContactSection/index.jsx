import ConversionButton from '../../components/ConversionButton'
import {SiWhatsapp, SiInstagram, SiFacebook, SiPinterest} from 'react-icons/si'
import './styles.sass'

export default function ContactSection(){
  return(
    <section className="contact-section" id="contact">
      <h2 className='section-title'>Contato</h2>
      <div className="contact-infos">
        <div className="contact-container">
          <p className='contact-text'>Entre em contato para podermos te conhecer melhor e começar a projetar o seu sonho!</p>
          <ConversionButton
            text="Entrar em contato"
            whatsIcon={true}
          />
        </div>

        <div className="social-medias-container">
          <h3 className='social-medias-title'>Nossas redes sociais</h3>
          <div className='social-medias'>
            <a href="#" className='link'>
              <SiWhatsapp size={24}/>
            </a>
            <a href="#" className='link'>
              <SiInstagram size={24}/>
            </a>
            <a href="#" className='link'>
              <SiFacebook size={24}/>
            </a>
            <a href="#" className='link'>
              <SiPinterest size={24}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}