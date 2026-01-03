// Code written by me
// function setDarkOrLight(){
//     if(window.matchMedia('(prefers-color-scheme: dark)').matches){
//     document.body.classList.add("dark");
//     document.body.classList.remove("light");
// }
// else{
//     document.body.classList.add("light");
//     document.body.classList.remove("dark");
//     }
// }

// if(localStorage.getItem("theme")){
//     document.body.classList.add(localStorage.getItem("theme"));
// }
// else{
//     setDarkOrLight();
// }
// window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", function(){
//     if(!localStorage.getItem("theme")){
//         setDarkOrLight();
//     }
// })

// let btn = document.querySelector("button");
// btn.addEventListener("click", function(){
//     if(document.body.classList.contains("dark")){
//         document.body.classList.remove("dark");
//         document.body.classList.add("light");
//         localStorage.setItem("theme", "light");
//     } else{
//         document.body.classList.remove("light");
//         document.body.classList.add("dark");
//         localStorage.setItem("theme", "dark");
//     }
// })


// Code written by Chat GPT

const body = document.body;
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const btn = document.querySelector("button");

function applyTheme(theme) {
    body.classList.toggle("dark", theme === "dark");
    body.classList.toggle("light", theme === "light");
}

function getSystemTheme() {
    return mediaQuery.matches ? "dark" : "light";
}

// Initial theme setup
const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme || getSystemTheme());

// Listen to OS theme changes (only if user hasn't chosen manually)
mediaQuery.addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
        applyTheme(getSystemTheme());
    }
});

// Button toggle
btn.addEventListener("click", () => {
    const newTheme = body.classList.contains("dark") ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
});

