import React from "react";
import '../Home/home.css'
const Footer = () => {
  return (
    <>
      <footer
        class="site-footer critical-hidden"
        role="contentinfo"
        data-section-id="footer"
        data-section-type="footer-section"
      >
        <div class="page-width">
          <div class="site-footer__content">
            <div
              class="site-footer__item
                    
                    site-footer__item--one-quarter
                    "
            >
              <div class="site-footer__item-inner site-footer__item-inner--text">
                <p class="h4">Our Business Details</p>
                <div
                  class="site-footer__rte
                              "
                >
                  <p>
                    MONDAY - FRIDAY: 8:30 - 5 pm &amp; WEEKENDS: 9:30 - 6
                    pm&nbsp;PST
                  </p>
                  <p>
                    Email us - <strong>info@herbalme.in</strong>
                  </p>
                  <p>
                    Call here - <strong>+91-9717003903</strong>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="site-footer__item
                    
                    site-footer__item--one-quarter
                    "
            >
              <div class="site-footer__item-inner site-footer__item-inner--link_list">
                <p class="h4">Quick links</p>
                <ul
                  class="site-footer__linklist
                            "
                >
                  <li class="site-footer__linklist-item">
                    <a href="/search">Search</a>
                  </li>
                  <li class="site-footer__linklist-item">
                    <a href="/pages/contact-us">Contact Us</a>
                  </li>
                  <li class="site-footer__linklist-item">
                    <a href="/policies/privacy-policy">Privacy Policy</a>
                  </li>
                  <li class="site-footer__linklist-item">
                    <a href="/policies/terms-of-service">
                      Terms and Conditions
                    </a>
                  </li>
                  <li class="site-footer__linklist-item">
                    <a href="/policies/refund-policy">Refund Policy</a>
                  </li>
                  <li class="site-footer__linklist-item">
                    <a href="/policies/shipping-policy">Shipping Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="site-footer__item
                    
                    site-footer__item--one-quarter
                    site-footer-newsletter__one-half"
            >
              <div class="site-footer__item-inner site-footer__item-inner--newsletter">
                <p class="h4">Newsletter</p>
                <div
                  class="site-footer__newsletter
                          "
                >
                  <form
                    method="post"
                    action="/contact#ContactFooter"
                    id="ContactFooter"
                    accept-charset="UTF-8"
                    class="contact-form"
                    novalidate="novalidate"
                  >
                    <input type="hidden" name="form_type" value="customer" />
                    <input type="hidden" name="utf8" value="✓" />
                    <input
                      type="hidden"
                      name="contact[tags]"
                      value="newsletter"
                    />
                    <div class="input-group ">
                      <input
                        type="email"
                        name="contact[email]"
                        id="ContactFooter-email"
                        class="input-group__field newsletter__input"
                        value=""
                        placeholder="Email address"
                        aria-label="Email address"
                        aria-required="true"
                        required=""
                        autocorrect="off"
                        autocapitalize="off"
                      />
                      <span class="input-group__btn">
                        <button
                          type="submit"
                          class="btn newsletter__submit"
                          name="commit"
                        >
                          <span class="newsletter__submit-text--large">
                            Subscribe
                          </span>
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr class="site-footer__hr" />
        <div class="page-width">
          <div class="grid grid--no-gutters small--text-center grid--footer-float-right">
            <div class="grid__item small--hide one-half "></div>
            <div class="grid__item  small--one-whole site-footer-item-tall">
              <ul class="list--inline site-footer__social-icons social-icons site-footer__icon-list">
                <li class="social-icons__item">
                  <a
                    class="social-icons__link"
                    href="https://www.facebook.com/herbalme.in"
                    aria-describedby="a11y-external-message"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      class="icon icon-facebook"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="#444"
                        d="M18.05.811q.439 0 .744.305t.305.744v16.637q0 .439-.305.744t-.744.305h-4.732v-7.221h2.415l.342-2.854h-2.757v-1.83q0-.659.293-1t1.073-.342h1.488V3.762q-.976-.098-2.171-.098-1.634 0-2.635.964t-1 2.72V9.47H7.951v2.854h2.415v7.221H1.413q-.439 0-.744-.305t-.305-.744V1.859q0-.439.305-.744T1.413.81H18.05z"
                      ></path>
                    </svg>
                    <span class="icon__fallback-text">Facebook</span>
                  </a>
                </li>
                <li class="social-icons__item">
                  <a
                    class="social-icons__link"
                    href="https://www.instagram.com/herbalme.in/"
                    aria-describedby="a11y-external-message"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      class="icon icon-instagram"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 49.5c67.3 0 75.2.3 101.8 1.5 24.6 1.1 37.9 5.2 46.8 8.7 11.8 4.6 20.2 10 29 18.8s14.3 17.2 18.8 29c3.4 8.9 7.6 22.2 8.7 46.8 1.2 26.6 1.5 34.5 1.5 101.8s-.3 75.2-1.5 101.8c-1.1 24.6-5.2 37.9-8.7 46.8-4.6 11.8-10 20.2-18.8 29s-17.2 14.3-29 18.8c-8.9 3.4-22.2 7.6-46.8 8.7-26.6 1.2-34.5 1.5-101.8 1.5s-75.2-.3-101.8-1.5c-24.6-1.1-37.9-5.2-46.8-8.7-11.8-4.6-20.2-10-29-18.8s-14.3-17.2-18.8-29c-3.4-8.9-7.6-22.2-8.7-46.8-1.2-26.6-1.5-34.5-1.5-101.8s.3-75.2 1.5-101.8c1.1-24.6 5.2-37.9 8.7-46.8 4.6-11.8 10-20.2 18.8-29s17.2-14.3 29-18.8c8.9-3.4 22.2-7.6 46.8-8.7 26.6-1.3 34.5-1.5 101.8-1.5m0-45.4c-68.4 0-77 .3-103.9 1.5C125.3 6.8 107 11.1 91 17.3c-16.6 6.4-30.6 15.1-44.6 29.1-14 14-22.6 28.1-29.1 44.6-6.2 16-10.5 34.3-11.7 61.2C4.4 179 4.1 187.6 4.1 256s.3 77 1.5 103.9c1.2 26.8 5.5 45.1 11.7 61.2 6.4 16.6 15.1 30.6 29.1 44.6 14 14 28.1 22.6 44.6 29.1 16 6.2 34.3 10.5 61.2 11.7 26.9 1.2 35.4 1.5 103.9 1.5s77-.3 103.9-1.5c26.8-1.2 45.1-5.5 61.2-11.7 16.6-6.4 30.6-15.1 44.6-29.1 14-14 22.6-28.1 29.1-44.6 6.2-16 10.5-34.3 11.7-61.2 1.2-26.9 1.5-35.4 1.5-103.9s-.3-77-1.5-103.9c-1.2-26.8-5.5-45.1-11.7-61.2-6.4-16.6-15.1-30.6-29.1-44.6-14-14-28.1-22.6-44.6-29.1-16-6.2-34.3-10.5-61.2-11.7-27-1.1-35.6-1.4-104-1.4z"></path>
                      <path d="M256 126.6c-71.4 0-129.4 57.9-129.4 129.4s58 129.4 129.4 129.4 129.4-58 129.4-129.4-58-129.4-129.4-129.4zm0 213.4c-46.4 0-84-37.6-84-84s37.6-84 84-84 84 37.6 84 84-37.6 84-84 84z"></path>
                      <circle cx="390.5" cy="121.5" r="30.2"></circle>
                    </svg>
                    <span class="icon__fallback-text">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="grid__item medium-up--hide one-half small--one-whole"></div>
            <div class="grid__item small--one-whole  site-footer-item-align-right">
              <small class="site-footer__copyright-content">
                © 2025,{" "}
                <a href="/" title="">
                  Herbal Me{" "}
                </a>
              </small>
              <small class="site-footer__copyright-content site-footer__copyright-content--powered-by">
                <a
                  target="_blank"
                  rel="nofollow noopener"
                  href="https://www.shopify.com?utm_campaign=poweredby&amp;utm_medium=shopify&amp;utm_source=onlinestore"
                  aria-describedby="a11y-new-window-external-message"
                >
                  {" "}
                </a>
              </small>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
