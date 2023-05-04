import Header from "../../components/Header";
import AboutSection from "../../sections/AboutSection";
import BannersCarrouselSection from "../../sections/BannersCarrouselSection";
import ContactSection from "../../sections/ContactSection";
import ReviewsSection from "../../sections/ReviewsSection";

export default function Home(){
  return(
    <>
      <Header/>
      <main>
        <BannersCarrouselSection/>
        <AboutSection/>
        <ContactSection/>
        <ReviewsSection/>
      </main>
    </>
  )
}