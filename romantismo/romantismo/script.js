document.addEventListener("scroll", function(){
    let sections = document.querySelectorAll(".section");

    sections.forEach(function(section) {
        let rect = section.getBoundingClienteRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add(".visible");
        } else {
            section.classList.remove(".visible")
        }
    });
});