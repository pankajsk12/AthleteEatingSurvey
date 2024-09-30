import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Login");
  }

  async getHtml() {
    return `
      <section id="loginForm" class="h-100 gradient-form" style="background-color: #eee">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="row g-0 h-100">
                  <div class="col-lg-6 d-flex flex-column justify-content-center">
                    <div class="card-body p-md-5 mx-md-4">
                      <form id="loginForm">
                        <p>Please login to your account</p>

                        <div class="form-outline mb-3">
                          <input type="email" id="email" class="form-control" placeholder="Phone number or email address" required/>
                          <label class="form-label" for="email">Email</label>
                        </div>

                        <div class="form-outline mb-3">
                          <input type="password" id="password" class="form-control" required/>
                          <label class="form-label" for="password">Password</label>
                        </div>

                        <div class="text-center pt-1 mb-4 pb-1">
                          <button type="submit" class="btn btn-primary btn-block gradient-custom-2 mb-3">Log in</button>
                          <a class="text-muted" href="#!">Forgot password?</a>
                        </div>

                        <div class="d-flex align-items-center justify-content-center pb-3">
                          <p class="mb-0 me-2">Don't have an account?</p>
                          <a class="btn btn-outline-danger" href="/signup">Create new</a>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 class="mb-4">We are more than just a company</h4>
                      <p class="small mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    console.log('afterRender called');

    const loginForm = document.querySelector("#loginForm");

    if (loginForm) {
      console.log('Form element found');

      loginForm.addEventListener("submit", async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log('Form submitted');

        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        console.log('Email:', email);
        console.log('Password:', password);

        try {
          const response = await fetch('http://localhost:9000/api/user/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });

          const result = await response.json();

          if (response.ok) {
            console.log('Login successful');
            window.location.href = "/subscription";
          } else {
            console.error('Login failed', result.message || 'Login failed');
            alert(result.message || 'Login failed');
          }
        } catch (error) {
          console.error('Error logging in:', error);
          alert('An error occurred. Please try again later.');
        }
      });
    } else {
      console.error('Form element not found');
    }
  }
}
