import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("AddDetails");
  }

  async getHtml() {
    return `
        <section id="signupForm">
        <!-- Jumbotron -->
        <div class="px-4 py-5 px-md-5 text-center text-lg-start" style="background-color: hsl(0, 0%, 96%)">
          <div class="container">
            <div class="row gx-lg-5 align-items-center">
              <div class="col-lg-6 mb-5 mb-lg-0">
                <h1 class="my-5 display-3 fw-bold ls-tight">
                  Hi there... <br />
                </h1>
                <p style="color: hsl(217, 10%, 50.8%)">
                  Please help us to Know you more!!!
                </p>
              </div>
      
              <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="card">
                  <div class="card-body py-5 px-md-5">
                    <form>
                      <!-- 2 column grid layout with text inputs for the first and last names -->
                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div data-mdb-input-init class="form-outline">
                            <input type="text" id="form3Example1" class="form-control" placeholder="First name"/>
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <div data-mdb-input-init class="form-outline">
                          <input type="text" id="form3Example1" class="form-control" placeholder="Last name"/>
                          </div>
                        </div>
                      </div>

                      <!-- Password input -->
                      <div data-mdb-input-init class="form-outline mb-4">
                      <input type="text" id="form3Example1" class="form-control" placeholder="Age"/>
                      </div>
      
                      <!-- Email input -->
                      <div data-mdb-input-init class="form-outline mb-4">
                      <input type="email" id="form3Example1" class="form-control" placeholder="exampl@email.com"/>
                      </div>
      
                      <!-- Password input -->
                      <div data-mdb-input-init class="form-outline mb-4">
                      <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                      <option selected>Gender</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                      <option value="3">Rather Not to Say</option>
                      </select>
                      </div>

                      <!-- Password input -->
                      <div data-mdb-input-init class="form-outline mb-4">
                      <input type="text" id="form3Example1" class="form-control" placeholder="Your Sporting Event"/>
                      </div>
      
      
                      <!-- Submit button -->
                      <div class="d-flex justify-content-center">
                        <a data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4" href="/survey">
                            Take Survey
                        </a>
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
}
