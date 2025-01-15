import React from 'react';
import Slider from '../components/Slider'; // Adjust the path as necessary

const Home = () => {
  return (
    // <div>
    //   <Slider />
    //   {/* Other components or content can go here */}
    // </div>
    <>
     <div className="page-container drawer-page-content" id="PageContainer">
    <main className="main-content js-focus-hidden" id="MainContent" role="main" tabindex="-1">
      {/* <!-- BEGIN content_for_index --> */}
      <Slider/>
      
      <div id="shopify-section-collection" className="shopify-section index-section">
        <div className="page-width">
          <div className="section-header text-center">
            <h2>Best Sellers</h2>
          </div>

          <ul className="grid grid--uniform grid--view-items">
            <li className="grid__item grid__item--collection small--one-half medium-up--one-quarter">
              <div className="grid-view-item product-card">
                <a className="grid-view-item__link grid-view-item__image-container full-width-link"
                  href="/collections/best-sellers/products/dark-brown-200g-certified-natural-henna-hair-color">
                  <span className="visually-hidden">Dark Brown - Natural Hair Color - Ecocert Certified -
                    200g</span>
                </a>

                {/* <style>
                  #ProductCardImage-collection-6075133821081 {
                    max-width: 250px;
                    max-height: 250px;
                  }

                  #ProductCardImageWrapper-collection-6075133821081 {
                    max-width: 250px;
                  }
                </style> */}

                <div className="product-card__image-with-placeholder-wrapper" data-image-loading-animation>
                  <div id="ProductCardImageWrapper-collection-6075133821081"
                    className="grid-view-item__image-wrapper product-card__image-wrapper js">
                    <div 
                     style={{
          paddingTop: '100%'
        }}
                    >
                      <img id="ProductCardImage-collection-6075133821081" className="grid-view-item__image lazyload"
                        alt="Dark Brown Natural Hair Color"
                        data-src="//herbalme.in/cdn/shop/files/2_{width}x.png?v=1711690372"
                        data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0"
                        data-sizes="auto" data-image />
                    </div>
                  </div>
                </div>

                <noscript>
                  <img className="grid-view-item__image" src="//herbalme.in/cdn/shop/files/2_250x250@2x.png?v=1711690372"
                    alt="Dark Brown Natural Hair Color" 
                      style={{
          maxWidth: '250px'
        }}
                     />
                </noscript>

                <div className="h4 grid-view-item__title product-card__title" aria-hidden="true">
                  Dark Brown - Natural Hair Color - Ecocert Certified - 200g
                </div>

                <dl className="price price--listing price--on-sale">
                  <div className="price__regular">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Regular price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--regular">Rs. 384.00
                      </span>
                    </dd>
                  </div>
                  <div className="price__sale">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Sale price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--sale">Rs. 384.00
                      </span>
                    </dd>
                    <div className="price__compare">
                      <dt>
                        <span className="visually-hidden visually-hidden--inline">Regular price</span>
                      </dt>
                      <dd>
                        <s className="price-item price-item--regular">
                          Rs. 495.00
                        </s>
                      </dd>
                    </div>
                  </div>
                  <div className="price__unit">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Unit price</span>
                    </dt>
                    <dd className="price-unit-price">
                      <span></span><span aria-hidden="true">/</span><span
                        className="visually-hidden">per&nbsp;</span><span></span>
                    </dd>
                  </div>
                  <div className="price__badges price__badges--listing">
                    <span className="price__badge price__badge--sale" aria-hidden="true">
                      <span>Sale</span>
                    </span>
                    <span className="price__badge price__badge--sold-out">
                      <span>Sold out</span>
                    </span>
                  </div>
                </dl>
              </div>
            </li>

            <li className="grid__item grid__item--collection small--one-half medium-up--one-quarter">
              <div className="grid-view-item product-card">
                <a className="grid-view-item__link grid-view-item__image-container full-width-link"
                  href="/collections/best-sellers/products/soft-black-200g-certified-natural-henna-hair-color">
                  <span className="visually-hidden">Soft Black - Natural Hair Color - Ecocert Certified -
                    200g</span>
                </a>

                {/* <style>
                  #ProductCardImage-collection-6073234882713 {
                    max-width: 250px;
                    max-height: 250px;
                  }

                  #ProductCardImageWrapper-collection-6073234882713 {
                    max-width: 250px;
                  }
                </style> */}

                <div className="product-card__image-with-placeholder-wrapper" data-image-loading-animation>
                  <div id="ProductCardImageWrapper-collection-6073234882713"
                    className="grid-view-item__image-wrapper product-card__image-wrapper js">
                    <div
                     style={{
          paddingTop: '100%'
        }}
                    >
                      <img id="ProductCardImage-collection-6073234882713" className="grid-view-item__image lazyload"
                        alt="Soft Black Natural Hair Color"
                        data-src="//herbalme.in/cdn/shop/files/6_{width}x.png?v=1711690475"
                        data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0"
                        data-sizes="auto" data-image />
                    </div>
                  </div>
                </div>

                <noscript>
                  <img className="grid-view-item__image" src="//herbalme.in/cdn/shop/files/6_250x250@2x.png?v=1711690475"
                    alt="Soft Black Natural Hair Color"
                      style={{
          maxWidth: '250px'
        }} 
                     />
                </noscript>

                <div className="h4 grid-view-item__title product-card__title" aria-hidden="true">
                  Soft Black - Natural Hair Color - Ecocert Certified - 200g
                </div>

                <dl className="price price--listing price--on-sale">
                  <div className="price__regular">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Regular price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--regular">Rs. 384.00
                      </span>
                    </dd>
                  </div>
                  <div className="price__sale">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Sale price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--sale">Rs. 384.00
                      </span>
                    </dd>
                    <div className="price__compare">
                      <dt>
                        <span className="visually-hidden visually-hidden--inline">Regular price</span>
                      </dt>
                      <dd>
                        <s className="price-item price-item--regular">
                          Rs. 495.00
                        </s>
                      </dd>
                    </div>
                  </div>
                  <div className="price__unit">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Unit price</span>
                    </dt>
                    <dd className="price-unit-price">
                      <span></span><span aria-hidden="true">/</span><span
                        className="visually-hidden">per&nbsp;</span><span></span>
                    </dd>
                  </div>
                  <div className="price__badges price__badges--listing">
                    <span className="price__badge price__badge--sale" aria-hidden="true">
                      <span>Sale</span>
                    </span>
                    <span className="price__badge price__badge--sold-out">
                      <span>Sold out</span>
                    </span>
                  </div>
                </dl>
              </div>
            </li>

            <li className="grid__item grid__item--collection small--one-half medium-up--one-quarter">
              <div className="grid-view-item product-card">
                <a className="grid-view-item__link grid-view-item__image-container full-width-link"
                  href="/collections/best-sellers/products/shampoo-bar-henna-100-natural-125-g">
                  <span className="visually-hidden">Shampoo Bar - Henna - 100% Natural - 125g</span>
                </a>

                {/* <style>
                  #ProductCardImage-collection-7819151114393 {
                    max-width: 250px;
                    max-height: 250px;
                  }

                  #ProductCardImageWrapper-collection-7819151114393 {
                    max-width: 250px;
                  }
                </style> */}

                <div className="product-card__image-with-placeholder-wrapper" data-image-loading-animation>
                  <div id="ProductCardImageWrapper-collection-7819151114393"
                    className="grid-view-item__image-wrapper product-card__image-wrapper js">
                    <div 
                     style={{
          paddingTop: '100%'
        }}
                    >
                      <img id="ProductCardImage-collection-7819151114393" className="grid-view-item__image lazyload"
                        alt="Shampoo Bar - Henna- 100% Natural"
                        data-src="//herbalme.in/cdn/shop/files/21_{width}x.png?v=1711691830"
                        data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0"
                        data-sizes="auto" data-image />
                    </div>
                  </div>
                </div>

                <noscript>
                  <img className="grid-view-item__image" src="//herbalme.in/cdn/shop/files/21_250x250@2x.png?v=1711691830"
                    alt="Shampoo Bar - Henna- 100% Natural"
                     style={{
          maxWidth: '250px'
        }}
                     />
                </noscript>

                <div className="h4 grid-view-item__title product-card__title" aria-hidden="true">
                  Shampoo Bar - Henna - 100% Natural - 125g
                </div>

                <dl className="price price--listing price--on-sale">
                  <div className="price__regular">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Regular price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--regular">Rs. 195.00
                      </span>
                    </dd>
                  </div>
                  <div className="price__sale">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Sale price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--sale">Rs. 195.00
                      </span>
                    </dd>
                    <div className="price__compare">
                      <dt>
                        <span className="visually-hidden visually-hidden--inline">Regular price</span>
                      </dt>
                      <dd>
                        <s className="price-item price-item--regular">
                          Rs. 395.00
                        </s>
                      </dd>
                    </div>
                  </div>
                  <div className="price__unit">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Unit price</span>
                    </dt>
                    <dd className="price-unit-price">
                      <span></span><span aria-hidden="true">/</span><span
                        className="visually-hidden">per&nbsp;</span><span></span>
                    </dd>
                  </div>
                  <div className="price__badges price__badges--listing">
                    <span className="price__badge price__badge--sale" aria-hidden="true">
                      <span>Sale</span>
                    </span>
                    <span className="price__badge price__badge--sold-out">
                      <span>Sold out</span>
                    </span>
                  </div>
                </dl>
              </div>
            </li>

            <li className="grid__item grid__item--collection small--one-half medium-up--one-quarter">
              <div className="grid-view-item product-card">
                <a className="grid-view-item__link grid-view-item__image-container full-width-link"
                  href="/collections/best-sellers/products/turmeric-soap-bar-certified-organic-125-gms">
                  <span className="visually-hidden">Cream Soap - Turmeric - 100% Natural - 125g</span>
                </a>

                {/* <style>
                  #ProductCardImage-collection-7389999267993 {
                    max-width: 250px;
                    max-height: 250px;
                  }

                  #ProductCardImageWrapper-collection-7389999267993 {
                    max-width: 250px;
                  }
                </style> */}

                <div className="product-card__image-with-placeholder-wrapper" data-image-loading-animation>
                  <div id="ProductCardImageWrapper-collection-7389999267993"
                    className="grid-view-item__image-wrapper product-card__image-wrapper js">
                    <div 
                     style={{
          paddingTop: '100%'
        }}
                    >
                      <img id="ProductCardImage-collection-7389999267993" className="grid-view-item__image lazyload"
                        alt="Cream Soap - Turmeric - 100% Natural"
                        data-src="//herbalme.in/cdn/shop/files/25_{width}x.png?v=1711694223"
                        data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0"
                        data-sizes="auto" data-image />
                    </div>
                  </div>
                </div>

                <noscript>
                  <img className="grid-view-item__image" src="//herbalme.in/cdn/shop/files/25_250x250@2x.png?v=1711694223"
                    alt="Cream Soap - Turmeric - 100% Natural" 
                     style={{
          maxWidth: '250px'
        }}
                     />
                </noscript>

                <div className="h4 grid-view-item__title product-card__title" aria-hidden="true">
                  Cream Soap - Turmeric - 100% Natural - 125g
                </div>

                <dl className="price price--listing price--on-sale">
                  <div className="price__regular">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Regular price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--regular">Rs. 195.00
                      </span>
                    </dd>
                  </div>
                  <div className="price__sale">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Sale price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--sale">Rs. 195.00
                      </span>
                    </dd>
                    <div className="price__compare">
                      <dt>
                        <span className="visually-hidden visually-hidden--inline">Regular price</span>
                      </dt>
                      <dd>
                        <s className="price-item price-item--regular">
                          Rs. 395.00
                        </s>
                      </dd>
                    </div>
                  </div>
                  <div className="price__unit">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Unit price</span>
                    </dt>
                    <dd className="price-unit-price">
                      <span></span><span aria-hidden="true">/</span><span
                        className="visually-hidden">per&nbsp;</span><span></span>
                    </dd>
                  </div>
                  <div className="price__badges price__badges--listing">
                    <span className="price__badge price__badge--sale" aria-hidden="true">
                      <span>Sale</span>
                    </span>
                    <span className="price__badge price__badge--sold-out">
                      <span>Sold out</span>
                    </span>
                  </div>
                </dl>
              </div>
            </li>
          </ul>

          <hr className="hr--invisible" aria-hidden="true" />
          <div className="text-center">
            <a href="/collections/best-sellers" className="btn"
              aria-label="View all products in the Best Selling Natural &amp; Organic Products collection">
              View all
            </a>
          </div>
        </div>
      </div>
      <div id="shopify-section-16102098469f87b3a5" className="shopify-section index-section index-section--flush">
        <div data-section-id="16102098469f87b3a5" data-section-type="hero-section">
          <div
            className="hero hero--medium hero-16102098469f87b3a5 hero__overlay box ratio-container lazyload js"
            id="Hero-16102098469f87b3a5"
            data-layout="full_width"
            data-bg="//herbalme.in/cdn/shop/files/MG_2067_300x300.jpg?v=1640335716"
            data-bgset="//herbalme.in/cdn/shop/files/MG_2067_180x.jpg?v=1640335716 180w 120h,
              //herbalme.in/cdn/shop/files/MG_2067_360x.jpg?v=1640335716 360w 240h,
              //herbalme.in/cdn/shop/files/MG_2067_540x.jpg?v=1640335716 540w 360h,
              //herbalme.in/cdn/shop/files/MG_2067_720x.jpg?v=1640335716 720w 480h,
              //herbalme.in/cdn/shop/files/MG_2067_900x.jpg?v=1640335716 900w 600h,
              //herbalme.in/cdn/shop/files/MG_2067_1080x.jpg?v=1640335716 1080w 720h,
              //herbalme.in/cdn/shop/files/MG_2067_1296x.jpg?v=1640335716 1296w 864h,
              //herbalme.in/cdn/shop/files/MG_2067_1512x.jpg?v=1640335716 1512w 1008h,
              //herbalme.in/cdn/shop/files/MG_2067_1728x.jpg?v=1640335716 1728w 1152h,
              //herbalme.in/cdn/shop/files/MG_2067_1950x.jpg?v=1640335716 1950w 1300h,
              //herbalme.in/cdn/shop/files/MG_2067_2100x.jpg?v=1640335716 2100w 1400h,
              //herbalme.in/cdn/shop/files/MG_2067_2260x.jpg?v=1640335716 2260w 1507h,
              //herbalme.in/cdn/shop/files/MG_2067_2450x.jpg?v=1640335716 2450w 1633h,
              //herbalme.in/cdn/shop/files/MG_2067_2700x.jpg?v=1640335716 2700w 1800h,
              //herbalme.in/cdn/shop/files/MG_2067_3000x.jpg?v=1640335716 3000w 2000h,
              //herbalme.in/cdn/shop/files/MG_2067_3350x.jpg?v=1640335716 3350w 2233h,
              //herbalme.in/cdn/shop/files/MG_2067_3750x.jpg?v=1640335716 3750w 2500h,
              //herbalme.in/cdn/shop/files/MG_2067_4100x.jpg?v=1640335716 4100w 2733h,
              //herbalme.in/cdn/shop/files/MG_2067.jpg?v=1640335716 5184w 3456h"
            data-sizes="auto"
            data-parent-fit="cover"
            style={{
              backgroundImage: "url('//herbalme.in/cdn/shop/files/MG_2067_300x300.jpg?v=1640335716')", // Set background image
              backgroundPosition: 'center',
              backgroundSize: 'cover', // Ensure the background covers the area
            }}
            data-image-loading-animation
          >
            <div className="hero__inner">
              <div className="page-width text-center">
                <h2 className="h1 mega-title">
                  Certified Organic &amp; Natural by Ecocert (France)
                </h2>
                <div className="rte-setting mega-subtitle">
                  <p>
                    We at Herbal Me have curated our range of certified
                    organic & natural cosmetics according to COSMOS standard
                    by Ecocert Greenlife (France) which is a globally
                    recognised certification body for cosmetics. The COSMOS
                    standard lays down stringent measures overseen by site
                    inspections & guidelines for every aspect of the
                    manufacturing process to ensure – environment friendly
                    production, responsible use of natural resources, absence
                    of petrochemical ingredients & recyclable packaging.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <noscript>
            <div className="hero hero--medium hero__overlay"
              style={{
                backgroundImage: "url('//herbalme.in/cdn/shop/files/MG_2067_2048x.jpg?v=1640335716')",
                backgroundPosition: 'center center',
              }}
            ></div>
          </noscript>
        </div>
      </div>
      <div id="shopify-section-1627036645479041d0" className="shopify-section index-section">
        <div className="page-width">
          <div className="section-header text-center">
            <h2>Hair care</h2>
          </div>

          <ul className="grid grid--uniform grid--view-items">
            <li className="grid__item grid__item--1627036645479041d0 small--one-half medium-up--one-quarter">
              <div className="grid-view-item grid-view-item--sold-out product-card">
                <a className="grid-view-item__link grid-view-item__image-container full-width-link"
                  href="/collections/hair/products/cassamla-hair-oil-100-ml-hairfall-control">
                  <span className="visually-hidden">Cassamla - Organic Hair Oil - Hairfall Control -Ecocert
                    Certified - 100 ml</span>
                </a>

                {/* <style>
                  #ProductCardImage-1627036645479041d0-6075705295001 {
                    max-width: 250px;
                    max-height: 250px;
                  }

                  #ProductCardImageWrapper-1627036645479041d0-6075705295001 {
                    max-width: 250px;
                  }
                </style> */}

                <div className="product-card__image-with-placeholder-wrapper" data-image-loading-animation>
                  <div id="ProductCardImageWrapper-1627036645479041d0-6075705295001"
                    className="grid-view-item__image-wrapper product-card__image-wrapper js">
                    <div
                     style={{
          paddingTop: '100%'
        }}
                    >
                      <img id="ProductCardImage-1627036645479041d0-6075705295001" className="grid-view-item__image lazyload"
                        alt="100% Cassamla Organic Hair Oil"
                        data-src="//herbalme.in/cdn/shop/files/33_{width}x.png?v=1711692001"
                        data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0"
                        data-sizes="auto" data-image />
                    </div>
                  </div>
                </div>

                <noscript>
                  <img className="grid-view-item__image" src="//herbalme.in/cdn/shop/files/33_250x250@2x.png?v=1711692001"
                    alt="100% Cassamla Organic Hair Oil" 
                     style={{
          maxWidth: '250px'
        }}
                     />
                </noscript>

                <div className="h4 grid-view-item__title product-card__title" aria-hidden="true">
                  Cassamla - Organic Hair Oil - Hairfall Control -Ecocert
                  Certified - 100 ml
                </div>

                <dl className="price price--listing price--sold-out price--on-sale">
                  <div className="price__regular">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Regular price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--regular">Rs. 585.00
                      </span>
                    </dd>
                  </div>
                  <div className="price__sale">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Sale price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--sale">Rs. 585.00
                      </span>
                    </dd>
                    <div className="price__compare">
                      <dt>
                        <span className="visually-hidden visually-hidden--inline">Regular price</span>
                      </dt>
                      <dd>
                        <s className="price-item price-item--regular">
                          Rs. 650.00
                        </s>
                      </dd>
                    </div>
                  </div>
                  <div className="price__unit">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Unit price</span>
                    </dt>
                    <dd className="price-unit-price">
                      <span></span><span aria-hidden="true">/</span><span
                        className="visually-hidden">per&nbsp;</span><span></span>
                    </dd>
                  </div>
                  <div className="price__badges price__badges--listing">
                    <span className="price__badge price__badge--sale" aria-hidden="true">
                      <span>Sale</span>
                    </span>
                    <span className="price__badge price__badge--sold-out">
                      <span>Sold out</span>
                    </span>
                  </div>
                </dl>
              </div>
            </li>

            <li className="grid__item grid__item--1627036645479041d0 small--one-half medium-up--one-quarter">
              <div className="grid-view-item product-card">
                <a className="grid-view-item__link grid-view-item__image-container full-width-link"
                  href="/collections/hair/products/moroccan-ice-hair-mask-scalp-repair-itch-relief-rhassoul-clay-6-herbs-120-gms">
                  <span className="visually-hidden">Moroccan Ice Hair Mask - Scalp Repair & Itch Relief -
                    120g</span>
                </a>

                {/* <style>
                  #ProductCardImage-1627036645479041d0-6845728686233 {
                    max-width: 250px;
                    max-height: 250px;
                  }

                  #ProductCardImageWrapper-1627036645479041d0-6845728686233 {
                    max-width: 250px;
                  }
                </style> */}

                <div className="product-card__image-with-placeholder-wrapper" data-image-loading-animation>
                  <div id="ProductCardImageWrapper-1627036645479041d0-6845728686233"
                    className="grid-view-item__image-wrapper product-card__image-wrapper js">
                    <div
                     style={{
          paddingTop: '100%'
        }}
                    >
                      <img id="ProductCardImage-1627036645479041d0-6845728686233" className="grid-view-item__image lazyload"
                        alt="100% Natural Moroccan Hair Mask"
                        data-src="//herbalme.in/cdn/shop/files/13_{width}x.png?v=1711692461"
                        data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0"
                        data-sizes="auto" data-image />
                    </div>
                  </div>
                </div>

                <noscript>
                  <img className="grid-view-item__image" src="//herbalme.in/cdn/shop/files/13_250x250@2x.png?v=1711692461"
                    alt="100% Natural Moroccan Hair Mask" 
                     style={{
          maxWidth: '250px'
        }} 
                    />
                </noscript>

                <div className="h4 grid-view-item__title product-card__title" aria-hidden="true">
                  Moroccan Ice Hair Mask - Scalp Repair & Itch Relief - 120g
                </div>

                <dl className="price price--listing price--on-sale">
                  <div className="price__regular">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Regular price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--regular">Rs. 382.00
                      </span>
                    </dd>
                  </div>
                  <div className="price__sale">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Sale price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--sale">Rs. 382.00
                      </span>
                    </dd>
                    <div className="price__compare">
                      <dt>
                        <span className="visually-hidden visually-hidden--inline">Regular price</span>
                      </dt>
                      <dd>
                        <s className="price-item price-item--regular">
                          Rs. 425.00
                        </s>
                      </dd>
                    </div>
                  </div>
                  <div className="price__unit">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Unit price</span>
                    </dt>
                    <dd className="price-unit-price">
                      <span></span><span aria-hidden="true">/</span><span
                        className="visually-hidden">per&nbsp;</span><span></span>
                    </dd>
                  </div>
                  <div className="price__badges price__badges--listing">
                    <span className="price__badge price__badge--sale" aria-hidden="true">
                      <span>Sale</span>
                    </span>
                    <span className="price__badge price__badge--sold-out">
                      <span>Sold out</span>
                    </span>
                  </div>
                </dl>
              </div>
            </li>

            <li className="grid__item grid__item--1627036645479041d0 small--one-half medium-up--one-quarter">
              <div className="grid-view-item product-card">
                <a className="grid-view-item__link grid-view-item__image-container full-width-link"
                  href="/collections/hair/products/shampoo-bar-henna-100-natural-125-g">
                  <span className="visually-hidden">Shampoo Bar - Henna - 100% Natural - 125g</span>
                </a>

                {/* <style>
                  #ProductCardImage-1627036645479041d0-7819151114393 {
                    max-width: 250px;
                    max-height: 250px;
                  }

                  #ProductCardImageWrapper-1627036645479041d0-7819151114393 {
                    max-width: 250px;
                  }
                </style> */}

                <div className="product-card__image-with-placeholder-wrapper" data-image-loading-animation>
                  <div id="ProductCardImageWrapper-1627036645479041d0-7819151114393"
                    className="grid-view-item__image-wrapper product-card__image-wrapper js">
                    <div
                     style={{
          paddingTop: '100%'
        }}
                     >
                      <img id="ProductCardImage-1627036645479041d0-7819151114393" className="grid-view-item__image lazyload"
                        alt="Shampoo Bar - Henna- 100% Natural"
                        data-src="//herbalme.in/cdn/shop/files/21_{width}x.png?v=1711691830"
                        data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0"
                        data-sizes="auto" data-image />
                    </div>
                  </div>
                </div>

                <noscript>
                  <img className="grid-view-item__image" src="//herbalme.in/cdn/shop/files/21_250x250@2x.png?v=1711691830"
                    alt="Shampoo Bar - Henna- 100% Natural" 
                     style={{
          maxWidth: '250px'
        }}
                     />
                </noscript>

                <div className="h4 grid-view-item__title product-card__title" aria-hidden="true">
                  Shampoo Bar - Henna - 100% Natural - 125g
                </div>

                <dl className="price price--listing price--on-sale">
                  <div className="price__regular">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Regular price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--regular">Rs. 195.00
                      </span>
                    </dd>
                  </div>
                  <div className="price__sale">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Sale price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--sale">Rs. 195.00
                      </span>
                    </dd>
                    <div className="price__compare">
                      <dt>
                        <span className="visually-hidden visually-hidden--inline">Regular price</span>
                      </dt>
                      <dd>
                        <s className="price-item price-item--regular">
                          Rs. 395.00
                        </s>
                      </dd>
                    </div>
                  </div>
                  <div className="price__unit">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Unit price</span>
                    </dt>
                    <dd className="price-unit-price">
                      <span></span><span aria-hidden="true">/</span><span
                        className="visually-hidden">per&nbsp;</span><span></span>
                    </dd>
                  </div>
                  <div className="price__badges price__badges--listing">
                    <span className="price__badge price__badge--sale" aria-hidden="true">
                      <span>Sale</span>
                    </span>
                    <span className="price__badge price__badge--sold-out">
                      <span>Sold out</span>
                    </span>
                  </div>
                </dl>
              </div>
            </li>

            <li className="grid__item grid__item--1627036645479041d0 small--one-half medium-up--one-quarter">
              <div className="grid-view-item product-card">
                <a className="grid-view-item__link grid-view-item__image-container full-width-link"
                  href="/collections/hair/products/shampoo-bar-tamanu-100-natural-125-g">
                  <span className="visually-hidden">Shampoo Bar - Tamanu - 100% Natural - 125g</span>
                </a>

                {/* <style>
                  #ProductCardImage-1627036645479041d0-7819221303449 {
                    max-width: 250px;
                    max-height: 250px;
                  }

                  #ProductCardImageWrapper-1627036645479041d0-7819221303449 {
                    max-width: 250px;
                  }
                </style> */}

                <div className="product-card__image-with-placeholder-wrapper" data-image-loading-animation>
                  <div id="ProductCardImageWrapper-1627036645479041d0-7819221303449"
                    className="grid-view-item__image-wrapper product-card__image-wrapper js">
                    <div
                     style={{
          paddingTop: '100%'
        }}
                     >
                      <img id="ProductCardImage-1627036645479041d0-7819221303449" className="grid-view-item__image lazyload"
                        alt="Shampoo Bar - Tamanu - 100% Natural"
                        data-src="//herbalme.in/cdn/shop/files/1_3afcb0d0-78d6-4564-8a70-a9e0d5a717e6_{width}x.png?v=1713349549"
                        data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0"
                        data-sizes="auto" data-image />
                    </div>
                  </div>
                </div>

                <noscript>
                  <img className="grid-view-item__image"
                    src="//herbalme.in/cdn/shop/files/1_3afcb0d0-78d6-4564-8a70-a9e0d5a717e6_250x250@2x.png?v=1713349549"
                    alt="Shampoo Bar - Tamanu - 100% Natural"
                     style={{
          maxWidth: '250px'
        }}
                      />
                </noscript>

                <div className="h4 grid-view-item__title product-card__title" aria-hidden="true">
                  Shampoo Bar - Tamanu - 100% Natural - 125g
                </div>

                <dl className="price price--listing price--on-sale">
                  <div className="price__regular">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Regular price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--regular">Rs. 197.00
                      </span>
                    </dd>
                  </div>
                  <div className="price__sale">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Sale price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--sale">Rs. 197.00
                      </span>
                    </dd>
                    <div className="price__compare">
                      <dt>
                        <span className="visually-hidden visually-hidden--inline">Regular price</span>
                      </dt>
                      <dd>
                        <s className="price-item price-item--regular">
                          Rs. 395.00
                        </s>
                      </dd>
                    </div>
                  </div>
                  <div className="price__unit">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Unit price</span>
                    </dt>
                    <dd className="price-unit-price">
                      <span></span><span aria-hidden="true">/</span><span
                        className="visually-hidden">per&nbsp;</span><span></span>
                    </dd>
                  </div>
                  <div className="price__badges price__badges--listing">
                    <span className="price__badge price__badge--sale" aria-hidden="true">
                      <span>Sale</span>
                    </span>
                    <span className="price__badge price__badge--sold-out">
                      <span>Sold out</span>
                    </span>
                  </div>
                </dl>
              </div>
            </li>
          </ul>

          <hr className="hr--invisible" aria-hidden="true" />
          <div className="text-center">
            <a href="/collections/hair" className="btn"
              aria-label="View all products in the Natural &amp; Organic Hair Care collection">
              View all
            </a>
          </div>
        </div>
      </div>
      <div id="shopify-section-16101194032f9245ab" className="shopify-section index-section">
        <div className="page-width">
          <div className="section-header text-center">
            <h2>NATURAL HAIR COLORS</h2>
          </div>

          <ul className="grid grid--uniform grid--view-items">
            <li className="grid__item grid__item--16101194032f9245ab small--one-half medium-up--one-quarter">
              <div className="grid-view-item product-card">
                <a className="grid-view-item__link grid-view-item__image-container full-width-link"
                  href="/collections/hair-color/products/dark-brown-200g-certified-natural-henna-hair-color">
                  <span className="visually-hidden">Dark Brown - Natural Hair Color - Ecocert Certified -
                    200g</span>
                </a>

                {/* <style>
                  #ProductCardImage-16101194032f9245ab-6075133821081 {
                    max-width: 250px;
                    max-height: 250px;
                  }

                  #ProductCardImageWrapper-16101194032f9245ab-6075133821081 {
                    max-width: 250px;
                  }
                </style> */}

                <div className="product-card__image-with-placeholder-wrapper" data-image-loading-animation>
                  <div id="ProductCardImageWrapper-16101194032f9245ab-6075133821081"
                    className="grid-view-item__image-wrapper product-card__image-wrapper js">
                    <div
                     style={{
          paddingTop: '100%'
        }}
                    >
                      <img id="ProductCardImage-16101194032f9245ab-6075133821081" className="grid-view-item__image lazyload"
                        alt="Dark Brown Natural Hair Color"
                        data-src="//herbalme.in/cdn/shop/files/2_{width}x.png?v=1711690372"
                        data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0"
                        data-sizes="auto" data-image />
                    </div>
                  </div>
                </div>

                <noscript>
                  <img className="grid-view-item__image" src="//herbalme.in/cdn/shop/files/2_250x250@2x.png?v=1711690372"
                    alt="Dark Brown Natural Hair Color" 
                     style={{
          maxWidth: '250px'
        }} 
                    />
                </noscript>

                <div className="h4 grid-view-item__title product-card__title" aria-hidden="true">
                  Dark Brown - Natural Hair Color - Ecocert Certified - 200g
                </div>

                <dl className="price price--listing price--on-sale">
                  <div className="price__regular">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Regular price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--regular">Rs. 384.00
                      </span>
                    </dd>
                  </div>
                  <div className="price__sale">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Sale price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--sale">Rs. 384.00
                      </span>
                    </dd>
                    <div className="price__compare">
                      <dt>
                        <span className="visually-hidden visually-hidden--inline">Regular price</span>
                      </dt>
                      <dd>
                        <s className="price-item price-item--regular">
                          Rs. 495.00
                        </s>
                      </dd>
                    </div>
                  </div>
                  <div className="price__unit">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Unit price</span>
                    </dt>
                    <dd className="price-unit-price">
                      <span></span><span aria-hidden="true">/</span><span
                        className="visually-hidden">per&nbsp;</span><span></span>
                    </dd>
                  </div>
                  <div className="price__badges price__badges--listing">
                    <span className="price__badge price__badge--sale" aria-hidden="true">
                      <span>Sale</span>
                    </span>
                    <span className="price__badge price__badge--sold-out">
                      <span>Sold out</span>
                    </span>
                  </div>
                </dl>
              </div>
            </li>

            <li className="grid__item grid__item--16101194032f9245ab small--one-half medium-up--one-quarter">
              <div className="grid-view-item product-card">
                <a className="grid-view-item__link grid-view-item__image-container full-width-link"
                  href="/collections/hair-color/products/soft-black-200g-certified-natural-henna-hair-color">
                  <span className="visually-hidden">Soft Black - Natural Hair Color - Ecocert Certified -
                    200g</span>
                </a>

                {/* <style>
                  #ProductCardImage-16101194032f9245ab-6073234882713 {
                    max-width: 250px;
                    max-height: 250px;
                  }

                  #ProductCardImageWrapper-16101194032f9245ab-6073234882713 {
                    max-width: 250px;
                  }
                </style> */}

                <div className="product-card__image-with-placeholder-wrapper" data-image-loading-animation>
                  <div id="ProductCardImageWrapper-16101194032f9245ab-6073234882713"
                    className="grid-view-item__image-wrapper product-card__image-wrapper js">
                    <div style={{
          paddingTop: '100%'
        }}>
                      <img id="ProductCardImage-16101194032f9245ab-6073234882713" className="grid-view-item__image lazyload"
                        alt="Soft Black Natural Hair Color"
                        data-src="//herbalme.in/cdn/shop/files/6_{width}x.png?v=1711690475"
                        data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0"
                        data-sizes="auto" data-image />
                    </div>
                  </div>
                </div>

                <noscript>
                  <img className="grid-view-item__image" src="//herbalme.in/cdn/shop/files/6_250x250@2x.png?v=1711690475"
                    alt="Soft Black Natural Hair Color"  style={{
          maxWidth: '250px'
        }} />
                </noscript>

                <div className="h4 grid-view-item__title product-card__title" aria-hidden="true">
                  Soft Black - Natural Hair Color - Ecocert Certified - 200g
                </div>

                <dl className="price price--listing price--on-sale">
                  <div className="price__regular">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Regular price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--regular">Rs. 384.00
                      </span>
                    </dd>
                  </div>
                  <div className="price__sale">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Sale price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--sale">Rs. 384.00
                      </span>
                    </dd>
                    <div className="price__compare">
                      <dt>
                        <span className="visually-hidden visually-hidden--inline">Regular price</span>
                      </dt>
                      <dd>
                        <s className="price-item price-item--regular">
                          Rs. 495.00
                        </s>
                      </dd>
                    </div>
                  </div>
                  <div className="price__unit">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Unit price</span>
                    </dt>
                    <dd className="price-unit-price">
                      <span></span><span aria-hidden="true">/</span><span
                        className="visually-hidden">per&nbsp;</span><span></span>
                    </dd>
                  </div>
                  <div className="price__badges price__badges--listing">
                    <span className="price__badge price__badge--sale" aria-hidden="true">
                      <span>Sale</span>
                    </span>
                    <span className="price__badge price__badge--sold-out">
                      <span>Sold out</span>
                    </span>
                  </div>
                </dl>
              </div>
            </li>

            <li className="grid__item grid__item--16101194032f9245ab small--one-half medium-up--one-quarter">
              <div className="grid-view-item product-card">
                <a className="grid-view-item__link grid-view-item__image-container full-width-link"
                  href="/collections/hair-color/products/burgundy-200g-certified-natural-henna-hair-color">
                  <span className="visually-hidden">Burgundy - Natural Hair Color - Ecocert Certified -
                    200g</span>
                </a>

                {/* <style>
                  #ProductCardImage-16101194032f9245ab-6073328599193 {
                    max-width: 250px;
                    max-height: 250px;
                  }

                  #ProductCardImageWrapper-16101194032f9245ab-6073328599193 {
                    max-width: 250px;
                  }
                </style> */}

                <div className="product-card__image-with-placeholder-wrapper" data-image-loading-animation>
                  <div id="ProductCardImageWrapper-16101194032f9245ab-6073328599193"
                    className="grid-view-item__image-wrapper product-card__image-wrapper js">
                    <div style={{
          paddingTop: '100%'
        }}>
                      <img id="ProductCardImage-16101194032f9245ab-6073328599193" className="grid-view-item__image lazyload"
                        alt="Burgundy Natural Hair Color"
                        data-src="//herbalme.in/cdn/shop/files/10_{width}x.png?v=1711690710"
                        data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0"
                        data-sizes="auto" data-image />
                    </div>
                  </div>
                </div>

                <noscript>
                  <img className="grid-view-item__image" src="//herbalme.in/cdn/shop/files/10_250x250@2x.png?v=1711690710"
                    alt="Burgundy Natural Hair Color"  style={{
          maxWidth: '250px'
        }} />
                </noscript>

                <div className="h4 grid-view-item__title product-card__title" aria-hidden="true">
                  Burgundy - Natural Hair Color - Ecocert Certified - 200g
                </div>

                <dl className="price price--listing price--on-sale">
                  <div className="price__regular">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Regular price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--regular">Rs. 384.00
                      </span>
                    </dd>
                  </div>
                  <div className="price__sale">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Sale price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--sale">Rs. 384.00
                      </span>
                    </dd>
                    <div className="price__compare">
                      <dt>
                        <span className="visually-hidden visually-hidden--inline">Regular price</span>
                      </dt>
                      <dd>
                        <s className="price-item price-item--regular">
                          Rs. 495.00
                        </s>
                      </dd>
                    </div>
                  </div>
                  <div className="price__unit">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Unit price</span>
                    </dt>
                    <dd className="price-unit-price">
                      <span></span><span aria-hidden="true">/</span><span
                        className="visually-hidden">per&nbsp;</span><span></span>
                    </dd>
                  </div>
                  <div className="price__badges price__badges--listing">
                    <span className="price__badge price__badge--sale" aria-hidden="true">
                      <span>Sale</span>
                    </span>
                    <span className="price__badge price__badge--sold-out">
                      <span>Sold out</span>
                    </span>
                  </div>
                </dl>
              </div>
            </li>

            <li className="grid__item grid__item--16101194032f9245ab small--one-half medium-up--one-quarter">
              <div className="grid-view-item product-card">
                <a className="grid-view-item__link grid-view-item__image-container full-width-link"
                  href="/collections/hair-color/products/deep-brown-henna-hair-color-200gms">
                  <span className="visually-hidden">Deep Brown - Natural Hair Color - Ecocert Certified -
                    200g</span>
                </a>

                {/* <style>
                  #ProductCardImage-16101194032f9245ab-7594302505113 {
                    max-width: 250px;
                    max-height: 250px;
                  }

                  #ProductCardImageWrapper-16101194032f9245ab-7594302505113 {
                    max-width: 250px;
                  }
                </style> */}

                <div className="product-card__image-with-placeholder-wrapper" data-image-loading-animation>
                  <div id="ProductCardImageWrapper-16101194032f9245ab-7594302505113"
                    className="grid-view-item__image-wrapper product-card__image-wrapper js">
                    <div style={{
          paddingTop: '100%'
        }}>
                      <img id="ProductCardImage-16101194032f9245ab-7594302505113" className="grid-view-item__image lazyload"
                        alt="Deep Brown Natural Hair Color"
                        data-src="//herbalme.in/cdn/shop/files/9_{width}x.png?v=1711690831"
                        data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0"
                        data-sizes="auto" data-image />
                    </div>
                  </div>
                </div>

                <noscript>
                  <img className="grid-view-item__image" src="//herbalme.in/cdn/shop/files/9_250x250@2x.png?v=1711690831"
                    alt="Deep Brown Natural Hair Color"  style={{
          maxWidth: '250px'
        }} />
                </noscript>

                <div className="h4 grid-view-item__title product-card__title" aria-hidden="true">
                  Deep Brown - Natural Hair Color - Ecocert Certified - 200g
                </div>

                <dl className="price price--listing price--on-sale">
                  <div className="price__regular">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Regular price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--regular">Rs. 384.00
                      </span>
                    </dd>
                  </div>
                  <div className="price__sale">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Sale price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--sale">Rs. 384.00
                      </span>
                    </dd>
                    <div className="price__compare">
                      <dt>
                        <span className="visually-hidden visually-hidden--inline">Regular price</span>
                      </dt>
                      <dd>
                        <s className="price-item price-item--regular">
                          Rs. 495.00
                        </s>
                      </dd>
                    </div>
                  </div>
                  <div className="price__unit">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Unit price</span>
                    </dt>
                    <dd className="price-unit-price">
                      <span></span><span aria-hidden="true">/</span><span
                        className="visually-hidden">per&nbsp;</span><span></span>
                    </dd>
                  </div>
                  <div className="price__badges price__badges--listing">
                    <span className="price__badge price__badge--sale" aria-hidden="true">
                      <span>Sale</span>
                    </span>
                    <span className="price__badge price__badge--sold-out">
                      <span>Sold out</span>
                    </span>
                  </div>
                </dl>
              </div>
            </li>
          </ul>

          <hr className="hr--invisible" aria-hidden="true" />
          <div className="text-center">
            <a href="/collections/hair-color" className="btn"
              aria-label="View all products in the Natural Hair Color - Ecocert Certified collection">
              View all
            </a>
          </div>
        </div>
      </div>
      <div id="shopify-section-16403349702f6b99f6" className="shopify-section index-section">
        <div className="page-width">
          <div className="section-header text-center">
            <h2>skin care</h2>
          </div>

          <ul className="grid grid--uniform grid--view-items">
            <li className="grid__item grid__item--16403349702f6b99f6 small--one-half medium-up--one-quarter">
              <div className="grid-view-item product-card">
                <a className="grid-view-item__link grid-view-item__image-container full-width-link"
                  href="/collections/skin-care/products/kumkumadi-natural-face-oil-with-saffron-5-herbs-in-sesame-oil-15-ml">
                  <span className="visually-hidden">Kumkumadi Natural Face Oil - Reduces dark spots, fine
                    lines and blemishes - 15 ml</span>
                </a>

                {/* <style>
                  #ProductCardImage-16403349702f6b99f6-7250387009689 {
                    max-width: 250px;
                    max-height: 250px;
                  }

                  #ProductCardImageWrapper-16403349702f6b99f6-7250387009689 {
                    max-width: 250px;
                  }
                </style> */}

                <div className="product-card__image-with-placeholder-wrapper" data-image-loading-animation>
                  <div id="ProductCardImageWrapper-16403349702f6b99f6-7250387009689"
                    className="grid-view-item__image-wrapper product-card__image-wrapper js">
                    <div style={{
          paddingTop: '100%'
        }}>
                      <img id="ProductCardImage-16403349702f6b99f6-7250387009689" className="grid-view-item__image lazyload"
                        alt="Natural Kumkumadi Face Oil"
                        data-src="//herbalme.in/cdn/shop/files/19_{width}x.png?v=1711692954"
                        data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0"
                        data-sizes="auto" data-image />
                    </div>
                  </div>
                </div>

                <noscript>
                  <img className="grid-view-item__image" src="//herbalme.in/cdn/shop/files/19_250x250@2x.png?v=1711692954"
                    alt="Natural Kumkumadi Face Oil"  style={{
          maxWidth: '250px'
        }} />
                </noscript>

                <div className="h4 grid-view-item__title product-card__title" aria-hidden="true">
                  Kumkumadi Natural Face Oil - Reduces dark spots, fine lines
                  and blemishes - 15 ml
                </div>

                <dl className="price price--listing price--on-sale">
                  <div className="price__regular">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Regular price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--regular">Rs. 896.00
                      </span>
                    </dd>
                  </div>
                  <div className="price__sale">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Sale price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--sale">Rs. 896.00
                      </span>
                    </dd>
                    <div className="price__compare">
                      <dt>
                        <span className="visually-hidden visually-hidden--inline">Regular price</span>
                      </dt>
                      <dd>
                        <s className="price-item price-item--regular">
                          Rs. 1,195.00
                        </s>
                      </dd>
                    </div>
                  </div>
                  <div className="price__unit">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Unit price</span>
                    </dt>
                    <dd className="price-unit-price">
                      <span></span><span aria-hidden="true">/</span><span
                        className="visually-hidden">per&nbsp;</span><span></span>
                    </dd>
                  </div>
                  <div className="price__badges price__badges--listing">
                    <span className="price__badge price__badge--sale" aria-hidden="true">
                      <span>Sale</span>
                    </span>
                    <span className="price__badge price__badge--sold-out">
                      <span>Sold out</span>
                    </span>
                  </div>
                </dl>
              </div>
            </li>

            <li className="grid__item grid__item--16403349702f6b99f6 small--one-half medium-up--one-quarter">
              <div className="grid-view-item product-card">
                <a className="grid-view-item__link grid-view-item__image-container full-width-link"
                  href="/collections/skin-care/products/hemp-seed-oil-100-organic-50-ml-1">
                  <span className="visually-hidden">Hemp Seed Oil - 100% Organic - Ecocert Certified - 50
                    ml</span>
                </a>

                {/* <style>
                  #ProductCardImage-16403349702f6b99f6-6925062275225 {
                    max-width: 250px;
                    max-height: 250px;
                  }

                  #ProductCardImageWrapper-16403349702f6b99f6-6925062275225 {
                    max-width: 250px;
                  }
                </style> */}

                <div className="product-card__image-with-placeholder-wrapper" data-image-loading-animation>
                  <div id="ProductCardImageWrapper-16403349702f6b99f6-6925062275225"
                    className="grid-view-item__image-wrapper product-card__image-wrapper js">
                    <div style={{
          paddingTop: '100%'
        }}>
                      <img id="ProductCardImage-16403349702f6b99f6-6925062275225" className="grid-view-item__image lazyload"
                        alt="100% Hemp Seed Organic Hair Oil"
                        data-src="//herbalme.in/cdn/shop/files/42_{width}x.png?v=1711692088"
                        data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0"
                        data-sizes="auto" data-image />
                    </div>
                  </div>
                </div>

                <noscript>
                  <img className="grid-view-item__image" src="//herbalme.in/cdn/shop/files/42_250x250@2x.png?v=1711692088"
                    alt="100% Hemp Seed Organic Hair Oil"  style={{
          maxWidth: '250px'
        }} />
                </noscript>

                <div className="h4 grid-view-item__title product-card__title" aria-hidden="true">
                  Hemp Seed Oil - 100% Organic - Ecocert Certified - 50 ml
                </div>

                <dl className="price price--listing price--on-sale">
                  <div className="price__regular">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Regular price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--regular">Rs. 455.00
                      </span>
                    </dd>
                  </div>
                  <div className="price__sale">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Sale price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--sale">Rs. 455.00
                      </span>
                    </dd>
                    <div className="price__compare">
                      <dt>
                        <span className="visually-hidden visually-hidden--inline">Regular price</span>
                      </dt>
                      <dd>
                        <s className="price-item price-item--regular">
                          Rs. 520.00
                        </s>
                      </dd>
                    </div>
                  </div>
                  <div className="price__unit">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Unit price</span>
                    </dt>
                    <dd className="price-unit-price">
                      <span></span><span aria-hidden="true">/</span><span
                        className="visually-hidden">per&nbsp;</span><span></span>
                    </dd>
                  </div>
                  <div className="price__badges price__badges--listing">
                    <span className="price__badge price__badge--sale" aria-hidden="true">
                      <span>Sale</span>
                    </span>
                    <span className="price__badge price__badge--sold-out">
                      <span>Sold out</span>
                    </span>
                  </div>
                </dl>
              </div>
            </li>

            <li className="grid__item grid__item--16403349702f6b99f6 small--one-half medium-up--one-quarter">
              <div className="grid-view-item product-card">
                <a className="grid-view-item__link grid-view-item__image-container full-width-link"
                  href="/collections/skin-care/products/coffolive-body-oil-exfoliation-hydration-coffee-olive-orange-tamanu-100-ml">
                  <span className="visually-hidden">Coffolive - Organic Body Oil - Exfoliation & Hydration -
                    Ecocert Certified - 100 ml</span>
                </a>

                {/* <style>
                  #ProductCardImage-16403349702f6b99f6-6110548754585 {
                    max-width: 250px;
                    max-height: 250px;
                  }

                  #ProductCardImageWrapper-16403349702f6b99f6-6110548754585 {
                    max-width: 250px;
                  }
                </style> */}

                <div className="product-card__image-with-placeholder-wrapper" data-image-loading-animation>
                  <div id="ProductCardImageWrapper-16403349702f6b99f6-6110548754585"
                    className="grid-view-item__image-wrapper product-card__image-wrapper js">
                    <div style={{
          paddingTop: '100%'
        }}>
                      <img id="ProductCardImage-16403349702f6b99f6-6110548754585" className="grid-view-item__image lazyload"
                        alt="Organic Coffolive Body Oil"
                        data-src="//herbalme.in/cdn/shop/files/34_{width}x.png?v=1711693519"
                        data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0"
                        data-sizes="auto" data-image />
                    </div>
                  </div>
                </div>

                <noscript>
                  <img className="grid-view-item__image" src="//herbalme.in/cdn/shop/files/34_250x250@2x.png?v=1711693519"
                    alt="Organic Coffolive Body Oil"  style={{
          maxWidth: '250px'
        }} />
                </noscript>

                <div className="h4 grid-view-item__title product-card__title" aria-hidden="true">
                  Coffolive - Organic Body Oil - Exfoliation & Hydration -
                  Ecocert Certified - 100 ml
                </div>

                <dl className="price price--listing price--on-sale">
                  <div className="price__regular">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Regular price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--regular">Rs. 585.00
                      </span>
                    </dd>
                  </div>
                  <div className="price__sale">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Sale price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--sale">Rs. 585.00
                      </span>
                    </dd>
                    <div className="price__compare">
                      <dt>
                        <span className="visually-hidden visually-hidden--inline">Regular price</span>
                      </dt>
                      <dd>
                        <s className="price-item price-item--regular">
                          Rs. 725.00
                        </s>
                      </dd>
                    </div>
                  </div>
                  <div className="price__unit">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Unit price</span>
                    </dt>
                    <dd className="price-unit-price">
                      <span></span><span aria-hidden="true">/</span><span
                        className="visually-hidden">per&nbsp;</span><span></span>
                    </dd>
                  </div>
                  <div className="price__badges price__badges--listing">
                    <span className="price__badge price__badge--sale" aria-hidden="true">
                      <span>Sale</span>
                    </span>
                    <span className="price__badge price__badge--sold-out">
                      <span>Sold out</span>
                    </span>
                  </div>
                </dl>
              </div>
            </li>

            <li className="grid__item grid__item--16403349702f6b99f6 small--one-half medium-up--one-quarter">
              <div className="grid-view-item product-card">
                <a className="grid-view-item__link grid-view-item__image-container full-width-link"
                  href="/collections/skin-care/products/veti-vera-body-cleansing-powder-vetiver-aloe-vera-7-herbs-200-gms">
                  <span className="visually-hidden">Veti Vera - Body cleansing powder - Exfoliates & Cleanses
                    - 200g</span>
                </a>
{/* 
                <style>
                  #ProductCardImage-16403349702f6b99f6-6879298191513 {
                    max-width: 250px;
                    max-height: 250px;
                  }

                  #ProductCardImageWrapper-16403349702f6b99f6-6879298191513 {
                    max-width: 250px;
                  }
                </style> */}

                <div className="product-card__image-with-placeholder-wrapper" data-image-loading-animation>
                  <div id="ProductCardImageWrapper-16403349702f6b99f6-6879298191513"
                    className="grid-view-item__image-wrapper product-card__image-wrapper js">
                    <div style={{
          paddingTop: '100%'
        }}>
                      <img id="ProductCardImage-16403349702f6b99f6-6879298191513" className="grid-view-item__image lazyload"
                        alt="100% Natural Veti Vera Body Cleansing Powde"
                        data-src="//herbalme.in/cdn/shop/files/11_{width}x.png?v=1711693871"
                        data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0"
                        data-sizes="auto" data-image />
                    </div>
                  </div>
                </div>

                <noscript>
                  <img className="grid-view-item__image" src="//herbalme.in/cdn/shop/files/11_250x250@2x.png?v=1711693871"
                    alt="100% Natural Veti Vera Body Cleansing Powde"  style={{
          maxWidth: '250px'
        }} />
                </noscript>

                <div className="h4 grid-view-item__title product-card__title" aria-hidden="true">
                  Veti Vera - Body cleansing powder - Exfoliates & Cleanses -
                  200g
                </div>

                <dl className="price price--listing price--on-sale">
                  <div className="price__regular">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Regular price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--regular">Rs. 247.00
                      </span>
                    </dd>
                  </div>
                  <div className="price__sale">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Sale price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--sale">Rs. 247.00
                      </span>
                    </dd>
                    <div className="price__compare">
                      <dt>
                        <span className="visually-hidden visually-hidden--inline">Regular price</span>
                      </dt>
                      <dd>
                        <s className="price-item price-item--regular">
                          Rs. 495.00
                        </s>
                      </dd>
                    </div>
                  </div>
                  <div className="price__unit">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Unit price</span>
                    </dt>
                    <dd className="price-unit-price">
                      <span></span><span aria-hidden="true">/</span><span
                        className="visually-hidden">per&nbsp;</span><span></span>
                    </dd>
                  </div>
                  <div className="price__badges price__badges--listing">
                    <span className="price__badge price__badge--sale" aria-hidden="true">
                      <span>Sale</span>
                    </span>
                    <span className="price__badge price__badge--sold-out">
                      <span>Sold out</span>
                    </span>
                  </div>
                </dl>
              </div>
            </li>
          </ul>

          <hr className="hr--invisible" aria-hidden="true" />
          <div className="text-center">
            <a href="/collections/skin-care" className="btn"
              aria-label="View all products in the Natural &amp; Organic Skin Care collection">
              View all
            </a>
          </div>
        </div>
      </div>
      <div id="shopify-section-16270363873773d703" className="shopify-section index-section">
        <div className="page-width">
          <div className="section-header text-center">
            <h2>100% ORGANIC - COLD PRESSED CARRIER OILS</h2>
          </div>

          <ul className="grid grid--uniform grid--view-items">
            <li className="grid__item grid__item--16270363873773d703 small--one-half medium-up--one-quarter">
              <div className="grid-view-item product-card">
                <a className="grid-view-item__link grid-view-item__image-container full-width-link"
                  href="/collections/cold-pressed-100-organic-oils/products/argan-oil-100-organic-50-ml">
                  <span className="visually-hidden">Argan Oil - 100% Organic - Ecocert Certified - 50
                    ml</span>
                </a>

                {/* <style>
                  #ProductCardImage-16270363873773d703-6924929826969 {
                    max-width: 250px;
                    max-height: 250px;
                  }

                  #ProductCardImageWrapper-16270363873773d703-6924929826969 {
                    max-width: 250px;
                  }
                </style> */}

                <div className="product-card__image-with-placeholder-wrapper" data-image-loading-animation>
                  <div id="ProductCardImageWrapper-16270363873773d703-6924929826969"
                    className="grid-view-item__image-wrapper product-card__image-wrapper js">
                    <div style={{
          paddingTop: '100%'
        }}>
                      <img id="ProductCardImage-16270363873773d703-6924929826969" className="grid-view-item__image lazyload"
                        alt="100% Argan Organic Hair Oil"
                        data-src="//herbalme.in/cdn/shop/files/40_{width}x.png?v=1711692159"
                        data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0"
                        data-sizes="auto" data-image />
                    </div>
                  </div>
                </div>

                <noscript>
                  <img className="grid-view-item__image" src="//herbalme.in/cdn/shop/files/40_250x250@2x.png?v=1711692159"
                    alt="100% Argan Organic Hair Oil"  style={{
          maxWidth: '250px'
        }} />
                </noscript>

                <div className="h4 grid-view-item__title product-card__title" aria-hidden="true">
                  Argan Oil - 100% Organic - Ecocert Certified - 50 ml
                </div>

                <dl className="price price--listing price--on-sale">
                  <div className="price__regular">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Regular price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--regular">Rs. 625.00
                      </span>
                    </dd>
                  </div>
                  <div className="price__sale">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Sale price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--sale">Rs. 625.00
                      </span>
                    </dd>
                    <div className="price__compare">
                      <dt>
                        <span className="visually-hidden visually-hidden--inline">Regular price</span>
                      </dt>
                      <dd>
                        <s className="price-item price-item--regular">
                          Rs. 695.00
                        </s>
                      </dd>
                    </div>
                  </div>
                  <div className="price__unit">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Unit price</span>
                    </dt>
                    <dd className="price-unit-price">
                      <span></span><span aria-hidden="true">/</span><span
                        className="visually-hidden">per&nbsp;</span><span></span>
                    </dd>
                  </div>
                  <div className="price__badges price__badges--listing">
                    <span className="price__badge price__badge--sale" aria-hidden="true">
                      <span>Sale</span>
                    </span>
                    <span className="price__badge price__badge--sold-out">
                      <span>Sold out</span>
                    </span>
                  </div>
                </dl>
              </div>
            </li>

            <li className="grid__item grid__item--16270363873773d703 small--one-half medium-up--one-quarter">
              <div className="grid-view-item product-card">
                <a className="grid-view-item__link grid-view-item__image-container full-width-link"
                  href="/collections/cold-pressed-100-organic-oils/products/hemp-seed-oil-100-organic-50-ml-1">
                  <span className="visually-hidden">Hemp Seed Oil - 100% Organic - Ecocert Certified - 50
                    ml</span>
                </a>

                {/* <style>
                  #ProductCardImage-16270363873773d703-6925062275225 {
                    max-width: 250px;
                    max-height: 250px;
                  }

                  #ProductCardImageWrapper-16270363873773d703-6925062275225 {
                    max-width: 250px;
                  }
                </style> */}

                <div className="product-card__image-with-placeholder-wrapper" data-image-loading-animation>
                  <div id="ProductCardImageWrapper-16270363873773d703-6925062275225"
                    className="grid-view-item__image-wrapper product-card__image-wrapper js">
                    <div style={{
          paddingTop: '100%'
        }}>
                      <img id="ProductCardImage-16270363873773d703-6925062275225" className="grid-view-item__image lazyload"
                        alt="100% Hemp Seed Organic Hair Oil"
                        data-src="//herbalme.in/cdn/shop/files/42_{width}x.png?v=1711692088"
                        data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0"
                        data-sizes="auto" data-image />
                    </div>
                  </div>
                </div>

                <noscript>
                  <img className="grid-view-item__image" src="//herbalme.in/cdn/shop/files/42_250x250@2x.png?v=1711692088"
                    alt="100% Hemp Seed Organic Hair Oil"  style={{
          maxWidth: '250px'
        }} />
                </noscript>

                <div className="h4 grid-view-item__title product-card__title" aria-hidden="true">
                  Hemp Seed Oil - 100% Organic - Ecocert Certified - 50 ml
                </div>

                <dl className="price price--listing price--on-sale">
                  <div className="price__regular">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Regular price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--regular">Rs. 455.00
                      </span>
                    </dd>
                  </div>
                  <div className="price__sale">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Sale price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--sale">Rs. 455.00
                      </span>
                    </dd>
                    <div className="price__compare">
                      <dt>
                        <span className="visually-hidden visually-hidden--inline">Regular price</span>
                      </dt>
                      <dd>
                        <s className="price-item price-item--regular">
                          Rs. 520.00
                        </s>
                      </dd>
                    </div>
                  </div>
                  <div className="price__unit">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Unit price</span>
                    </dt>
                    <dd className="price-unit-price">
                      <span></span><span aria-hidden="true">/</span><span
                        className="visually-hidden">per&nbsp;</span><span></span>
                    </dd>
                  </div>
                  <div className="price__badges price__badges--listing">
                    <span className="price__badge price__badge--sale" aria-hidden="true">
                      <span>Sale</span>
                    </span>
                    <span className="price__badge price__badge--sold-out">
                      <span>Sold out</span>
                    </span>
                  </div>
                </dl>
              </div>
            </li>

            <li className="grid__item grid__item--16270363873773d703 small--one-half medium-up--one-quarter">
              <div className="grid-view-item product-card">
                <a className="grid-view-item__link grid-view-item__image-container full-width-link"
                  href="/collections/cold-pressed-100-organic-oils/products/rosehip-oil-100-organic-50-ml">
                  <span className="visually-hidden">Rosehip Oil - 100% Organic - Ecocert Certified - 50
                    ml</span>
                </a>

                {/* <style>
                  #ProductCardImage-16270363873773d703-6925088817305 {
                    max-width: 250px;
                    max-height: 250px;
                  }

                  #ProductCardImageWrapper-16270363873773d703-6925088817305 {
                    max-width: 250px;
                  }
                </style> */}

                <div className="product-card__image-with-placeholder-wrapper" data-image-loading-animation>
                  <div id="ProductCardImageWrapper-16270363873773d703-6925088817305"
                    className="grid-view-item__image-wrapper product-card__image-wrapper js">
                    <div style={{
          paddingTop: '100%'
        }}>
                      <img id="ProductCardImage-16270363873773d703-6925088817305" className="grid-view-item__image lazyload"
                        alt="Certified Organic Rosehip Oil"
                        data-src="//herbalme.in/cdn/shop/files/36_{width}x.png?v=1711693251"
                        data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0"
                        data-sizes="auto" data-image />
                    </div>
                  </div>
                </div>

                <noscript>
                  <img className="grid-view-item__image" src="//herbalme.in/cdn/shop/files/36_250x250@2x.png?v=1711693251"
                    alt="Certified Organic Rosehip Oil"  style={{
          maxWidth: '250px'
        }} />
                </noscript>

                <div className="h4 grid-view-item__title product-card__title" aria-hidden="true">
                  Rosehip Oil - 100% Organic - Ecocert Certified - 50 ml
                </div>

                <dl className="price price--listing price--on-sale">
                  <div className="price__regular">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Regular price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--regular">Rs. 325.00
                      </span>
                    </dd>
                  </div>
                  <div className="price__sale">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Sale price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--sale">Rs. 325.00
                      </span>
                    </dd>
                    <div className="price__compare">
                      <dt>
                        <span className="visually-hidden visually-hidden--inline">Regular price</span>
                      </dt>
                      <dd>
                        <s className="price-item price-item--regular">
                          Rs. 650.00
                        </s>
                      </dd>
                    </div>
                  </div>
                  <div className="price__unit">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Unit price</span>
                    </dt>
                    <dd className="price-unit-price">
                      <span></span><span aria-hidden="true">/</span><span
                        className="visually-hidden">per&nbsp;</span><span></span>
                    </dd>
                  </div>
                  <div className="price__badges price__badges--listing">
                    <span className="price__badge price__badge--sale" aria-hidden="true">
                      <span>Sale</span>
                    </span>
                    <span className="price__badge price__badge--sold-out">
                      <span>Sold out</span>
                    </span>
                  </div>
                </dl>
              </div>
            </li>

            <li className="grid__item grid__item--16270363873773d703 small--one-half medium-up--one-quarter">
              <div className="grid-view-item product-card">
                <a className="grid-view-item__link grid-view-item__image-container full-width-link"
                  href="/collections/cold-pressed-100-organic-oils/products/evening-primrose-oil-100-organic-50-ml">
                  <span className="visually-hidden">Evening Primrose Oil - 100% Organic - Ecocert Certified -
                    50 ml</span>
                </a>

                {/* <style>
                  #ProductCardImage-16270363873773d703-6925000900761 {
                    max-width: 250px;
                    max-height: 250px;
                  }

                  #ProductCardImageWrapper-16270363873773d703-6925000900761 {
                    max-width: 250px;
                  }
                </style> */}

                <div className="product-card__image-with-placeholder-wrapper" data-image-loading-animation>
                  <div id="ProductCardImageWrapper-16270363873773d703-6925000900761"
                    className="grid-view-item__image-wrapper product-card__image-wrapper js">
                    <div style={{
          paddingTop: '100%'
        }}>
                      <img id="ProductCardImage-16270363873773d703-6925000900761" className="grid-view-item__image lazyload"
                        alt="Certified Organic Evening Primrose Oil"
                        data-src="//herbalme.in/cdn/shop/files/35_{width}x.png?v=1711693437"
                        data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0"
                        data-sizes="auto" data-image />
                    </div>
                  </div>
                </div>

                <noscript>
                  <img className="grid-view-item__image" src="//herbalme.in/cdn/shop/files/35_250x250@2x.png?v=1711693437"
                    alt="Certified Organic Evening Primrose Oil"  style={{
          maxWidth: '250px'
        }} />
                </noscript>

                <div className="h4 grid-view-item__title product-card__title" aria-hidden="true">
                  Evening Primrose Oil - 100% Organic - Ecocert Certified - 50
                  ml
                </div>

                <dl className="price price--listing price--on-sale">
                  <div className="price__regular">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Regular price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--regular">Rs. 765.00
                      </span>
                    </dd>
                  </div>
                  <div className="price__sale">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Sale price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--sale">Rs. 765.00
                      </span>
                    </dd>
                    <div className="price__compare">
                      <dt>
                        <span className="visually-hidden visually-hidden--inline">Regular price</span>
                      </dt>
                      <dd>
                        <s className="price-item price-item--regular">
                          Rs. 850.00
                        </s>
                      </dd>
                    </div>
                  </div>
                  <div className="price__unit">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Unit price</span>
                    </dt>
                    <dd className="price-unit-price">
                      <span></span><span aria-hidden="true">/</span><span
                        className="visually-hidden">per&nbsp;</span><span></span>
                    </dd>
                  </div>
                  <div className="price__badges price__badges--listing">
                    <span className="price__badge price__badge--sale" aria-hidden="true">
                      <span>Sale</span>
                    </span>
                    <span className="price__badge price__badge--sold-out">
                      <span>Sold out</span>
                    </span>
                  </div>
                </dl>
              </div>
            </li>
          </ul>

          <hr className="hr--invisible" aria-hidden="true" />
          <div className="text-center">
            <a href="/collections/cold-pressed-100-organic-oils" className="btn"
              aria-label="View all products in the Cold Pressed &amp; 100% Organic Oils -  Ecocert Certified collection">
              View all
            </a>
          </div>
        </div>
      </div>
      <div id="shopify-section-1627037574628b9cc1" className="shopify-section index-section">
        <div className="page-width">
          <div className="section-header text-center">
            <h2>100 % Organic - Plant Powders</h2>
          </div>

          <ul className="grid grid--uniform grid--view-items">
            <li className="grid__item grid__item--1627037574628b9cc1 small--one-half medium-up--one-quarter">
              <div className="grid-view-item product-card">
                <a className="grid-view-item__link grid-view-item__image-container full-width-link"
                  href="/collections/100-plant-powders/products/amla-powder-100-certified-organic-120-gms">
                  <span className="visually-hidden">Amla Powder - 100% Organic - Ecocert Certified 120g</span>
                </a>

                {/* <style>
                  #ProductCardImage-1627037574628b9cc1-6930360172697 {
                    max-width: 250px;
                    max-height: 250px;
                  }

                  #ProductCardImageWrapper-1627037574628b9cc1-6930360172697 {
                    max-width: 250px;
                  }
                </style> */}

                <div className="product-card__image-with-placeholder-wrapper" data-image-loading-animation>
                  <div id="ProductCardImageWrapper-1627037574628b9cc1-6930360172697"
                    className="grid-view-item__image-wrapper product-card__image-wrapper js">
                    <div style={{
          paddingTop: '100%'
        }}>
                      <img id="ProductCardImage-1627037574628b9cc1-6930360172697" className="grid-view-item__image lazyload"
                        alt="100% Organic Amla Powder"
                        data-src="//herbalme.in/cdn/shop/files/18_{width}x.png?v=1711692663"
                        data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0"
                        data-sizes="auto" data-image />
                    </div>
                  </div>
                </div>

                <noscript>
                  <img className="grid-view-item__image" src="//herbalme.in/cdn/shop/files/18_250x250@2x.png?v=1711692663"
                    alt="100% Organic Amla Powder"  style={{
          maxWidth: '250px'
        }} />
                </noscript>

                <div className="h4 grid-view-item__title product-card__title" aria-hidden="true">
                  Amla Powder - 100% Organic - Ecocert Certified 120g
                </div>

                <dl className="price price--listing price--on-sale">
                  <div className="price__regular">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Regular price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--regular">Rs. 202.00
                      </span>
                    </dd>
                  </div>
                  <div className="price__sale">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Sale price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--sale">Rs. 202.00
                      </span>
                    </dd>
                    <div className="price__compare">
                      <dt>
                        <span className="visually-hidden visually-hidden--inline">Regular price</span>
                      </dt>
                      <dd>
                        <s className="price-item price-item--regular">
                          Rs. 225.00
                        </s>
                      </dd>
                    </div>
                  </div>
                  <div className="price__unit">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Unit price</span>
                    </dt>
                    <dd className="price-unit-price">
                      <span></span><span aria-hidden="true">/</span><span
                        className="visually-hidden">per&nbsp;</span><span></span>
                    </dd>
                  </div>
                  <div className="price__badges price__badges--listing">
                    <span className="price__badge price__badge--sale" aria-hidden="true">
                      <span>Sale</span>
                    </span>
                    <span className="price__badge price__badge--sold-out">
                      <span>Sold out</span>
                    </span>
                  </div>
                </dl>
              </div>
            </li>

            <li className="grid__item grid__item--1627037574628b9cc1 small--one-half medium-up--one-quarter">
              <div className="grid-view-item product-card">
                <a className="grid-view-item__link grid-view-item__image-container full-width-link"
                  href="/collections/100-plant-powders/products/bhringraj-powder-100-certified-organic-120-gms">
                  <span className="visually-hidden">Bhringraj Powder - 100% Organic - Ecocert Certified -
                    120g</span>
                </a>

                {/* <style>
                  #ProductCardImage-1627037574628b9cc1-6930351390873 {
                    max-width: 250px;
                    max-height: 250px;
                  }

                  #ProductCardImageWrapper-1627037574628b9cc1-6930351390873 {
                    max-width: 250px;
                  }
                </style> */}

                <div className="product-card__image-with-placeholder-wrapper" data-image-loading-animation>
                  <div id="ProductCardImageWrapper-1627037574628b9cc1-6930351390873"
                    className="grid-view-item__image-wrapper product-card__image-wrapper js">
                    <div style={{
          paddingTop: '100%'
        }}>
                      <img id="ProductCardImage-1627037574628b9cc1-6930351390873" className="grid-view-item__image lazyload"
                        alt="100% Organic Bhringraj Powder"
                        data-src="//herbalme.in/cdn/shop/files/16_{width}x.png?v=1711692826"
                        data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0"
                        data-sizes="auto" data-image />
                    </div>
                  </div>
                </div>

                <noscript>
                  <img className="grid-view-item__image" src="//herbalme.in/cdn/shop/files/16_250x250@2x.png?v=1711692826"
                    alt="100% Organic Bhringraj Powder"  style={{
          maxWidth: '250px'
        }} />
                </noscript>

                <div className="h4 grid-view-item__title product-card__title" aria-hidden="true">
                  Bhringraj Powder - 100% Organic - Ecocert Certified - 120g
                </div>

                <dl className="price price--listing price--on-sale">
                  <div className="price__regular">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Regular price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--regular">Rs. 193.00
                      </span>
                    </dd>
                  </div>
                  <div className="price__sale">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Sale price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--sale">Rs. 193.00
                      </span>
                    </dd>
                    <div className="price__compare">
                      <dt>
                        <span className="visually-hidden visually-hidden--inline">Regular price</span>
                      </dt>
                      <dd>
                        <s className="price-item price-item--regular">
                          Rs. 215.00
                        </s>
                      </dd>
                    </div>
                  </div>
                  <div className="price__unit">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Unit price</span>
                    </dt>
                    <dd className="price-unit-price">
                      <span></span><span aria-hidden="true">/</span><span
                        className="visually-hidden">per&nbsp;</span><span></span>
                    </dd>
                  </div>
                  <div className="price__badges price__badges--listing">
                    <span className="price__badge price__badge--sale" aria-hidden="true">
                      <span>Sale</span>
                    </span>
                    <span className="price__badge price__badge--sold-out">
                      <span>Sold out</span>
                    </span>
                  </div>
                </dl>
              </div>
            </li>

            <li className="grid__item grid__item--1627037574628b9cc1 small--one-half medium-up--one-quarter">
              <div className="grid-view-item product-card">
                <a className="grid-view-item__link grid-view-item__image-container full-width-link"
                  href="/collections/100-plant-powders/products/brahmi-powder-100-certified-organic-120-gms">
                  <span className="visually-hidden">Brahmi Powder - 100% Organic - Ecocert Certified -
                    120g</span>
                </a>

                {/* <style>
                  #ProductCardImage-1627037574628b9cc1-6930355617945 {
                    max-width: 250px;
                    max-height: 250px;
                  }

                  #ProductCardImageWrapper-1627037574628b9cc1-6930355617945 {
                    max-width: 250px;
                  }
                </style> */}

                <div className="product-card__image-with-placeholder-wrapper" data-image-loading-animation>
                  <div id="ProductCardImageWrapper-1627037574628b9cc1-6930355617945"
                    className="grid-view-item__image-wrapper product-card__image-wrapper js">
                    <div style={{
          paddingTop: '100%'
        }}>
                      <img id="ProductCardImage-1627037574628b9cc1-6930355617945" className="grid-view-item__image lazyload"
                        alt="100% Organic Brahmi Powder"
                        data-src="//herbalme.in/cdn/shop/files/17_{width}x.png?v=1711692714"
                        data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0"
                        data-sizes="auto" data-image />
                    </div>
                  </div>
                </div>

                <noscript>
                  <img className="grid-view-item__image" src="//herbalme.in/cdn/shop/files/17_250x250@2x.png?v=1711692714"
                    alt="100% Organic Brahmi Powder"  style={{
          maxWidth: '250px'
        }} />
                </noscript>

                <div className="h4 grid-view-item__title product-card__title" aria-hidden="true">
                  Brahmi Powder - 100% Organic - Ecocert Certified - 120g
                </div>

                <dl className="price price--listing price--on-sale">
                  <div className="price__regular">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Regular price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--regular">Rs. 234.00
                      </span>
                    </dd>
                  </div>
                  <div className="price__sale">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Sale price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--sale">Rs. 234.00
                      </span>
                    </dd>
                    <div className="price__compare">
                      <dt>
                        <span className="visually-hidden visually-hidden--inline">Regular price</span>
                      </dt>
                      <dd>
                        <s className="price-item price-item--regular">
                          Rs. 260.00
                        </s>
                      </dd>
                    </div>
                  </div>
                  <div className="price__unit">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Unit price</span>
                    </dt>
                    <dd className="price-unit-price">
                      <span></span><span aria-hidden="true">/</span><span
                        className="visually-hidden">per&nbsp;</span><span></span>
                    </dd>
                  </div>
                  <div className="price__badges price__badges--listing">
                    <span className="price__badge price__badge--sale" aria-hidden="true">
                      <span>Sale</span>
                    </span>
                    <span className="price__badge price__badge--sold-out">
                      <span>Sold out</span>
                    </span>
                  </div>
                </dl>
              </div>
            </li>

            <li className="grid__item grid__item--1627037574628b9cc1 small--one-half medium-up--one-quarter">
              <div className="grid-view-item product-card">
                <a className="grid-view-item__link grid-view-item__image-container full-width-link"
                  href="/collections/100-plant-powders/products/red-henna-200g-certified-natural-henna-hair-color">
                  <span className="visually-hidden">Red - Natural Hair Color - Ecocert Certified - 200g</span>
                </a>

                {/* <style>
                  #ProductCardImage-1627037574628b9cc1-6075405172889 {
                    max-width: 250px;
                    max-height: 250px;
                  }

                  #ProductCardImageWrapper-1627037574628b9cc1-6075405172889 {
                    max-width: 250px;
                  }
                </style> */}

                <div className="product-card__image-with-placeholder-wrapper" data-image-loading-animation>
                  <div id="ProductCardImageWrapper-1627037574628b9cc1-6075405172889"
                    className="grid-view-item__image-wrapper product-card__image-wrapper js">
                    <div style={{
          paddingTop: '100%'
        }}>
                      <img id="ProductCardImage-1627037574628b9cc1-6075405172889" className="grid-view-item__image lazyload"
                        alt="Red (Henna) Natural Hair Color"
                        data-src="//herbalme.in/cdn/shop/files/1_{width}x.png?v=1711691576"
                        data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0"
                        data-sizes="auto" data-image />
                    </div>
                  </div>
                </div>

                <noscript>
                  <img className="grid-view-item__image" src="//herbalme.in/cdn/shop/files/1_250x250@2x.png?v=1711691576"
                    alt="Red (Henna) Natural Hair Color"  style={{
          maxWidth: '250px'
        }} />
                </noscript>

                <div className="h4 grid-view-item__title product-card__title" aria-hidden="true">
                  Red - Natural Hair Color - Ecocert Certified - 200g
                </div>

                <dl className="price price--listing price--on-sale">
                  <div className="price__regular">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Regular price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--regular">Rs. 375.00
                      </span>
                    </dd>
                  </div>
                  <div className="price__sale">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Sale price</span>
                    </dt>
                    <dd>
                      <span className="price-item price-item--sale">Rs. 375.00
                      </span>
                    </dd>
                    <div className="price__compare">
                      <dt>
                        <span className="visually-hidden visually-hidden--inline">Regular price</span>
                      </dt>
                      <dd>
                        <s className="price-item price-item--regular">
                          Rs. 450.00
                        </s>
                      </dd>
                    </div>
                  </div>
                  <div className="price__unit">
                    <dt>
                      <span className="visually-hidden visually-hidden--inline">Unit price</span>
                    </dt>
                    <dd className="price-unit-price">
                      <span></span><span aria-hidden="true">/</span><span
                        className="visually-hidden">per&nbsp;</span><span></span>
                    </dd>
                  </div>
                  <div className="price__badges price__badges--listing">
                    <span className="price__badge price__badge--sale" aria-hidden="true">
                      <span>Sale</span>
                    </span>
                    <span className="price__badge price__badge--sold-out">
                      <span>Sold out</span>
                    </span>
                  </div>
                </dl>
              </div>
            </li>
          </ul>

          <hr className="hr--invisible" aria-hidden="true" />
          <div className="text-center">
            <a href="/collections/100-plant-powders" className="btn"
              aria-label="View all products in the 100% Organic Plant Powders &amp; Natural Hair Colors collection">
              View all
            </a>
          </div>
        </div>
      </div>
      <div id="shopify-section-feature-row" className="shopify-section index-section">
        <div className="page-width feature-row">
          <div className="feature-row">
            <div className="feature-row__item">
              <div
                id="FeatureRowImageWrapper-feature-row"
                className="feature-row__image-wrapper js"
                style={{
                  maxWidth: '968.8888888888888px', // Convert max-width to React style
                }}
              >
                <div
                  style={{
                    paddingTop: '56.25%', // Convert padding-top to React style
                  }}
                  data-image-loading-animation
                >
                  <img
                    id="FeatureRowImage-feature-row"
                    className="feature-row__image"
                    src="//herbalme.in/cdn/shop/files/1_10_1_600x600@2x.jpg?v=1642683449" // Use src directly for testing
                    alt="Feature Row Image"
                    style={{ width: '100%', height: 'auto' }} // Ensure the image scales properly
                  />
                </div>
              </div>

              <noscript>
                <img
                  src="//herbalme.in/cdn/shop/files/1_10_1_600x600@2x.jpg?v=1642683449"
                  className="feature-row__image"
                  alt="Feature Row Image"
                />
              </noscript>
            </div>

            <div className="feature-row__item feature-row__text feature-row__text--left">
              <h2 className="h3">How do we make it?</h2>

              <div className="rte rte-setting featured-row__subtext">
                <p>
                  Our products are made in small batches, to maximize the
                  efficacy of the ingredients in our products. Our time-tested
                  formulations comprise of the freshest ingredients sourced
                  only from certified organic and natural farms and sellers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END content_for_index --> */}
    </main>

    <div id="shopify-section-footer" className="shopify-section">
      
      
    </div>

    <div id="slideshow-info" className="visually-hidden" aria-hidden="true">
      Use left/right arrows to navigate the slideshow or swipe left/right if
      using a mobile device
    </div>
  </div>
    </>
  );
};

export default Home;
