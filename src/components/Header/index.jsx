import './styles.sass'
import { Link } from 'react-router-dom'

export default function Header(props){
  const { noMenus } = props

  const menuItems = [
    {
      name: 'HOME',
      route: '/'
    },
    {
      name: 'PROJETOS',
      route: '#projects'
    },
    {
      name: 'SOBRE',
      route: '#about'
    },
    {
      name: 'CONTATO',
      route: '#contact'
    }
  ]
    
  return(
    <header className="header">
      <Link to="/">
        <div className="logo-container">
          <img src="../images/nisten-logo.png" alt="logo" width={220} className='logo'/>
        </div>
      </Link>
    { noMenus && noMenus == true ? (null) : (
      <div className="menus-container">
      {menuItems && menuItems.map((element, index) => {
        return(     
          <nav className="nav-item" key={index}>
            <a href={element.route} className="nav-link">
              {element.name}
            </a>
          </nav>
        )
      })}
    </div>
    )}
    </header>
  )
}