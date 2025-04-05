import ClearDataHandler from "./clear";
import CopyDataHandler from "./copy";

function init() {
  new ClearDataHandler([
    "business",
    "businessEmail",
    "locationBusiness",
    "phoneBusiness",
    "dni",
    "urlSite",
  ]);

  new CopyDataHandler();
}

document.addEventListener("DOMContentLoaded", () => {
  init();
});
