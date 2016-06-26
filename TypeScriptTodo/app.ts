var container = document.getElementById('container');

function countdown(initial, final = 0, interval = 1) {
  var current = initial;

  while(current > final) {
    container.innerHTML = current;
    console.log(current);
    current -= interval;
  }
}

countdown(10,null,1);