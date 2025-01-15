import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Cart = () => {
  return (
    <>
      <Header />
      <main
        class="main-content js-focus-hidden"
        id="MainContent"
        role="main"
        tabindex="-1"
      >
        <div id="shopify-section-cart-template" class="shopify-section">
          <div
            class="page-width"
            data-section-id="cart-template"
            data-section-type="cart-template"
            data-ajax-enabled="true"
          >
            <div data-cart-wrapper="">
              <div class="cart-header">
                <h1 class="cart-header__title">Your cart</h1>
                <a href="/collections/all" class="text-link text-link--accent">
                  Continue shopping
                </a>
              </div>

              <form action="/cart" method="post" novalidate="" class="cart">
                <table>
                  <thead class="cart__row cart__row--heading">
                    <tr>
                      <th scope="col">Product</th>
                      <th class="text-right" scope="col">
                        Price
                      </th>
                      <th class="text-right small--hide" scope="col">
                        Quantity
                      </th>
                      <th class="text-right small--hide" scope="col">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody data-cart-line-items="">
                    <tr
                      class="cart__row"
                      data-cart-item=""
                      data-cart-item-key="40637224681625:7744f6a296556473a832cc8e45e144c9"
                      data-cart-item-url="/products/brahmi-powder-100-certified-organic-120-gms?variant=40637224681625"
                      data-cart-item-title="Brahmi Powder - 100% Organic - Ecocert Certified - 120g"
                      data-cart-item-index="1"
                      data-cart-item-quantity="1"
                    >
                      <td
                        class="cart__meta small--text-left"
                        data-cart-table-cell=""
                      >
                        <div class="cart__product-information">
                          <div class="cart__image-wrapper">
                            <img
                              class="cart__image"
                              src="//herbalme.in/cdn/shop/files/17_x190.png?v=1711692714"
                              alt="100% Organic Brahmi Powder"
                              data-cart-item-image=""
                            //   style={{cursor: pointer}}
                            />
                          </div>
                          <div>
                            <div class="list-view-item__title">
                              <a
                                href="/products/brahmi-powder-100-certified-organic-120-gms?variant=40637224681625"
                                class="cart__product-title"
                                data-cart-item-title=""
                                data-role="product-title"
                              >
                                Brahmi Powder - 100% Organic - Ecocert Certified
                                - 120g
                              </a>
                            </div>
                            <ul
                              class="product-details hide"
                              data-cart-item-details=""
                              aria-label="Product details"
                            >
                              <li
                                class="product-details__item product-details__item--variant-option hide"
                                data-cart-item-option=""
                              >
                                :{" "}
                              </li>
                              <li
                                class="product-details__item product-details__item--property
                              "
                                data-cart-item-selling-plan-name=""
                              ></li>
                              <li
                                class="product-details__item product-details__item--property
                                 hide"
                                data-cart-item-property=""
                              >
                                <span
                                  class="product-details__item-label"
                                  data-cart-item-property-name=""
                                >
                                  t:{" "}
                                </span>
                                <span data-cart-item-property-value="">e</span>
                              </li>
                            </ul>

                            <p class="cart__remove">
                              <a
                                href="/cart/change?line=1&amp;quantity=0"
                                class="text-link text-link--accent"
                                aria-label="Remove Brahmi Powder - 100% Organic - Ecocert Certified - 120g"
                                data-cart-remove=""
                                data-role="product-remove"
                              >
                                Remove
                              </a>
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="cart__price text-right">
                        <div data-cart-item-price="">
                          <dl data-cart-item-price-list="">
                            <div
                              class="hide"
                              data-cart-item-discounted-price-group=""
                            >
                              <dt>
                                <span class="visually-hidden">
                                  Regular price
                                </span>
                              </dt>
                              <dd>
                                <s data-cart-item-original-price="">
                                  Rs. 234.00
                                </s>
                              </dd>
                              <dt>
                                <span class="visually-hidden">Sale price</span>
                              </dt>
                              <dd>
                                <span
                                  class="order-discount"
                                  data-cart-item-final-price=""
                                >
                                  Rs. 234.00
                                </span>
                              </dd>
                            </div>
                            <div data-cart-item-regular-price-group="">
                              <dt>
                                <span class="visually-hidden">
                                  Regular price
                                </span>
                              </dt>
                              <dd data-cart-item-regular-price="">
                                Rs. 234.00
                              </dd>
                            </div>
                            <div class="hide" data-unit-price-group="">
                              <dt>
                                <span class="visually-hidden visually-hidden--inline">
                                  Unit price
                                </span>
                              </dt>
                              <dd>
                                <span class="price-unit-price">
                                  <span data-unit-price=""></span>
                                  <span aria-hidden="true">/</span>
                                  <span class="visually-hidden">per&nbsp;</span>
                                  <span data-unit-price-base-unit=""></span>
                                </span>
                              </dd>
                            </div>
                          </dl>
                        </div>
                        <ul
                          class="order-discount order-discount--list order-discount--title order-discount--cart hide"
                          aria-label="Discount"
                          data-cart-item-discount-list=""
                        >
                          <li
                            class="order-discount__item"
                            data-cart-item-discount=""
                          >
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              role="presentation"
                              class="icon icon-saletag"
                            >
                              <path
                                d="M10 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-3H7a1 1 0 0 0-.71.29l-6 6a1 1 0 0 0 0 1.42l4 4a1 1 0 0 0 1.42 0c.19-.2 5.8-5.81 6-6A1 1 0 0 0 12 5V2a2 2 0 0 0-2-2z"
                                fill="#231F20"
                              ></path>
                            </svg>
                            <span data-cart-item-discount-title=""></span> (-
                            <span data-cart-item-discount-amount=""></span>)
                          </li>
                        </ul>

                        <div class="cart__qty medium-up--hide">
                          <label
                            for="updates_40637224681625:7744f6a296556473a832cc8e45e144c9"
                            class="cart__qty-label"
                            aria-label="Quantity"
                            data-quantity-label-mobile=""
                          >
                            Qty
                          </label>
                          <input
                            id="updates_40637224681625:7744f6a296556473a832cc8e45e144c9"
                            class="cart__qty-input"
                            type="number"
                            value="1"
                            min="0"
                            pattern="[0-9]*"
                            data-quantity-input=""
                            data-quantity-item="1"
                            data-quantity-input-mobile=""
                            data-role="product-quantity-mobile"
                          />
                        </div>
                        <div
                          class="cart__qty-error-message-wrapper cart__qty-error-message-wrapper--mobile hide"
                          role="alert"
                          data-cart-quantity-error-message-wrapper=""
                        >
                          <span class="visually-hidden">Error </span>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            role="presentation"
                            class="icon icon-error"
                            viewBox="0 0 14 14"
                          >
                            <g fill="none" fill-rule="evenodd">
                              <path d="M7 0a7 7 0 0 1 7 7 7 7 0 1 1-7-7z"></path>
                              <path
                                class="icon-error__symbol"
                                d="M6.328 8.396l-.252-5.4h1.836l-.24 5.4H6.328zM6.04 10.16c0-.528.432-.972.96-.972s.972.444.972.972c0 .516-.444.96-.972.96a.97.97 0 0 1-.96-.96z"
                              ></path>
                            </g>
                          </svg>
                          <span
                            class="cart__qty-error-message"
                            data-cart-quantity-error-message=""
                          ></span>
                        </div>
                      </td>
                      <td class="cart__quantity-td text-right small--hide">
                        <div class="cart__qty">
                          <label
                            for="updates_large_40637224681625:7744f6a296556473a832cc8e45e144c9"
                            class="cart__qty-label"
                            data-quantity-label-desktop=""
                          >
                            Quantity
                          </label>
                          <input
                            id="updates_large_40637224681625:7744f6a296556473a832cc8e45e144c9"
                            class="cart__qty-input"
                            type="number"
                            name="updates[]"
                            value="1"
                            min="0"
                            pattern="[0-9]*"
                            data-quantity-input=""
                            data-quantity-item="1"
                            data-quantity-input-desktop=""
                            data-role="product-quantity-desktop"
                          />
                        </div>
                        <div
                          class="cart__qty-error-message-wrapper cart__qty-error-message-wrapper--desktop hide"
                          role="alert"
                          data-cart-quantity-error-message-wrapper=""
                        >
                          <span class="visually-hidden">Error </span>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            role="presentation"
                            class="icon icon-error"
                            viewBox="0 0 14 14"
                          >
                            <g fill="none" fill-rule="evenodd">
                              <path d="M7 0a7 7 0 0 1 7 7 7 7 0 1 1-7-7z"></path>
                              <path
                                class="icon-error__symbol"
                                d="M6.328 8.396l-.252-5.4h1.836l-.24 5.4H6.328zM6.04 10.16c0-.528.432-.972.96-.972s.972.444.972.972c0 .516-.444.96-.972.96a.97.97 0 0 1-.96-.96z"
                              ></path>
                            </g>
                          </svg>
                          <span
                            class="cart__qty-error-message"
                            data-cart-quantity-error-message=""
                          ></span>
                        </div>
                      </td>
                      <td
                        class="cart__final-price text-right small--hide"
                        data-cart-item-line-price=""
                      >
                        <dl
                          class="hide"
                          data-cart-item-discounted-price-group=""
                        >
                          <dt>
                            <span class="visually-hidden">Regular total</span>
                          </dt>
                          <dd>
                            <s data-cart-item-original-price="">Rs. 234.00</s>
                          </dd>
                          <dt>
                            <span class="visually-hidden">
                              Discounted total
                            </span>
                          </dt>
                          <dd>
                            <span
                              class="order-discount"
                              data-cart-item-final-price=""
                            >
                              Rs. 234.00
                            </span>
                          </dd>
                        </dl>
                        <div data-cart-item-regular-price-group="">
                          <span data-cart-item-regular-price="">
                            Rs. 234.00
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div class="cart__footer">
                  <div class="grid">
                    <div class="grid__item text-right small--text-center">
                      <div class="hide" data-cart-discount-wrapper="">
                        <div
                          class="order-discount-card-wrapper"
                          data-cart-discount=""
                        >
                          <span class="order-discount order-discount--title order-discount--cart">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              role="presentation"
                              class="icon icon-saletag"
                            >
                              <path
                                d="M10 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-3H7a1 1 0 0 0-.71.29l-6 6a1 1 0 0 0 0 1.42l4 4a1 1 0 0 0 1.42 0c.19-.2 5.8-5.81 6-6A1 1 0 0 0 12 5V2a2 2 0 0 0-2-2z"
                                fill="#231F20"
                              ></path>
                            </svg>
                            <span class="visually-hidden">Discount:</span>
                            <span data-cart-discount-title=""></span>
                          </span>
                          <span class="order-discount order-discount--cart order-discount--cart-total">
                            -<span data-cart-discount-amount=""></span>
                          </span>
                        </div>
                      </div>

                      <div class="cart-subtotal">
                        <span class="cart-subtotal__title">Subtotal</span>
                        <span
                          class="cart-subtotal__price"
                          data-cart-subtotal=""
                        >
                          Rs. 234.00
                        </span>
                      </div>
                      <div class="cart__shipping rte">
                        Tax included.{" "}
                        <a href="/policies/shipping-policy">Shipping</a>{" "}
                        calculated at checkout.
                      </div>
                      <div class="cart__buttons-container">
                        <div class="cart__submit-controls">
                          <input
                            type="submit"
                            name="checkout"
                            class="cart__submit btn btn--small-wide"
                            value="Check out"
                          />
                        </div>

                        <div
                          class="cart__error-message-wrapper hide"
                          role="alert"
                          data-cart-error-message-wrapper=""
                        >
                          <span class="visually-hidden">Error </span>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            role="presentation"
                            class="icon icon-error"
                            viewBox="0 0 14 14"
                          >
                            <g fill="none" fill-rule="evenodd">
                              <path d="M7 0a7 7 0 0 1 7 7 7 7 0 1 1-7-7z"></path>
                              <path
                                class="icon-error__symbol"
                                d="M6.328 8.396l-.252-5.4h1.836l-.24 5.4H6.328zM6.04 10.16c0-.528.432-.972.96-.972s.972.444.972.972c0 .516-.444.96-.972.96a.97.97 0 0 1-.96-.96z"
                              ></path>
                            </g>
                          </svg>
                          <span
                            class="cart__error-message"
                            data-cart-error-message=""
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <p
                class="visually-hidden"
                data-cart-status=""
                aria-live="polite"
                role="status"
              ></p>
            </div>

            <div
              class="empty-page-content hide text-center"
              data-empty-page-content=""
            >
              <h1>Your cart</h1>
              <p class="cart--empty-message">Your cart is currently empty.</p>
              <div class="cookie-message">
                <p>Enable cookies to use the shopping cart</p>
              </div>
              <a href="/" class="btn btn--has-icon-after cart__continue-btn">
                Continue shopping
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  class="icon icon--wide icon-arrow-right"
                  viewBox="0 0 20 8"
                >
                  <path
                    d="M15.186.445c.865.944 1.614 1.662 2.246 2.154.631.491 1.227.857 1.787 1.098v.44a9.933 9.933 0 0 0-1.875 1.196c-.606.485-1.328 1.196-2.168 2.134h-.752c.612-1.309 1.253-2.315 1.924-3.018H.77v-.986h15.577c-.495-.632-.84-1.1-1.035-1.406-.196-.306-.486-.843-.87-1.612h.743z"
                    fill="#000"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
