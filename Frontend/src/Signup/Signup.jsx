import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Signup = () => {
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
              <div class="form-vertical">
                <h1 class="text-center">Create Account</h1>
                <form
                  method="post"
                  action="/account"
                  id="RegisterForm"
                  accept-charset="UTF-8"
                  data-login-with-shop-sign-up="true"
                  novalidate="novalidate"
                >
                  <input
                    type="hidden"
                    name="form_type"
                    value="create_customer"
                  />
                  <input type="hidden" name="utf8" value="✓" />

                  <label for="RegisterForm-FirstName">First Name</label>
                  <input
                    type="text"
                    name="customer[first_name]"
                    id="RegisterForm-FirstName"
                    autocomplete="given-name"
                  />

                  <label for="RegisterForm-LastName">Last Name</label>
                  <input
                    type="text"
                    name="customer[last_name]"
                    id="RegisterForm-LastName"
                    autocomplete="family-name"
                  />

                  <label for="RegisterForm-email">Email</label>
                  <input
                    type="email"
                    name="customer[email]"
                    id="RegisterForm-email"
                    class=""
                    autocorrect="off"
                    autocapitalize="off"
                    autocomplete="email"
                    aria-required="true"
                  />
                  <label for="RegisterForm-password">Password</label>
                  <input
                    type="password"
                    name="customer[password]"
                    id="RegisterForm-password"
                    class=""
                    aria-required="true"
                  />
                  <p class="text-center">
                    <input type="submit" value="Create" class="btn" />
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
