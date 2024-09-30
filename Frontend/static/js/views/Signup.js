import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Signup");
  }

  async getHtml() {
    return `
      <section id="signupPage">
        <!-- Jumbotron -->
        <div class="px-4 py-5 px-md-5 text-center text-lg-start" style="background-color: hsl(0, 0%, 96%)">
          <div class="container">
            <div class="row gx-lg-5 align-items-center">
              <div class="col-lg-6 mb-5 mb-lg-0">
                <h1 class="my-5 display-3 fw-bold ls-tight">
                  The best offer <br />
                  <span class="text-primary">for your business</span>
                </h1>
                <p style="color: hsl(217, 10%, 50.8%)">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                  quibusdam tempora at cupiditate quis eum maiores libero
                  veritatis? Dicta facilis sint aliquid ipsum atque?
                </p>
              </div>

              <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="card">
                  <div class="card-body py-5 px-md-5">
                    <form id="signupForm">
                      <!-- 2 column grid layout with text inputs for the first and last names -->
                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div data-mdb-input-init class="form-outline">
                            <input type="text" id="firstName" class="form-control" placeholder="First name" required/>
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <div data-mdb-input-init class="form-outline">
                            <input type="text" id="lastName" class="form-control" placeholder="Last name" required/>
                          </div>
                        </div>
                      </div>

                      <!-- Email input -->
                      <div data-mdb-input-init class="form-outline mb-4">
                        <input type="email" id="email" class="form-control" placeholder="Email Id" required/>
                      </div>

                      <!-- Password input -->
                      <div data-mdb-input-init class="form-outline mb-4">
                        <input type="password" id="password" class="form-control" placeholder="Password" required/>
                      </div>

                      <!-- Submit button -->
                      <div class="d-flex justify-content-center">
                        <button id="signupBtn" type="submit" class="btn btn-primary btn-block mb-4">
                            Sign up
                        </button>
                      </div>

                      <!-- Register buttons -->
                      <div class="text-center">
                        <p>or sign up with:</p>
                        <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                          <i class="fab fa-facebook-f"></i>
                        </button>

                        <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                          <i class="fab fa-google"></i>
                        </button>

                        <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                          <i class="fab fa-twitter"></i>
                        </button>

                        <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                          <i class="fab fa-github"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Jumbotron -->
      </section>
    `;
  }

  async afterRender() {
    console.log('afterRender called');

    const signupForm = document.querySelector("#signupForm");

    if (signupForm) {
      console.log('Form element found');

      signupForm.addEventListener("submit", async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log('Form submitted');

        const firstname = document.querySelector('#firstName').value;
        const lastname = document.querySelector('#lastName').value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        try {
          const response = await fetch('http://localhost:9000/api/user/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstname, lastname, email, password }),
          });

          const result = await response.json();

          if (response.ok) {
            console.log('Signup successful');
            window.location.href = "/login";
          } else {
            console.error('Signup failed', result.message || 'Signup failed');
            alert(result.message || 'Signup failed');
          }
        } catch (error) {
          console.error('Error Signing up:', error);
          alert('An error occurred. Please try again later.');
        }
      });
    } else {
      console.error('Form element not found');
    }
  }
}
