const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");
const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-card");
const backTop = document.getElementById("back-top");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});

window.addEventListener("scroll", function() {
    backTop.classList.toggle("show", window.scrollY > 400);

    let current = "home";

    sections.forEach(function(section) {
        if (window.scrollY >= section.offsetTop - 180) {
            current = section.id;
        }
    });

    navLinks.forEach(function(link) {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + current
        );
    });
});

backTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

filters.forEach(function(button) {
    button.addEventListener("click", function() {
        filters.forEach(function(item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.dataset.filter;

        projects.forEach(function(project) {
            if (
                category === "all" ||
                project.dataset.category === category
            ) {
                project.classList.remove("hidden");
            } else {
                project.classList.add("hidden");
            }
        });
    });
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("form-note").textContent =
        "Form design is ready! Connect an email service to receive messages.";

    this.reset();
});