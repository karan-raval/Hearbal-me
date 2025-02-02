import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Header />
      <main
        class="main-content js-focus-hidden"
        id="MainContent"
        role="main"
        tabindex="-1"
      >
        <div class="page-width">
          <div class="grid">
            <div class="grid__item medium-up--one-half medium-up--push-one-quarter">
              <div
                class="form-message form-message--success hide"
                id="ResetSuccess"
                tabindex="-1"
              >
                We've sent you an email with a link to update your password.
              </div>

              <div id="CustomerLoginForm" class="form-vertical">
                <h1 id="LoginHeading" class="text-center">
                  Login
                </h1>

                <form
                  method="post"
                  action="/account/login"
                  id="customer_login"
                  accept-charset="UTF-8"
                  data-login-with-shop-sign-in="true"
                  novalidate="novalidate"
                >
                  <input
                    type="hidden"
                    name="form_type"
                    value="customer_login"
                  />
                  <input type="hidden" name="utf8" value="✓" />
                  <label for="CustomerEmail">Email</label>
                  <input
                    type="email"
                    name="customer[email]"
                    id="CustomerEmail"
                    autocomplete="email"
                    autocorrect="off"
                    autocapitalize="off"
                  />

                  <label for="CustomerPassword">Password</label>
                  <input
                    type="password"
                    value=""
                    name="customer[password]"
                    id="CustomerPassword"
                  />

                  <div class="text-center">
                   

                    <input type="submit" class="btn" value="Sign In" />

                    <p>
                      <Link to={'/signup'} id="customer_register_link">
                        Create account
                      </Link>
                    </p>
                  </div>
                </form>
              </div>

              <div id="RecoverPasswordForm" class="hide">
                <div class="text-center">
                  <h2 id="RecoverHeading">Reset your password</h2>
                  <p>We will send you an email to reset your password.</p>
                </div>

                <div class="form-vertical">
                  <form
                    method="post"
                    action="/account/recover"
                    accept-charset="UTF-8"
                  >
                    <input
                      type="hidden"
                      name="form_type"
                      value="recover_customer_password"
                    />
                    <input type="hidden" name="utf8" value="✓" />

                    <label for="RecoverEmail">Email</label>
                    <input
                      type="email"
                      value=""
                      name="email"
                      id="RecoverEmail"
                      class="input-full"
                      autocorrect="off"
                      autocapitalize="off"
                    />
                    <div class="text-center">
                      <p>
                        <input type="submit" class="btn" value="Submit" />
                      </p>

                      <a id="HideRecoverPasswordLink">
                        Cancel
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
