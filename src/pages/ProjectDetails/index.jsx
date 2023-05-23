import { useParams } from "react-router-dom"
import { gql, useQuery } from "@apollo/client"
import { Image } from "antd"
import Header from "../../components/Header"
import ImageList from "@mui/material/ImageList"
import './styles.sass'

const GET_PROJECT = gql`
query MyQuery($id: ID!) {
  projetos(where: {id: $id}) {
    nome
    id
    imagens {
      url
    }
  }
}`


export default function ProjectDetails(){
  const { id } = useParams()
  const {loading, data} = useQuery(GET_PROJECT, {
    variables: {id: id}
  })

  if(loading) return <p>Loading...</p>

  return(
    <>
    <Header noMenus={true}/>
    <main>
      <section className="project-details-section">
        <h1 className="section-title">{data.projetos[0].nome}</h1>

        <div className="images-container">
          <ImageList variant="masonry" cols={2} gap={8}>
            {
              data.projetos[0] && data.projetos[0].imagens.map((element, index) => {
                return(
                  <Image src={element.url} key={index} rootClassName="img-grid-item"/>
                )
              })
            }
          </ImageList>
        </div>
      </section>
    </main>  
    </>
  )
}