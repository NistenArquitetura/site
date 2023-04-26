import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import './styles/app.sass'

export default function App() {  
  return (
    <RouterProvider router={router}/>
  )
}
