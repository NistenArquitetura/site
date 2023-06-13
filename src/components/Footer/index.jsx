import './styles.sass'

export default function Footer(){
  const infos = [
    {
      icon: 'localization',
      text: 'Edifício comercial Steigleder - R. Aimoré, 60 - sala 104 - Centro, Campo Bom - RS'
    },
    {
      icon: 'email',
      text: 'nistenarquitetura@gmail.com'
    },
    {
      icon: 'phone',
      text: '(51) 99657-9232'
    },

  ]

  const socialMedias = [
    {
      icon: 'instagram',
      link: 'https://instagram.com/nistenarquitetura'
    },
    {
      icon: 'whatsapp',
      link: 'https://wa.me/5551996579232'
    },
    {
      icon: 'facebook',
      link: 'https://www.facebook.com/nistenarquitetura'
    },
    {
      icon: 'pinterest',
      link: 'https://br.pinterest.com/NistenArquitetura/'
    },
  ]
  
  return(
    <footer className="footer">
      <div className="infos-container">
        <div className='infos'>
        {
          infos && infos.map((element, index) => {
            return(
              <div key={index} className="info">
                <img src={`../icons/${element.icon}.svg`} alt={element.icon} width={24}/>
                <span>{element.text}</span>
              </div>
            )
          })
        }
        </div>
       
        <div className="social-medias">
          {
            socialMedias && socialMedias.map((element, index) => {
              return(
                <a key={index} className="social-media" href={element.link} target="_blank" rel="external noreferrer">
                  <img src={`../icons/${element.icon}.svg`} alt={element.icon} width={28}/>
                </a>
              )
            })
          }
        </div>
      </div>

      <div className="brand-container">
        <a href="https://www.zeelabtech.com.br" target="_blank" rel="external noreferrer">
          <img src="../icons/logo-zeelab.svg" alt="zeelab" width={140}/>
        </a>

        <span>Nisten Arquitetura © 2023 - Todos os direitos reservados</span>
      </div>
    </footer>
  )
}