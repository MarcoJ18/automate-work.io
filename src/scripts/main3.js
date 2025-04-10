import ClearDataHandler from "./clear";
import CopyDataHandler from "./copy";

const dataInputIds = [
  "business",
  "businessEmail",
  "locationBusiness",
  "phoneBusiness",
  "dni",
  "urlSite",
]

const dataButtonIds = [
  "Terminosdeuso",
  "Avisolegal",
  "Politicasdecookies",
  "Declaraciondeaccesibilidad"

]


function init() {
  new ClearDataHandler(dataInputIds);

  new CopyDataHandler(dataButtonIds);
}

document.addEventListener("DOMContentLoaded", () => {
  init();
});
