import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Survey");
    }

    async getHtml() {
        return `
        <section class="p-5 m-5">

        <div class="row col-5">
            <h4 class="fw-bold text-center mt-3"></h4>
            <form class="px-4" action="">
                <p class="fw-bold">How satisfied are you with our product?</p>
                <div class="d-flex justify-content-between">
                  <div class="form-check mb-2">
                      <input class="form-check-input" type="radio" name="exampleForm" id="radioExample1" />
                      <label class="form-check-label" for="radioExample1">
                        Option 1
                      </label>
                    </div>
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="radio" name="exampleForm" id="radioExample2" />
                      <label class="form-check-label" for="radioExample2">
                        Option 2
                      </label>
                    </div>
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="radio" name="exampleForm" id="radioExample3" />
                      <label class="form-check-label" for="radioExample3">
                        Option 3
                      </label>
                    </div>
                </div>
  
              </form>
              <h4 class="fw-bold text-center mt-3"></h4>
              <form class="px-4" action="">
                  <p class="fw-bold">How satisfied are you with our product?</p>
                  <div class="d-flex justify-content-between">
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="exampleForm" id="radioExample1" />
                        <label class="form-check-label" for="radioExample1">
                          Option 1
                        </label>
                      </div>
                      <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="exampleForm" id="radioExample2" />
                        <label class="form-check-label" for="radioExample2">
                          Option 2
                        </label>
                      </div>
                      <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="exampleForm" id="radioExample3" />
                        <label class="form-check-label" for="radioExample3">
                          Option 3
                        </label>
                      </div>
                  </div>
    
                </form>
                <h4 class="fw-bold text-center mt-3"></h4>
                <form class="px-4" action="">
                    <p class="fw-bold">How satisfied are you with our product?</p>
                    <div class="d-flex justify-content-between">
                      <div class="form-check mb-2">
                          <input class="form-check-input" type="radio" name="exampleForm" id="radioExample1" />
                          <label class="form-check-label" for="radioExample1">
                            Option 1
                          </label>
                        </div>
                        <div class="form-check mb-2">
                          <input class="form-check-input" type="radio" name="exampleForm" id="radioExample2" />
                          <label class="form-check-label" for="radioExample2">
                            Option 2
                          </label>
                        </div>
                        <div class="form-check mb-2">
                          <input class="form-check-input" type="radio" name="exampleForm" id="radioExample3" />
                          <label class="form-check-label" for="radioExample3">
                            Option 3
                          </label>
                        </div>
                    </div>
      
                  </form>
                  <h4 class="fw-bold text-center mt-3"></h4>
                  <form class="px-4" action="">
                      <p class="fw-bold">How satisfied are you with our product?</p>
                      <div class="d-flex justify-content-between">
                        <div class="form-check mb-2">
                            <input class="form-check-input" type="radio" name="exampleForm" id="radioExample1" />
                            <label class="form-check-label" for="radioExample1">
                              Option 1
                            </label>
                          </div>
                          <div class="form-check mb-2">
                            <input class="form-check-input" type="radio" name="exampleForm" id="radioExample2" />
                            <label class="form-check-label" for="radioExample2">
                              Option 2
                            </label>
                          </div>
                          <div class="form-check mb-2">
                            <input class="form-check-input" type="radio" name="exampleForm" id="radioExample3" />
                            <label class="form-check-label" for="radioExample3">
                              Option 3
                            </label>
                          </div>
                      </div>
        
                    </form>
                    <h4 class="fw-bold text-center mt-3"></h4>
                    <form class="px-4" action="">
                        <p class="fw-bold">How satisfied are you with our product?</p>
                        <div class="d-flex justify-content-between">
                          <div class="form-check mb-2">
                              <input class="form-check-input" type="radio" name="exampleForm" id="radioExample1" />
                              <label class="form-check-label" for="radioExample1">
                                Option 1
                              </label>
                            </div>
                            <div class="form-check mb-2">
                              <input class="form-check-input" type="radio" name="exampleForm" id="radioExample2" />
                              <label class="form-check-label" for="radioExample2">
                                Option 2
                              </label>
                            </div>
                            <div class="form-check mb-2">
                              <input class="form-check-input" type="radio" name="exampleForm" id="radioExample3" />
                              <label class="form-check-label" for="radioExample3">
                                Option 3
                              </label>
                            </div>
                        </div>
          
                      </form>
                      <h4 class="fw-bold text-center mt-3"></h4>
            <div class="text-end">
              <a data-mdb-button-init data-mdb-ripple-init class="btn btn-primary" href="/success">Submit</a>
            </div>
        </div>
        

    </section>
        `;
    }
}
