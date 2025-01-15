import React, { useState } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'slickSlide-294a36db-b9d5-420c-91cd-55a8ff0662c4',
      imageUrl: '//herbalme.in/cdn/shop/files/HM-Web-Banner_2.jpg?v=1732697740',
      altImageUrl: '//herbalme.in/cdn/shop/files/HM-Web-Banner_2_2048x.jpg?v=1732697740',
      position: 'center top',
    },
    {
      id: 'slickSlide-image_qXqyh3',
      imageUrl: '//herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1.jpg?v=1711709793',
      altImageUrl: '//herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1_2048x.jpg?v=1711709793',
      position: 'center center',
    },
  ];

  const totalSlides = slides.length;

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="shopify-section index-section index-section--flush index-section--slideshow">
      <div className="slideshow-wrapper" role="region" aria-label="slideshow">
        <div className="slideshow slideshow--adapt" style={{ height: '52.333333333333336vw' }}>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slideshow__slide ${currentSlide === index ? 'slideshow__slide--active' : ''}`}
              style={{
                backgroundImage: `url('${slide.imageUrl}')`,
                backgroundPosition: slide.position,
                backgroundSize: 'cover',
                height: '100%',
                width: '100%',
                display: currentSlide === index ? 'block' : 'none',
              }}
            >
              <noscript>
                <div
                  style={{
                    backgroundImage: `url('${slide.altImageUrl}')`,
                    backgroundPosition: slide.position,
                    backgroundSize: 'cover',
                    height: '100%',
                    width: '100%',
                  }}
                />
              </noscript>
            </div>
          ))}
        </div>

        <div className="slideshow__controls">
          <div className="slideshow__arrows">
            <button
              className="slideshow__arrow slideshow__arrow-previous"
              aria-label="Previous slide"
              onClick={goToPreviousSlide}
            >
              <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-chevron-left" viewBox="0 0 14 14">
                <path d="M10.129.604a1.125 1.125 0 0 0-1.591 0L3.023 6.12s.049-.049-.003.004l-.082.08c-.439.44-.44 1.153 0 1.592l5.6 5.6a1.125 1.125 0 0 0 1.59-1.59L5.325 7l4.805-4.805c.44-.439.44-1.151 0-1.59z" fill="#fff" />
              </svg>
            </button>
            <button
              className="slideshow__arrow slideshow__arrow-next"
              aria-label="Next slide"
              onClick={goToNextSlide}
            >
              <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-chevron-right" viewBox="0 0 14 14">
                <path d="M3.871.604c.44-.439 1.152-.439 1.591 0l5.515 5.515s-.049-.049.003.004l.082.08c.439.44.44 1.153 0 1.592l-5.6 5.6a1.125 1.125 0 0 1-1.59-1.59L8.675 7 3.87 2.195a1.125 1.125 0 0 1 0-1.59z" fill="#fff" />
              </svg>
            </button>
          </div>

          <ul className="slick-dots">
            {slides.map((_, index) => (
              <li key={index} className={currentSlide === index ? 'slick-active' : ''}>
                <button
                  onClick={() => goToSlide(index)}
                  aria-label={`Load slide ${index + 1}`}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slider;
