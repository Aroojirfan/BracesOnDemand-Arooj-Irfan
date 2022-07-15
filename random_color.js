const getColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
  // To generate random numbers
  const randomCode = '#' + randomColor.toString(16)
  // To convert to hex codes
  document.getElementById('Bcolor').style.backgroundColor = randomCode
  // change background color to random colors by clicking
  document.getElementById('Color').innerHTML = randomCode
}
document.getElementById('GenColor').addEventListener('click', getColor)
// after clicking the button having id of GenColor, GetColor function will be called!!
