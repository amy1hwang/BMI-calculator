var bmi = function(height, weight) {
  var metricWeight = weight * 0.45;
  var metricHeight = height * 0.025;
  var metricHeightSquared = metricHeight * metricHeight;
  return metricWeight / metricHeightSquared;
};

var ask = function() {
  height = parseInt(prompt("What is your height in inches?: "));
  weight = parseInt(prompt("What is your weight in lbs?: "));
  var yourBmi = bmi(height, weight);
  alert(yourBmi);
}

ask();
