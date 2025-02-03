const convertToCelsius = function(fahrenheitTemp) {
  let startTemp = fahrenheitTemp;
  let conversion = (startTemp - 32) * (5 / 9);
  let roundedConversion = Math.round(conversion * 10) / 10;
  return roundedConversion;
};

const convertToFahrenheit = function(celciusTemp) {
  let startTemp = celciusTemp;
  let conversion = (startTemp * 1.8) + 32;
  let roundedConversion = Math.round(conversion * 10) / 10;
  return roundedConversion;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
