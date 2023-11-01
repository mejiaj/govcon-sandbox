const languageSelector = document.querySelector(".dgc-language-selector");
const languageInput = languageSelector.querySelector(".usa-input");
const languageList = languageSelector.querySelector(
  ".dgc-language-selector__language-list"
);

let searchTerm;

function findTerm(e) {
  let searchTerm = languageInput.value.trim().toLowerCase();

  let hiddenItems = languageList.querySelectorAll('[hidden = "true"]');

  hiddenItems.forEach((item) => {
    item.removeAttribute("hidden");
  });

  if (searchTerm) {
    languageList.querySelectorAll("li").forEach((language) => {
      // text = language.textContent.toLowercase();
      const languages = language.textContent.trim().toLowerCase();

      if (!languages.match(searchTerm)) {
        language.setAttribute("hidden", "true");
      }
    });
  }
}

languageInput.addEventListener("keyup", findTerm);
languageInput.addEventListener("change", findTerm);
languageInput.addEventListener("submit", findTerm);
