import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutSection from "../../sections/AboutSection";
import BannersCarrouselSection from "../../sections/BannersCarrouselSection";
import ContactSection from "../../sections/ContactSection";
import ProjectsListSection from "../../sections/ProjectsListSection";
import ReviewsSection from "../../sections/ReviewsSection";
import { Helmet } from "react-helmet";

export default function Home(){
  return(
    <>
      <Helmet>
        <meta name="title" content="Nisten Arquitetura de Interiores | Campo Bom"/>
        <meta name="description" content="Desenvolvemos projetos com personalidades distintas, transformamos seu ambiente em um ninho aconchegante e transformamos a forma de como as pessoas se relacionam com os espaços."/>
      </Helmet>
      <Header/>
      <main>
        <BannersCarrouselSection/>
        <AboutSection/>
        <ProjectsListSection/>
        <ContactSection/>
        <ReviewsSection/>
      </main>
      <Footer/>
    </>
  )
}