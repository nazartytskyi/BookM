document.getElementById("first").focus();

document.getElementById("first").onkeypress = function(event) {
 if(event.keyCode==13) {
   document.getElementById("second").focus();
 }
};

document.getElementById("second").onkeypress = function(event) {
 if(event.keyCode==13) {
   document.getElementById("third").focus();
 }
};

document.getElementById("third").onkeypress = function(event) {
 if(event.keyCode==13) {
   document.getElementById("first").focus();
 }
};

setInterval(function() {
  var k1 = document.getElementById("first").value;
  if (k1 !== '') {
   k1 = +k1;
   var min = Math.ceil(k1 / (k1 - 1) * 100) / 100;
   document.getElementById("min").innerHTML = 'Enter K2 (min: ' + min.toString() + ')';
  } else {
   document.getElementById("min").innerHTML = 'Enter K2';
  }
  
}, 10);


setInterval(function() {
  var k1 = document.getElementById("first").value;
  var k2 = document.getElementById("second").value;
  var sum1 = document.getElementById("third").value;
  var sum2 = 0;
  if (k1 !== '' && k2 !== '' && sum1 !== '') {
   k1 = +k1;
   k2 = +k2;
   sum1 = +sum1;
   var sum2 = Math.round(k1 * sum1 * 100 / k2) / 100;
   document.getElementById("fourth").innerHTML = 'SUM2: ' + sum2.toString(); 
   var result = Math.round((k1 * sum1 - sum1 - sum2) * 100) / 100;
   document.getElementById("fifth").innerHTML = 'Result: ' + result.toString();  
  } else {
   document.getElementById("fourth").innerHTML = 'SUM2:';
   document.getElementById("fifth").innerHTML = 'Result:';  
  }
}, 110);