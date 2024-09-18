import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Success");
    }

    async getHtml() {
        return `
        <!-- Success message -->
        <section class="vh-100 gradient-custom" id="success">
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card bg-dark text-white">
                  <div class="card-body p-5 text-center">
                    <h2 class="fw-bold mb-2">Success!</h2>
                    <p class="mb-4">Your action was completed successfully.</p>
                    <a href="login.html" class="btn btn-primary btn-lg mb-4">Go to Login</a>
                    <a href="index.html" class="btn btn-outline-light btn-lg">Return to Home</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        `;
    }
}