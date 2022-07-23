



const weather = async  (city) => {
    
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=fab8f5d460762f2aefd85455b9b0ff2b")
   
    await response.json()
    .then((data) => showWeather(data));
    
    if (!response.ok){
      alert("incorrect city response");
    }
    
} 
 



function  showWeather (data) {
  

  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  var.cityName.innerHTML= `${name}`
  console.log(cityName)
  document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".humidity").innerText =
      "Humidity:" + " " + humidity + "%";
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".wind").innerText =
      "Wind speed :" + " " + speed + "km/hr";
    document.querySelector(".items").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
     
   
     
}


  
    
  // if(document.querySelector("#search").value=" "){
  //   alert(" Invalid City ")
  // }else{
  //   weather(document.querySelector("#search").value);
  // }
  
   

function search () {
  weather(document.querySelector("#search").value);
}
