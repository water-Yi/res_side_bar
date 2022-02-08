const dark = document.querySelector('.black_mode');
const night = document.querySelector('.navy_mode');
const light = document.querySelector('.white_mode');
const container = document.querySelector('.container')

console.log(container);

dark.addEventListener("click", ()=>{
    container.className = "container dark"
})

night.addEventListener("click", ()=>{
    container.className = "container navy"
})

light.addEventListener("click", ()=>{
    container.className = "container white"
})