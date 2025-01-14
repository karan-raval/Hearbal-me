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
      {/* <div className="page-container drawer-page-content" id="PageContainer">
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
                  {/* <div id="slickSlide-image_qXqyh3" className="slideshow__slide slideshow__slide--active" data-slider-slide-index="1" aria-hidden="false">
                    <div className="slideshow__image box ratio-container lazypreload js lazyloaded" data-bg="//herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1_300x300.jpg?v=1711709793" style={{backgroundPosition: 'center center', backgroundImage: 'url(//herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1.jpg?v=1711709793)'}}>
                    </div>
                  </div>
                </div> */}

                {/* <!-- Slideshow Controls --> */}
                {/* <div className="slideshow__controls">
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
                  </div> */}

                  {/* <!-- Slide Indicators --> */}
                  {/* <ul className="slick-dots">
                    <li data-slider-indicator="" aria-selected="false"><a href="#Slideshow-16105479219103332e" aria-label="Load slide 1" data-slide-number="0"></a></li>
                    <li data-slider-indicator=""><a href="#Slideshow-16105479219103332e" aria-label="Load slide 2" data-slide-number="1"></a></li>
                  </ul>
                </div>
 */}
                {/* <!-- Pause/Play Controls --> */}
                {/* <button type="button" className="slideshow__pause">
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
      </div> */} 
      <div id="shopify-section-16105479219103332e" class="shopify-section index-section index-section--flush index-section--slideshow"><div data-section-id="16105479219103332e" data-section-type="slideshow-section"><div id="SlideshowWrapper-16105479219103332e" class="slideshow-wrapper" role="region" aria-label="slideshow" aria-describedby="slideshow-info" tabindex="-1" data-slider="">
      <div class="slideshow slideshow--adapt" id="Slideshow-16105479219103332e" data-autorotate="true" data-slider-container="" data-speed="5000" data-adapt-height="true" data-slide-nav-a11y="Load slide [slide_number]" data-min-aspect-ratio="1.910828025477707" style="height: 574.62px;"><div id="slickSlide-294a36db-b9d5-420c-91cd-55a8ff0662c4" class="slideshow__slide slideshow__slide--294a36db-b9d5-420c-91cd-55a8ff0662c4 slideshow__slide--active" data-slider-slide-index="0" data-slider-item="" aria-hidden="false">
            
              <div class="slideshow__image box ratio-container js lazyloaded" data-bg="//herbalme.in/cdn/shop/files/HM-Web-Banner_2_300x300.jpg?v=1732697740" data-bgset="//herbalme.in/cdn/shop/files/HM-Web-Banner_2_180x.jpg?v=1732697740 180w 94h,
    //herbalme.in/cdn/shop/files/HM-Web-Banner_2_360x.jpg?v=1732697740 360w 188h,
    //herbalme.in/cdn/shop/files/HM-Web-Banner_2_540x.jpg?v=1732697740 540w 283h,
    //herbalme.in/cdn/shop/files/HM-Web-Banner_2_720x.jpg?v=1732697740 720w 377h,
    //herbalme.in/cdn/shop/files/HM-Web-Banner_2_900x.jpg?v=1732697740 900w 471h,
    //herbalme.in/cdn/shop/files/HM-Web-Banner_2_1080x.jpg?v=1732697740 1080w 565h,
    
    
    
    
    
    
    
    
    
    
    
    
    //herbalme.in/cdn/shop/files/HM-Web-Banner_2.jpg?v=1732697740 1200w 628h" data-parent-fit="contain" style="background-position: center top; background-image: url(&quot;https://herbalme.in/cdn/shop/files/HM-Web-Banner_2.jpg?v=1732697740&quot;);" alt="" src="//herbalme.in/cdn/shop/files/HM-Web-Banner_2_300x300.jpg?v=1732697740">
                
              <picture style="display: none;">
                <source data-srcset="//herbalme.in/cdn/shop/files/HM-Web-Banner_2_180x.jpg?v=1732697740 180w 94h, //herbalme.in/cdn/shop/files/HM-Web-Banner_2_360x.jpg?v=1732697740 360w 188h, //herbalme.in/cdn/shop/files/HM-Web-Banner_2_540x.jpg?v=1732697740 540w 283h, //herbalme.in/cdn/shop/files/HM-Web-Banner_2_720x.jpg?v=1732697740 720w 377h, //herbalme.in/cdn/shop/files/HM-Web-Banner_2_900x.jpg?v=1732697740 900w 471h, //herbalme.in/cdn/shop/files/HM-Web-Banner_2_1080x.jpg?v=1732697740 1080w 565h, //herbalme.in/cdn/shop/files/HM-Web-Banner_2.jpg?v=1732697740 1200w 628h" sizes="1212.1276595744682px" srcset="//herbalme.in/cdn/shop/files/HM-Web-Banner_2_180x.jpg?v=1732697740 180w 94h, //herbalme.in/cdn/shop/files/HM-Web-Banner_2_360x.jpg?v=1732697740 360w 188h, //herbalme.in/cdn/shop/files/HM-Web-Banner_2_540x.jpg?v=1732697740 540w 283h, //herbalme.in/cdn/shop/files/HM-Web-Banner_2_720x.jpg?v=1732697740 720w 377h, //herbalme.in/cdn/shop/files/HM-Web-Banner_2_900x.jpg?v=1732697740 900w 471h, //herbalme.in/cdn/shop/files/HM-Web-Banner_2_1080x.jpg?v=1732697740 1080w 565h, //herbalme.in/cdn/shop/files/HM-Web-Banner_2.jpg?v=1732697740 1200w 628h">
                <img alt="" class="lazyautosizes lazyloaded" data-sizes="auto" data-parent-fit="cover" sizes="1212.1276595744682px"/>
              </picture>
                </div>

            

            <noscript>
              <div class="slideshow__image" style="background-image: url('//herbalme.in/cdn/shop/files/HM-Web-Banner_2_2048x.jpg?v=1732697740'); background-position: center top;">
                
              </div>
            </noscript>

            <div class="slideshow__text-wrap slideshow__text-wrap--desktop">
              <div class="slideshow__text-content slideshow__text-content--vertical-center text-center">
                <div class="page-width">
                  
