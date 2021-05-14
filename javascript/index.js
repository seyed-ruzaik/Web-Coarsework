var x = document.getElementById("tab-1");
var y = document.getElementById("tab-2");
var z = document.getElementById("tab-3");
var r = 1;
function reveal1() {

if (x.style.display == "none"){
   x.style.display="block"
   y.style.display="none"
   z.style.display="none"}
   else{
    r.style.display="none";
  }
};

function reveal2(){
  if (y.style.display == "none"){
    y.style.display="block"
    x.style.display="none"
    z.style.display="none";
  }
  else{
    r.style.display="none";
  }
}

function reveal3(){if (z.style.display == "none"){
  z.style.display="block"
  x.style.display="none"
  y.style.display="none";
} 

else{
  r.style.display="none";
}
}

 

