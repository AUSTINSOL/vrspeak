
// console.log('index script loaded')

//event listeners
      var sphere = document.querySelector( '#sphere1');
      // sphere.addEventListener("mouseenter", changeColor); 

      var circle = document.querySelector( '#circle');
      // circle.addEventListener("mouseenter", changeCircleColor);
      // circle.addEventListener("mouseenter", changeSize);
      var sky = document.querySelector('#sky')

 //event actions
 function changeCircleColor() { 
	var color = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	console.log(color);
        sphere.setAttribute("material", "color", color);
        circle.setAttribute("material", "color", color);
 }

 function changeSkyColor() { 
	var color = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	console.log(color);
        sky.setAttribute("color", color);
 }


// function getRandColor() {
//         var letters = '0123456789ABCDEF'.split('');
//         var color = '#';
//         for (var i = 0; i < 6; i++ ) {
//           color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//     }

// getRandColor();


