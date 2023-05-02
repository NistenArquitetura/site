import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import './styles/app.sass'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const apolloClient = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/clgw70a251ad001tfcjqb91ml/master",
  cache: new InMemoryCache
})

export default function App() {  
  return (
    <ApolloProvider client={apolloClient}>
      <RouterProvider router={router}/>
    </ApolloProvider>
  )
}
