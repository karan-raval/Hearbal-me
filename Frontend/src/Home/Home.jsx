import React, { useEffect } from 'react';
// import './Home.css';  // Import the CSS file
import 'slick-carousel/slick/slick.css'; // Import the slider CSS
import 'slick-carousel/slick/slick-theme.css'; // Import the slider theme CSS (optional)
import $ from 'jquery'; // Import jQuery
import 'slick-carousel'; // Import the slider JS

const Home = () => {
  useEffect(() => {
    // Initialize the slider after the component mounts
    $(document).ready(() => {
      $('.slideshow').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: true,
      });
    });
  }, []);

  return (
    <>
      <div className="page-container drawer-page-content" id="PageContainer">
        <main className="main-content js-focus-hidden" id="MainContent" role="main" tabIndex="-1">
          <div id="shopify-section-16105479219103332e" className="shopify-section index-section index-section--flush index-section--slideshow">
            <div data-section-id="16105479219103332e" data-section-type="slideshow-section">
              <div id="SlideshowWrapper-16105479219103332e" className="slideshow-wrapper" role="region" aria-label="slideshow" aria-describedby="slideshow-info" tabIndex="-1">
                <div className="slideshow slideshow--adapt" id="Slideshow-16105479219103332e" data-autorotate="true" data-speed="5000" data-adapt-height="true" data-slide-nav-a11y="Load slide [slide_number]" data-min-aspect-ratio="1.910828025477707" style={{height: '705px'}}>
                  
                  {/* <!-- Slide 1 --> */}
                  <div id="slickSlide-294a36db-b9d5-420c-91cd-55a8ff0662c4" className="slideshow__slide" data-slider-slide-index="0" aria-hidden="true">
                    <div className="slideshow__image box ratio-container js lazyloaded" data-bg="//herbalme.in/cdn/shop/files/HM-Web-Banner_2_300x300.jpg?v=1732697740" style={{backgroundPosition: 'center center', backgroundImage: 'url(//herbalme.in/cdn/shop/files/HM-Web-Banner_2.jpg?v=1732697740)'}}>
                    </div>
                  </div>

                  {/* <!-- Slide 2 --> */}
                  <div id="slickSlide-image_qXqyh3" className="slideshow__slide slideshow__slide--active" data-slider-slide-index="1" aria-hidden="false">
                    <div className="slideshow__image box ratio-container lazypreload js lazyloaded" data-bg="//herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1_300x300.jpg?v=1711709793" style={{backgroundPosition: 'center center', backgroundImage: 'url(//herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1.jpg?v=1711709793)'}}>
                    </div>
                  </div>
                </div>

                {/* <!-- Slideshow Controls --> */}
                <div className="slideshow__controls">
                  <div className="slideshow__arrows">
                    <button className="slideshow__arrow slideshow__arrow-previous" aria-label="Previous slide">
                      <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-chevron-left" viewBox="0 0 14 14">
                        <path d="M10.129.604a1.125 1.125 0 0 0-1.591 0L3.023 6.12s.049-.049-.003.004l-.082.08c-.439.44-.44 1.153 0 1.592l5.6 5.6a1.125 1.125 0 0 0 1.59-1.59L5.325 7l4.805-4.805c.44-.439.44-1.151 0-1.59z" fill="#fff"></path>
                      </svg>
                    </button>
                    <button className="slideshow__arrow slideshow__arrow-next" aria-label="Next slide">
                      <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-chevron-right" viewBox="0 0 14 14">
                        <path d="M3.871.604c.44-.439 1.152-.439 1.591 0l5.515 5.515s-.049-.049.003.004l.082.08c.439.44.44 1.153 0 1.592l-5.6 5.6a1.125 1.125 0 0 1-1.59-1.59L8.675 7 3.87 2.195a1.125 1.125 0 0 1 0-1.59z" fill="#fff"></path>
                      </svg>
                    </button>
                  </div>

                  {/* <!-- Slide Indicators --> */}
                  <ul className="slick-dots">
                    <li data-slider-indicator="" aria-selected="false"><a href="#Slideshow-16105479219103332e" aria-label="Load slide 1" data-slide-number="0"></a></li>
                    <li data-slider-indicator=""><a href="#Slideshow-16105479219103332e" aria-label="Load slide 2" data-slide-number="1"></a></li>
                  </ul>
                </div>

                {/* <!-- Pause/Play Controls --> */}
                <button type="button" className="slideshow__pause">
                  <span className="slideshow__pause-stop">
                    <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-pause" viewBox="0 0 9.52 11">
                      <path d="M1.5 11A1.5 1.5 0 0 1 0 9.5v-8a1.5 1.5 0 0 1 3 0v8A1.5 1.5 0 0 1 1.5 11zM8 11a1.5 1.5 0 0 1-1.5-1.5v-8a1.5 1.5 0 1 1 3 0v8A1.5 1.5 0 0 1 8 11z" fill="#fff"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
