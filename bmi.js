function calculateBMI() {
    var weight = document.bmiform.kgs.value, height = document.bmiform.cm.value;
    document.bmiform.bmi.value =  bmi = (weight / ((height * height)/10000)).toFixed(2);
  } 