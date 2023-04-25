import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import ProjectDetails from "../pages/ProjectDetails"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: []
  },
  {
    path: "projetos/:id",
    element: <ProjectDetails/>,
    children: []
  }
])