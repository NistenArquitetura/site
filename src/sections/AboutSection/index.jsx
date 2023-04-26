import ConversionButton from '../../components/ConversionButton'
import './styles.sass'

export default function AboutSection(){
  const aboutIndividual = [
    {
      name: 'Adriana Scherer',
      text: 'Arquiteta fundadora do escritório. Graduada pela Universidade Feevale em 2016, atuante no ramo de interiores há mais de 15 anos, contando com mais de uma década de experiência criando espaços inovadores em arquitetura e interiores. Já participou de diversos grandes projetos como: hotéis, comércios, lojas em shopping, projetos empresariais, residenciais e prefeitura. Com mente inquieta ama trazer uma cara nova à residência dos clientes',
      image: './images/adriana.jpg'
    },
    {
      name: 'Tamires Ramos',
      text: 'Arquiteta formada pela Universidade Feevale, sócia do escritório Nisten. Também graduada em Design Industrial, exerce a profissão desde 2011. Atuou na elaboração e gestão de obra de projetos efêmeros durante 5 anos, atendendo grandes empresas nos estados do RS, SP, RJ. além de executar projetos comerciais, residenciais, hotelaria, encaminhamento de prefeitura e mais de 12 anos exercendo na área de interiores.',
      image: './images/tamires.jpg'
    }
  ]

  return(
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="image-container">
          <img src="./images/about.jpg" alt="sobre" width={450} className='about-image'/>
        </div>

        <div className="about-infos">
          <h1 className="about-section-title">QUEM SOMOS</h1>
          <p className="about-text">
            Fundado no ano de 2016, o escritório é voltado a projetos de arquitetura de interiores residenciais, reformas, ampliações, acompanhamentos de etapas construtivas da execução de obras e também no desenvolvimento de projetos comerciais e corporativos. Com propósito de trazer funcionalidade, conforto e sofisticação a vida dos clientes, nossos projetos são diferenciados, pois analisamos o estilo de cada casa, tornando cada projeto único. Estamos localizadas em Campo Bom, mas atuamos em todo o Rio Grande do Sul.
            O nome NISTEN do escritório foi proposto com origem alemã com significado de "FAZER UM NINHO" Acreditamos que assim como os ninhos são estruturas únicas, os lares nunca serão iguais uns aos outros, mesmo feitos pelo mesmo ser. Desenvolvemos projetos com personalidades distintas, transformamos seu ambiente em um ninho aconchegante e mudamos a forma de como as pessoas se relacionam com os espaços.
          </p>
          <ConversionButton
            text="Entre em contato"
            whatsIcon={true}
          />
        </div>
      </div>

      <div className="about-individual-container">
        {
          aboutIndividual && aboutIndividual.map((element, index) => {
            return(
              <div className="about-individual" key={index}>
                <img src={element.image} alt={element.name} width={280} />
                <div className="infos">
                  <h3 className="name">
                    {element.name}
                  </h3>
                  <p className="about-text">
                    {element.text}
                  </p>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}