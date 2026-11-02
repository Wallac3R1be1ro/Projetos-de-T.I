const header = document.querySelector(".header");
const burger = document.querySelector(".burger");
const links = document.querySelector(".links");
const cartCount = document.querySelector(".cart b");

burger.addEventListener("click", () => {
    links.classList.toggle("open");
});

links.addEventListener("click", () => {
    links.classList.remove("open");
});

document.querySelectorAll(".add").forEach(btn =>{
    btn.addEventListener("click", () => {
        //const count = Number(cartCount.textContent);
        cartCount.textContent = count + 1;
        btn.textContent = "Added";
        btn.classList.add("done");
    })
})

const form = document.querySelector(".subscribe");

form.addEventListener("submit", e => {
    e.preventDefault();
    form.innerHTML = "<p>Obrigado!</p>";
});

const section = document.querySelectorAll("section, footer");

function reveal() {
    section.forEach(s => {
        const top = s.getBoundingClientRect().top;
        if (top < innerHeight - 120) s.classList.add("show");
    });
    header.classList.toggle("scrolled", scrollY > 40);
}

sections.forEach(s => s.classList.add("reveal"));
window.addEventListener("scroll", reveal);
reveal();