</div>
              </div>
            </div>
          </div><div id="slickSlide-image_qXqyh3" class="slideshow__slide slideshow__slide--image_qXqyh3" data-slider-slide-index="1" data-slider-item="" aria-hidden="true">
            
              <div class="slideshow__image box ratio-container lazypreload js lazyloaded" data-bg="//herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1_300x300.jpg?v=1711709793" data-bgset="//herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1_180x.jpg?v=1711709793 180w 94h,
    //herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1_360x.jpg?v=1711709793 360w 188h,
    //herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1_540x.jpg?v=1711709793 540w 283h,
    //herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1_720x.jpg?v=1711709793 720w 377h,
    //herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1_900x.jpg?v=1711709793 900w 471h,
    //herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1_1080x.jpg?v=1711709793 1080w 565h,
    //herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1.jpg?v=1711709793 1200w 628h" data-parent-fit="contain" style="background-position: center center; background-image: url(&quot;https://herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1.jpg?v=1711709793&quot;);" alt="" src="//herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1_300x300.jpg?v=1711709793">
                
              <picture style="display: none;"><source data-srcset="//herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1_180x.jpg?v=1711709793 180w 94h, //herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1_360x.jpg?v=1711709793 360w 188h, //herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1_540x.jpg?v=1711709793 540w 283h, //herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1_720x.jpg?v=1711709793 720w 377h, //herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1_900x.jpg?v=1711709793 900w 471h, //herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1_1080x.jpg?v=1711709793 1080w 565h, //herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1.jpg?v=1711709793 1200w 628h" sizes="1212.1276595744682px" srcset="//herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1_180x.jpg?v=1711709793 180w 94h, //herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1_360x.jpg?v=1711709793 360w 188h, //herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1_540x.jpg?v=1711709793 540w 283h, //herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1_720x.jpg?v=1711709793 720w 377h, //herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1_900x.jpg?v=1711709793 900w 471h, //herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1_1080x.jpg?v=1711709793 1080w 565h, //herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1.jpg?v=1711709793 1200w 628h">
              <img alt="" class="lazyautosizes lazyloaded ls-is-cached" data-sizes="auto" data-parent-fit="cover" sizes="1212.1276595744682px"/>
              </picture>
              </div>
            

            <noscript>
              <div class="slideshow__image" style="background-image: url('//herbalme.in/cdn/shop/files/WhatsApp_Image_2024-03-28_at_4.40.49_PM_1_2048x.jpg?v=1711709793'); background-position: center center;">
                
              </div>
            </noscript>

            <div class="slideshow__text-wrap slideshow__text-wrap--desktop">
              <div class="slideshow__text-content slideshow__text-content--vertical-center text-center">
                <div class="page-width">
                  
