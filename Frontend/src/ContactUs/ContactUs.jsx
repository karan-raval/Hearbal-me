import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const ContactUs = () => {
  return (
    <>
    <Header/>
      <main
        class="main-content js-focus-hidden"
        id="MainContent"
        role="main"
        tabindex="-1"
      >
        <div class="page-width">
          <div class="grid">
            <div class="grid__item medium-up--five-sixths medium-up--push-one-twelfth">
              <div class="section-header text-center">
                <h1>Contact us</h1>
              </div>

              <div class="rte">
                <header class="entry-header ast-no-thumbnail ast-no-meta">
                  <h1 class="entry-title" itemprop="headline">
                    Get in touch with&nbsp;us
                  </h1>
                </header>
                <div class="entry-content clear" itemprop="text">
                  <div
                    data-elementor-type="wp-page"
                    data-elementor-id="104"
                    class="elementor elementor-104"
                    data-elementor-settings="[]"
                  >
                    <div class="elementor-inner">
                      <div class="elementor-section-wrap">
                        <section
                          class="elementor-section elementor-top-section elementor-element elementor-element-5069443 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                          data-id="5069443"
                          data-element_type="section"
                        >
                          <div class="elementor-container elementor-column-gap-default">
                            <div class="elementor-row">
                              <div
                                class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-15b3198"
                                data-id="15b3198"
                                data-element_type="column"
                              >
                                <div class="elementor-column-wrap elementor-element-populated">
                                  <div class="elementor-widget-wrap">
                                    <div
                                      class="elementor-element elementor-element-7a0f487 elementor-widget elementor-widget-text-editor"
                                      data-id="7a0f487"
                                      data-element_type="widget"
                                      data-widget_type="text-editor.default"
                                    >
                                      <div class="elementor-widget-container">
                                        <div class="elementor-text-editor elementor-clearfix">
                                          <p>
                                            For Influencer collabs and queries
                                            email us at&nbsp;info@herbalme.in
                                            <br />
                                            For Private Labelling /
                                            Distributorship / Bulk Orders
                                            related queries email us
                                            at&nbsp;bindiya@herbalme.in
                                          </p>
                                          <p>Contact No: +91-9717003903</p>
                                          <p>
                                            Address:&nbsp;H M Enterprises, B-86,
                                            Okhla Phase II, Okhla Industrial
                                            Area, New Delhi, Delhi 110020
                                          </p>
                                          <p>
                                            <strong>
                                              Feel free to fill out the form
                                              below to get in touch with
                                              us.&nbsp;
                                            </strong>
                                          </p>
                                          <p>
                                            <span>&nbsp;</span>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="contact-form form-vertical">
                <form
                  method="post"
                  action="/contact#ContactForm"
                  id="ContactForm"
                  accept-charset="UTF-8"
                  class="contact-form"
                >
                  <input type="hidden" name="form_type" value="contact" />
                  <input type="hidden" name="utf8" value="✓" />

                  <div class="grid grid--half-gutters">
                    <div class="grid__item medium-up--one-half">
                      <label for="ContactForm-name">Name</label>
                      <input
                        type="text"
                        id="ContactForm-name"
                        name="contact[Name]"
                        value=""
                      />
                    </div>
                    <div class="grid__item medium-up--one-half">
                      <label for="ContactForm-email">
                        Email <span aria-hidden="true">*</span>
                      </label>
                      <input
                        type="email"
                        id="ContactForm-email"
                        name="contact[email]"
                        autocorrect="off"
                        autocapitalize="off"
                        value=""
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <label for="ContactForm-phone">Phone Number</label>
                  <input
                    type="tel"
                    id="ContactForm-phone"
                    name="contact[Phone Number]"
                    pattern="[0-9\-]*"
                    value=""
                  />

                  <label for="ContactForm-message">Message</label>
                  <textarea
                    rows="10"
                    id="ContactForm-message"
                    name="contact[Message]"
                  ></textarea>

                  <input type="submit" class="btn" value="Send" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default ContactUs;
