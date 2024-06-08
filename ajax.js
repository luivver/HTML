window.addEventListener("load", function () {
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); 

      const target = this.getAttribute("href").slice(1); 
      const targetElement = document.getElementById(target);

      if (targetElement) {
        const sections = document.querySelectorAll("main section");
        sections.forEach(section => section.style.display = "none");

        targetElement.style.display = "block";
      }
    });
  });
});