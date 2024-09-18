import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("LandingPage");
    }

    async getHtml() {
        return `

        <!-- Header-->
        <header class="masthead text-center text-white">
            <div class="masthead-content">
                <div class="container px-5">
                    <h1 class="masthead-heading mb-0">Eat Right</h1>
                    <h2 class="masthead-subheading mb-0">Help us to know you more.</h2>
                    <a class="btn btn-primary btn-xl rounded-pill mt-5" href="/login">Take a survey</a>
                </div>
            </div>
            <div class="bg-circle-1 bg-circle"></div>
            <div class="bg-circle-2 bg-circle"></div>
            <div class="bg-circle-3 bg-circle"></div>
            <div class="bg-circle-4 bg-circle"></div>
        </header>
        <!-- Content section 1-->
        <section id="scroll">
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <div class="p-5"><img class="img-fluid rounded-circle" src="./assets/img/01.jpg" alt="..." /></div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5">
                            <h2 class="display-4"></h2>
                            <p>Intuitive Eating is a framework with 10 principles. It was created by a dietitian named Evelyn Tribole, and was designed to link self-care and the mind-body connection to eating.
                                Perhaps this sounds a little bit like something you may already be familiar with, especially if you have a bit of a nutrition background or have worked with a dietitian before.
                                Intuitive Eating principles can be helpful if you are looking to cultivate a healthy relationship with food, mind and body.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Content section 2-->
        <section>
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6">
                        <div class="p-5"><img class="img-fluid " src="assets/img/02.jpg" alt="..." /></div>
                    </div>
                    <div class="col-lg-6">
                        <div class="p-5">
                            <h3 class="display-4">The Delicious Truth About Carb Loading!</h3>
                            <p>Carb loading is so much more than loading up on your favorite bowl of pasta the night before a race! 
                                When race season rolls around, there’s a lot of talk about carb loading.
                                In today’s blog, we’re diving into the delicious concept of carb loading and breaking down what it is, and how to go about it for maximal results and minimal discomfort. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Content section 3-->
        <section>
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <div class="p-5"><img class="img-fluid rounded" src="assets/img/03.jpg" alt="..." /></div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5">
                            <h2 class="display-4">Choosing the RIGHT Hydration for Your Event!</h2>
                            <p>We want to help you pick out the right sports drink to help you crush your races this season.
                                There are SO many options for hydration products that it can become overwhelming. Carbs? No carbs? A little sodium? Lots of sodium? Sports drink? Electrolytes? In this month’s blog, we are going to break it all down for you!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}