 var balls = document.getElementsByClassName("ball");
 var eyes = document.getElementsByClassName('eyes');
 var newPair = [];
 var numEyes = 0;

 function secondEye() {
     numEyes += 1;
     let newDiv = document.createElement('div');
     let eye = eyes[0].appendChild(newDiv);
     eye.classList.add('eye');
     eye.setAttribute('id',`eye${numEyes-1}`);
     newPair.push(eye);
     newPair[numEyes - 1].appendChild(document.createElement('div')).classList.add('ball');

 }

 document.onmousemove = () => {
      var x = (event.clientX * 100) / window.innerWidth + "%";
      var y = (event.clientY * 100) / window.innerHeight + "%";

      for (let i = 0; i < 5; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].transform = "translate(-" + x + ",-" + y + ")";
      }
    };
