import Header from "../../components/Header";
import AboutSection from "../../sections/AboutSection";
import BannersCarrouselSection from "../../sections/BannersCarrouselSection";
import ContactSection from "../../sections/ContactSection";

export default function Home(){
  return(
    <>
      <Header/>
      <main>
        <BannersCarrouselSection/>
        <AboutSection/>
        <ContactSection/>
      </main>
    </>
  )
}