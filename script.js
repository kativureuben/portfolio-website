document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");
    const scrollPos = window.pageYOffset;

    sections.forEach((section, i) => {
        if (scrollPos >= section.offsetTop - window.innerHeight / 2) {
            section.style.transform = `rotateY(${(scrollPos - section.offsetTop) / 10}deg)`;
        } else {
            section.style.transform = "rotateY(0)";
        }
    });
});
