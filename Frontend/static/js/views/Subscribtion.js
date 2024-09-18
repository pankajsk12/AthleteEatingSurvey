import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Subscription");
  }

  async getHtml() {
    return `
    <section id="pricing">
    <div class="row">
      <div class="pricing-column col-lg-4 col-md-6">
        <div class="card">
          <div class="card-header">
            <h3>FREE</h3>
          </div>
          <div class="card-body">
            <h2>For Individuals</h2>
            <p>Free</p>
            <p>&nbsp</p>
            <p>&nbsp</p>
            <p>&nbsp</p>
            <a class="btn btn-lg btn-block btn-primary" href="/adddetails">Proceed</a>
          </div>
        </div>
      </div>

      <div class="pricing-column col-lg-4 col-md-6">
        <div class="card">
          <div class="card-header">
            <h3>PLUS</h3>
          </div>
          <div class="card-body">
            <h2>Single Survey</h2>
            <p>$5 per survey for 1-100 Survey</p>
            <p>$4 per survey for 101-200 Survey</p>
            <p>$3 per survey for 200+ Survey</p>
            <p>&nbsp</p>
            <a class="btn btn-lg btn-block btn-primary" href="/adddetails">Proceed</a>
          </div>
        </div>
      </div>

      <div class="pricing-column col-lg-4">
        <div class="card">
          <div class="card-header">
            <h3>PRO</h3>
          </div>
          <div class="card-body">
            <h2>Repeat Survey</h2>
            <p>$10 per athlete for 1-100 athlete</p>
            <p>$8 per athlete for 101-200 athlete</p>
            <p>$6 per athlete for 200+ athlete</p>
            <p>*All for per Year</p>
            <a class="btn btn-lg btn-block btn-primary" href="/adddetails">Proceed</a>
          </div>
        </div>
      </div>
    </div>
  </section>
    `;
  }
}
