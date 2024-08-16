document.addEventListener('DOMContentLoaded',() => {
    const flipperButton = document.getElementById('flipper')
    const colorDisplay = document.getElementById('colorDisplay')

flipperButton.addEventListener('click', () => {
    const newColor = getRandomColor ();
    document.body.style.backgroundColor = newColor;
    colorDisplay.textContent = newColor;
} );

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i =0; i <6; i++){
        color += letters[Math.floor(Math.random()*16)]
    }
    return color;
}

})