import { useQuery, gql } from "@apollo/client"
import { Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay, EffectFade } from 'swiper'

import 'swiper/css'
import 'swiper/css'
import 'swiper/css/effect-fade'
import './styles.sass'

const GET_BANNERS = gql`
  query getCarroselDesktop {
    bannersCarrossels {
      bannerDesktop {
        url
      }
      bannerMobile {
        url
      }
    }
  }
`

export default function BannersCarrouselSection(){
  const { data, loading, error } = useQuery(GET_BANNERS)

  if(error) return console.log(error)
  if(loading) return <p>Loading...</p>

  console.log('data 2', data)

  return(
    <section className="banners-carrousel-section">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={true}
        delay={7000}
        loop={true}
      >
        {
          data && data.bannersCarrossels.map((element, index) => {
            return(
              <SwiperSlide key={index}>
                <picture>
                  <source srcSet={element.bannerMobile.url} media="(max-width: 600px)"/>
                  <img src={element.bannerDesktop.url} alt="" loading="lazy"/>
                </picture>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}