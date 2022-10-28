const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let $body = document.getElementsByTagName('body')
let $color = document.getElementsByTagName('p')
function createHex(){
    let hex = '#';
    for(let i = 0; i < 6; i++){
    const index = Math.floor(Math.random() * hexValues.length)
    hex += hexValues[index];
    }
    return hex
}
function changeHex() {
    $body[0].style.backgroundImage = ''
    $color[1].innerHTML = ''
    let hex = createHex()
    $color[0].innerHTML = hex
    $body[0].style.backgroundColor = $color[0].innerHTML;
    
  } 

function changeGradientColor() { 
    $color[0].innerHTML = ''
    let hex1 = createHex()
    let hex2 = createHex()
    let gradientColor = 'linear-gradient(to right, '+ hex1 + ', ' + hex2 + ')'
    $color[1].innerHTML = gradientColor
    $body[0].style.backgroundImage = $color[1].innerHTML
} 
