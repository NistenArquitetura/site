import Header from "../../components/Header";
import AboutSection from "../../sections/AboutSection";
import ContactSection from "../../sections/ContactSection";

export default function Home(){
  return(
    <>
      <Header/>
      <main>
        <AboutSection/>
        <ContactSection/>
      </main>
    </>
  )
}