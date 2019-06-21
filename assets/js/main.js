let bodyBackground = document.querySelector(`body`);
let color1 = document.getElementById(`color1`);
let color2 = document.getElementById(`color2`);
let colorCode = document.querySelector(`h3`);
let colorGen = document.querySelector(`#colorGenerator`);

const colorChange = () =>{
    bodyBackground.style.background = `linear-gradient(90deg, ${firstColor()}, ${secondColor()})`; 
    colorCode.textContent = `${bodyBackground.style.background};`;
} 
const generator = () =>{
    color1.value = magicBox();
    color2.value = magicBox();
    colorChange();
}
const magicBox = () =>{
    return '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
}
const firstColor = () => {
    return color1.value;
}
const secondColor = () =>{
    return color2.value;
}

color1.addEventListener(`input`, colorChange);
color2.addEventListener(`input`, colorChange);
colorGen.addEventListener(`click`, generator);