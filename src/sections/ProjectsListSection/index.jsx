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
  if(loading) return <p>Loading...</p>

  return(
    <section className="projects-list-section">
      <h1 className="section-title">Projetos assinados</h1>
      <p className="description">Conheça os projetos assinados pela Nisten Arquitetura</p>

      <div className="projects-container">
        {
          data && data.projetos.map((element, index) => {
            return(
              <Link to={`/projetos/${element.id}`} key={index}>
                <div className="project">
                  <img src={element.imagens[0].url} alt="" className="project-image"/>
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