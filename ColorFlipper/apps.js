function ChangeColor() {
    // generate three random colors (random RGB integers)
    const red = Math.floor(256 * Math.random());
    const green = Math.floor(256 * Math.random());
    const black = Math.floor(256 * Math.random());
    // assemble the RGB string
    const RGB = `rgb(${red}, ${green}, ${black})`;
    // modify the style of the div to be the RGB color
    document.getElementById('page').style.backgroundColor = RGB;
}