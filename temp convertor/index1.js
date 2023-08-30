document.getElementById('convert_btn').onclick = temperatureConversion;
document.getElementById('reset-btn').onclick = reset;

function reset() {
  document.getElementById('Celsius').value = '';
  document.getElementById('Fahrenheit').value = '';
  document.getElementById('Kelvin').value = '';
}

function temperatureConversion() {
  var celsius = document.getElementById("Celsius").value;
  var fahrenheit = document.getElementById("Fahrenheit").value;
  var kelvin=document.getElementById("Kelvin").value;
  if (fahrenheit != '') {
       celsius = (parseFloat(fahrenheit) -32) /1.8;
       kelvin=(parseFloat(fahrenheit)-32)*(5/9)+273.15;

  }else if(kelvin !=''){
      celsius=(parseFloat(kelvin)-273.15);
      fahrenheit=(parseFloat(kelvin)-273.15)*1.8+32;
   }
   else{
    fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    kelvin=(parseFloat(celsius)+273.15);
   }
  
  
   document.getElementById('Celsius').value = parseFloat(celsius).toFixed(1);
   document.getElementById('Fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
   document.getElementById('Kelvin').value=parseFloat(kelvin).toFixed(1);
}