</div>
              </div>
            </div>
          </div></div>
      <div class="slideshow__controls"><div class="slideshow__arrows" style="width:151px">
            <button class="slideshow__arrow slideshow__arrow-previous" aria-label="Previous slide" data-slider-button=""><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-chevron-left" viewBox="0 0 14 14"><path d="M10.129.604a1.125 1.125 0 0 0-1.591 0L3.023 6.12s.049-.049-.003.004l-.082.08c-.439.44-.44 1.153 0 1.592l5.6 5.6a1.125 1.125 0 0 0 1.59-1.59L5.325 7l4.805-4.805c.44-.439.44-1.151 0-1.59z" fill="#fff"></path></svg></button>
            <button class="slideshow__arrow slideshow__arrow-next" aria-label="Next slide" data-slider-button="" data-slider-button-next=""><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-chevron-right" viewBox="0 0 14 14"><path d="M3.871.604c.44-.439 1.152-.439 1.591 0l5.515 5.515s-.049-.049.003.004l.082.08c.439.44.44 1.153 0 1.592l-5.6 5.6a1.125 1.125 0 0 1-1.59-1.59L8.675 7 3.87 2.195a1.125 1.125 0 0 1 0-1.59z" fill="#fff"></path></svg></button>

            <ul class="slick-dots" data-slider-indicators=""><li class="slick-active" data-slider-indicator="" aria-selected="true">
                  <a href="#Slideshow-16105479219103332e" aria-label="Load slide 1" data-slide-number="0" aria-controls="slickSlide-294a36db-b9d5-420c-91cd-55a8ff0662c4" aria-current="true"></a>
                </li><li data-slider-indicator="">
                  <a href="#Slideshow-16105479219103332e" aria-label="Load slide 2" data-slide-number="1" aria-controls="slickSlide-image_qXqyh3"></a>
                </li></ul>
          </div><button type="button" class="slideshow__pause" data-id="16105479219103332e" aria-live="polite" aria-pressed="false" data-slider-pause="">
              <span class="slideshow__pause-stop">
                <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-pause" viewBox="0 0 9.52 11"><path d="M1.5 11A1.5 1.5 0 0 1 0 9.5v-8a1.5 1.5 0 0 1 3 0v8A1.5 1.5 0 0 1 1.5 11zM8 11a1.5 1.5 0 0 1-1.5-1.5v-8a1.5 1.5 0 1 1 3 0v8A1.5 1.5 0 0 1 8 11z" fill="#fff"></path></svg>
                <span class="icon__fallback-text">Pause slideshow</span>
              </span>
              <span class="slideshow__pause-rotate">
                <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-play" viewBox="0 0 20 40"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.6 16.8L7 1.5C5.6.3 4 .2 2.9.7 1.6 1.4.8 2.7.7 3.8v31.7c0 1.8 1.1 3.3 3.1 3.3 1.5 0 2.5-.5 3.4-1.4l16.4-15.7c1.5-1.4 1.5-3.6 0-4.9z"></path></svg>
                <span class="icon__fallback-text">Play slideshow</span>
              </span>
            </button></div>
    </div>
    <div class="slideshow__text-wrap slideshow__text-wrap--mobile">
      
        <div class="slideshow__arrows slideshow__arrows--mobile">
          <button class="slideshow__arrow slideshow__arrow-previous" aria-label="Previous slide" data-slider-button=""><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-chevron-left" viewBox="0 0 14 14"><path d="M10.129.604a1.125 1.125 0 0 0-1.591 0L3.023 6.12s.049-.049-.003.004l-.082.08c-.439.44-.44 1.153 0 1.592l5.6 5.6a1.125 1.125 0 0 0 1.59-1.59L5.325 7l4.805-4.805c.44-.439.44-1.151 0-1.59z" fill="#fff"></path></svg></button>
          <button class="slideshow__arrow slideshow__arrow-next" aria-label="Next slide" data-slider-button="" data-slider-button-next=""><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-chevron-right" viewBox="0 0 14 14"><path d="M3.871.604c.44-.439 1.152-.439 1.591 0l5.515 5.515s-.049-.049.003.004l.082.08c.439.44.44 1.153 0 1.592l-5.6 5.6a1.125 1.125 0 0 1-1.59-1.59L8.675 7 3.87 2.195a1.125 1.125 0 0 1 0-1.59z" fill="#fff"></path></svg></button>

          <ul class="slick-dots" data-slider-indicators=""><li class="slick-active" data-slider-indicator="" aria-selected="true">
                <a href="#Slideshow-16105479219103332e" aria-label="Load slide 1" data-slide-number="0" aria-controls="slickSlide-294a36db-b9d5-420c-91cd-55a8ff0662c4" aria-current="true"></a>
              </li><li data-slider-indicator="">
                <a href="#Slideshow-16105479219103332e" aria-label="Load slide 2" data-slide-number="1" aria-controls="slickSlide-image_qXqyh3"></a>
              </li></ul>
        </div>
      
</div>
</div>


    </>
  );
}

export default Home;
