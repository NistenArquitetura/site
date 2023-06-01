import { useQuery, gql } from "@apollo/client"
import { Link } from "react-router-dom"
import './styles.sass'

const GET_PROJECTS = gql`
query MyQuery {
  projetos {
    nome
    id
    imagens {
      url
    }
  }
}`

export default function ProjectsListSection(){
  const { data, loading } = useQuery(GET_PROJECTS)
  const imagesGallery = []
  if(loading) return <p>Loading...</p>

  function createProjectsImagesGallery(){
    data.projetos.map((element) => {
      for(let i=0; i < 3; i++){
        imagesGallery.push({
          id: element.id,
          nome: element.nome,
          imagens: [element.imagens[i].url]
        })
      }
    })
  }

  createProjectsImagesGallery()

  return(
    <section className="projects-list-section" id="projects">
      <h1 className="section-title">Projetos assinados</h1>
      <p className="description">Conheça os projetos assinados pela Nisten Arquitetura</p>

      <div className="projects-container">
        {
          imagesGallery && imagesGallery.map((element, index) => { 
              return(
                <Link to={`/projetos/${element.id}`} key={index}>
                  <div className="project">
                    {element.imagens.map((image, i) => {
                      return(
                        <img src={image} alt="" className="project-image" key={i}/>
                      )
                    })}
                    <div className="project-name-bg">
                      <span className="project-name">{element.nome}</span>
                    </div>
                  </div>
                </Link>
              )
          })
        }
      </div>

    </section>
  )
}