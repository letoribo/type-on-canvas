//keyAllowed = {}; 
var arr = [""];
var inp = $('input[type="text"]').eq(0);
document.onkeypress = function(event){
  inp.focus();
  var x = event.which || event.keyCode; //console.log(x); 
  /*if (keyAllowed [x] === false) return;
  keyAllowed [x] = false;*/
  //var e = window.event || e;
  if (x == 13){
    ctx.clearRect(0, 0, graph.width, graph.height); var arr = [""];
  }
  var y = String.fromCharCode(x); 
  /*var symbol = $('input[type="text"]').eq(0).val(); //e.target.value; 
  console.log(symbol, y); divide(symbol);*/
  
  window.setTimeout(function(){ 
    var symbol = inp.val();  ///console.log(arr, symbol, y); 
    divide(symbol); 
  }, 0); inp.val("");
};

function divide(y){
  arr.push(y); var val = arr.length;  ///console.log(arr, y, val); 
  dots(val);
}

$(document).ready(function(){//console.log(window.innerWidth);
  $("#division").val(0);
  var graph = document.getElementById("graph");
  ctx = graph.getContext("2d");
  ctx.canvas.width = window.innerWidth;
  ctx.beginPath(); 
  ctx.moveTo(0,0); 
  ctx.lineTo(graph.width,0);
  ctx.stroke();
});
function getdistance(val){
  return(window.innerWidth / val);
}
// Return the x pixel for a graph point
function getXPixel(val, val2){
  return(val * val2);
}
function rndColor(){
  return '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
}
// Draw the dots
var dots = function(dvs){
  for(var i = 0; i < dvs; ++i){//console.log(arr[i], i, getdistance(dvs));
    ctx.arc(0, 500000, 0, 0, 0); //ctx.arc(graph.width*graph.width, graph.width*graph.width, 0, 0, 0);
    ctx.arc(getXPixel(i, getdistance(dvs)), 0, 0, 0, 0);
    ctx.fillStyle = rndColor(); 
    var y = graph.height / 2; //dvs; 
    var fsize = getdistance(dvs) > 128 ? 128 : getdistance(dvs);
    ctx.font = fsize + 'pt Candara'; 
    ctx.textAlign = 'right';      
    ctx.fillText(arr[i], getXPixel(i, getdistance(dvs)), y); //i + ": " +   
    ctx.fill();
  }
};
