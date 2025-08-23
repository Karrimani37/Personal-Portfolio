// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const targetPage = link.dataset.navLink.toLowerCase();

    // remove active from all
    navigationLinks.forEach((nav) => nav.classList.remove("active"));
    pages.forEach((page) => page.classList.remove("active"));

    // add active to clicked link
    link.classList.add("active");

    // find the page with matching data-page
    pages.forEach((page) => {
      if (page.dataset.page.toLowerCase() === targetPage) {
        page.classList.add("active");
      }
    });

    // scroll top
    window.scrollTo(0, 0);
  });
});
