var arr = [""];
var inp = $('input[type="text"]').eq(0);
inp.on('keydown', function() {
  var key = event.keyCode || event.charCode;
  //console.log(key, arr); 
  if( key == 8 || key == 46 )
    deleteLast();
});
document.onkeypress = function(){
  inp.focus();

  window.setTimeout(function(){ 
    var symbol = inp.val();
    divide(symbol); 
  }, 10); inp.val("");
};

function divide(y){
  arr.push(y); var val = arr.length;
  dots(val);
}

function deleteLast(){
  arr.pop(); var val = arr.length;
  dots(val);
}

$(document).ready(function(){
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
};
// Return the x pixel for a graph point
function getXPixel(val, val2){
  return(val * val2);
};
function rndColor(){
  return '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
};
// Draw the dots
var dots = function(dvs){
  for(var i = 0; i < dvs; ++i){
    ctx.arc(0, 500000, 0, 0, 0);
    ctx.arc(getXPixel(i, getdistance(dvs)), 0, 0, 0, 0);
    ctx.fillStyle = rndColor(); 
    var y = graph.height / 2;
    var fsize = getdistance(dvs) > 128 ? 128 : getdistance(dvs);
    ctx.font = fsize + 'pt Candara'; 
    ctx.textAlign = 'right';      
    ctx.fillText(arr[i], getXPixel(i, getdistance(dvs)), y);
    ctx.fill();
  }
};
