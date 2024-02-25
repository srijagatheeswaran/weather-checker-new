
const btn = document.getElementById("btn");
const icon = document.getElementById("icon");
const err = document.getElementById("err");
const contant = document.getElementById('content');
const wea = document.getElementById('wea');


async function button(){
     const inputValue = document.getElementById("searchBox").value;
   const key="&appid=e0a9538e363bdc498c473dc6fe344cea&units=metric"
   const link = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputValue + key);
   data= await link.json();
   console.log(data)
   if(data.cod == '404'){
    err.style.display = "block"
    contant.style.display = "none"
   }
   else{
    err.style.display = "none"
    contant.style.display = "flex"

    document.getElementById('temp').innerHTML = Math.round(data.main.temp)  + "°c";
    document.getElementById('city').innerHTML = data.name;
    document.getElementById('wind').innerHTML = data.wind.speed + "km/h"; 
    document.getElementById('humidity').innerHTML = data.main.humidity + "%";
      
    if(data.weather[0].main == "Clouds"){
        icon.src = "images/clouds.png";
       }
       else if (data.weather[0].main == "Clear"){
        icon.src = "images/clear.png";
       }
       else if (data.weather[0].main == "Drizzle"){
        icon.src = "images/brizzle.png";
       }
       else if (data.weather[0].main == "Rain"){
        icon.src = "images/rain.png";
       }
       else if (data.weather[0].main == "Snow"){
        icon.src = "images/snow.png";
       }
       else if (data.weather[0].main == "Mist"){
        icon.src = "images/mist.png";
       }
       
    
    
       if(data.weather[0].main == "Clouds"){
        wea.innerHTML= "Clouds" ;
       }
       else if (data.weather[0].main == "Clear"){
        wea.innerHTML= "Clear" ;
       }
       else if (data.weather[0].main == "Drizzle"){
        wea.innerHTML= "Drizzle" ;
       }
       else if (data.weather[0].main == "Rain"){
        wea.innerHTML= "Rain" ;
       }
       else if (data.weather[0].main == "Snow"){
        wea.innerHTML= "Snow" ;
       }
       else if (data.weather[0].main == "Mist"){
        wea.innerHTML= "Mist" ;
       }}
    
    }
    
    
   

   
    


   


   

  
   
   





