import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import * as FaIcons from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
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
  return (
    <div className="iso-slider-container">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
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
                <h4>{card.title}</h4>
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
  );
};

export default ISOSlider;
