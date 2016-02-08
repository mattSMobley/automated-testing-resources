module.exports = {
  tax: function(num) {
    if (num<1){
      return "Error. Your bill can't be under $1, jerk."
    } else if (num <= 10) {
      return num + (num * .10);
    } else if (num <= 20) {
      var first = 11;
      var second = (num - 10) * 1.07;
      var total = first + second;
      var nums = total.toFixed(2);
      return parseFloat(nums);
    } else if (num <=30){
      var first = 11;
      var second = 10.70;
      var third = (num - 20) * 1.05;
      var total = first + second + third;
      var nums = total.toFixed(2);
      return parseFloat(nums);
    } else if (num>30){
      var first = 11;
      var second = 10.70;
      var third = 10.50;
      var firstThree = first + second + third;
      var rest = (num - 30)*1.03;
      var total = firstThree + rest;
      var nums = total.toFixed(2);
      return parseFloat(nums);
    }
  }



}
