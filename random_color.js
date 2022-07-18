const getColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
  // To generate random numbers
  const randomCode = '#' + randomColor.toString(16)
  document.getElementById('Bcolor').style.backgroundColor = randomCode
  document.getElementById('Color').innerHTML = randomCode
}
