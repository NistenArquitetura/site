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

      <div className='maps-container'>
        <h3 className='maps-title'>Veja como chegar</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1758.897657989588!2d-51.065128486348485!3d-29.67869535206303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519415cdd3babb3%3A0xf3bea829b4f3bc97!2sNisten%20Arquitetura%20de%20Interiores!5e0!3m2!1spt-BR!2sbr!4v1682558519235!5m2!1spt-BR!2sbr" width="100%" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  )
}