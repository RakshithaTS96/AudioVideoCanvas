var canvas = document.querySelector('canvas')
    ;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillRect(100, 100, 100, 100);   //Draw Rectangle

c.beginPath();
c.arc(95, 50, 40, 0, 2 * Math.PI);   // Draw circle
c.fill(); 

c.font = "30px Arial";                 // Draw a text
c.fillText("Hello World", 10, 50);


c.font = "30px Arial";
c.strokeText("Hello World", 10, 50);   // Draw a stroke text

var grd = c.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");                            // Create linear gradient
grd.addColorStop(1, "white");
c.fillStyle = grd;
c.fillRect(10, 10, 150, 80);

console.log(canvas)