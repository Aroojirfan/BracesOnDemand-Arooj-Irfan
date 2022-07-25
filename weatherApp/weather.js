const weather = async (city) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
    const data  = await response.json()
    showWeather(data)
  } catch (error) {
    console.log(error)
    alert(`Weather info unavailable for this city ${city}`)
  }
  
}
const showWeather = (data) => {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  cityName.innerHTML = `${name}`
  icon.src =
    'https://openweathermap.org/img/wn/ + ${icon} + .png';
  desc.innerText = `${description}`;
  humidity.innerText =
    `Humidity:  " "  ${humidity} + %`;
    temperature.innerText = `${temp}  °C`;
    windWeather.innerText =
    `Wind speed :  ${speed} km/hr`;
  loading.classList.remove("loading");
  document.body.style.backgroundImage =
   `url('https://source.unsplash.com/1600x900/? + ${name} + )`;
}
const search = () =>{
  weather(searchItem.value);
}
