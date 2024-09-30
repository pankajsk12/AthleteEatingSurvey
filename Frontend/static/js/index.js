import LandingPage from "./views/LandingPage.js";
import Login from "./views/Login.js";
import Survey from "./views/Survey.js";
import Signup from "./views/Signup.js";
import Success from "./views/success.js";
import Subscription from "./views/Subscribtion.js";
import AddDetails from "./views/addDetails.js";

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: LandingPage },
    { path: "/login", view: Login },
    { path: "/survey", view: Survey },
    { path: "/signup", view: Signup },
    { path: "/success", view: Success },
    { path: "/subscription", view: Subscription },
    { path: "/adddetails", view: AddDetails },
  ];

  // Test each route for potential match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  // Default to the first route (LandingPage) if no match is found
  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const view = new match.route.view(getParams(match));

  // Render the matched view
  document.querySelector("#app").innerHTML = await view.getHtml();

  // Call the afterRender method if it exists
  if (typeof view.afterRender === "function") {
    view.afterRender();
  }
};

// Event listeners
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
