import ConversionButton from '../../components/ConversionButton'
import './styles.sass'

export default function AboutSection(){


  return(
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="image-container">
          <img src="./images/adriana.jpg" alt="sobre" width={450} className='about-image'/>
        </div>

        <div className="about-infos">
          <h1 className="about-section-title">ADRIANA SCHERER</h1>
          <p className="about-text">
          Arquiteta fundadora do escritório. Graduada pela Universidade Feevale em 2016, atuante no ramo de interiores há mais de 15 anos, contando com mais de uma década de experiência criando espaços inovadores em arquitetura e interiores. Já participou de diversos grandes projetos como: hotéis, comércios, lojas em shopping, projetos empresariais, residenciais e prefeitura. Com mente inquieta ama trazer uma cara nova à residência dos clientes
          </p>
          <ConversionButton
            text="Entre em contato"
            whatsIcon={true}
          />
        </div>
      </div>
    </section>
  )
}