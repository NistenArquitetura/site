import { useQuery, gql } from "@apollo/client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { useState, useEffect } from "react"

import './styles.sass'
import 'swiper/css'

const GET_REVIEWS = gql`
  query GetReviews {
    avaliacoes {
      cliente
      mensagem
    }
  }
`

export default function ReviewsSection(){
  const { data, loading } = useQuery(GET_REVIEWS)
  const [mobileSlides, setMobileSlides] = useState()

  useEffect(() => {
    if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i)) {
      setMobileSlides(1)
    } else {
      setMobileSlides(2)
    }
  }, [mobileSlides])

  if(loading) return <p>Loading...</p>

  return(
    <section className="reviews-section">
      <h1 className="section-title">O que dizem nossos clientes</h1>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        delay={7000}
        autoplay={true}
        slidesPerView={mobileSlides}
      >
        {
          data && data.avaliacoes.map((element, index) => {
            return(
              <SwiperSlide key={index}>
                <div className="card-review">
                  <div>
                    <h3 className="card-client-name">{element.cliente}</h3>
                    <img src="./images/stars.svg" alt="" width={120}/>
                  </div>
                  <p className="card-message">{element.mensagem}</p>
                </div>
              </SwiperSlide>
            )
          })
          
        }

      </Swiper>
      
    </section>
  )
}