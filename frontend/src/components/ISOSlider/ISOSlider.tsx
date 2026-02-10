import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import * as FaIcons from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './ISOSlider.css';

interface ISOCard {
  to: string;
  icon: keyof typeof FaIcons;
  title: string;
  description: string;
  benefits: string[];
}

interface ISOSliderProps {
  cards: ISOCard[];
}

const ISOSlider: FC<ISOSliderProps> = ({ cards }) => {
  // Center slides when there are fewer cards than the max slidesPerView
  const shouldCenter = cards.length <= 4;

  return (
    <div className="iso-slider-container">
      <button className="iso-slider-arrow iso-slider-arrow-prev">
        <FaIcons.FaChevronLeft />
      </button>
      <div className="iso-slider-wrapper">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: '.iso-slider-arrow-prev',
            nextEl: '.iso-slider-arrow-next',
          }}
          loop={cards.length > 4}
          autoplay={cards.length > 4 ? {
            delay: 5000,
            disableOnInteraction: false,
          } : false}
          centerInsufficientSlides={shouldCenter}
          breakpoints={{
            640: {
              slidesPerView: Math.min(2, cards.length),
              spaceBetween: 20,
            },
            768: {
              slidesPerView: Math.min(2, cards.length),
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: Math.min(3, cards.length),
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: Math.min(4, cards.length),
              spaceBetween: 30,
            },
          }}
          className="iso-swiper"
        >
          {cards.map((card, index) => {
            const IconComponent = FaIcons[card.icon];
            return (
              <SwiperSlide key={index}>
                <Link to={card.to} className="certification-card">
                  <div className="card-icon">
                    {IconComponent && <IconComponent />}
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <ul className="benefits-list">
                    {card.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <button className="iso-slider-arrow iso-slider-arrow-next">
        <FaIcons.FaChevronRight />
      </button>
    </div>
  );
};

export default ISOSlider;
