function clear () {
	document.getElementById('myCanvas');
	myCanvas.width= myCanvas.width;
}

function drawRectangle() {
	clear();
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(75,35,150,75);
}

function drawCircle () {
	clear();
	var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.fillStyle="#7FFFD4"
ctx.beginPath();
ctx.arc(150,75,50,0,2*Math.PI);
ctx.closePath();
ctx.fill();	
}

function drawTriangle () {
	clear();
	 var canvas = document.getElementById('myCanvas');
      
            var ctx = myCanvas.getContext('2d');
            var sWidth = myCanvas.width;
            var sHeight = myCanvas.height;
            var path=new Path2D();
            ctx.fillStyle = "#5EE494"
            path.moveTo((sWidth/2)+60,sHeight/2);
            path.lineTo((sWidth/2),(sHeight/2)-60);
            path.lineTo((sWidth/2)-60,sHeight/2);
            ctx.fill(path);
}

function drawSquare () {
	clear();
	var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#A015B1";
ctx.fillRect(95,20,100,100);
}

function drawHexagon () {
	clear();
	
}


function CalculateAreaHex(){
    document.getElementById("rectangleform").style.display="none";  
    document.getElementById("triangleform").style.display="none";
    document.getElementById("circleform").style.display="none";
    document.getElementById("squareform").style.display="none";
    document.getElementById("hexform").style.display="block";
       var hside =document.form5.hexside.value;
         document.getElementById("hexareamsg").innerHTML =("<P>The area of the hexagon is " + (2.59807621 * Math.pow(hside,2) ) + "</p>");
         document.getElementById("hexperimetermsg").innerHTML =("<P>The perimeter of the hexagon is " + (6 * hside) + "</p>");
    }
  function CalculateAreaSqr(){
    document.getElementById("hexform").style.display="none";
    document.getElementById("rectangleform").style.display="none";  
    document.getElementById("triangleform").style.display="none";
    document.getElementById("circleform").style.display="none";
    document.getElementById("squareform").style.display="block";
      var side =document.form4.sqrside.value;
        document.getElementById("sqrareamsg").innerHTML =("<P>The area of the square is " + (Math.pow(side,2)) + "</p>");       document.getElementById("sqrperimetermsg").innerHTML =("<P>The perimeter of the square is " + (4 * side) + "</p>");
    }
 		function CalculateAreaRect(){
      document.getElementById("hexform").style.display="none";
		document.getElementById("triangleform").style.display="none";
		document.getElementById("circleform").style.display="none";
		document.getElementById("rectangleform").style.display="block";
    document.getElementById("squareform").style.display="none";
	      var rectl =document.form3.rectlen.value;
	      var rectb =document.form3.rectbrd.value;
        var rectarea = rectl * rectb;
        var rectperimeter = 2*(+rectl+ +rectb);
        document.getElementById("rectareamsg").innerHTML =("<P>The area of the rectangle is " + (rectarea)  +"</p>");
        document.getElementById("rectpermsg").innerHTML =("<P>The perimeter of the rectangle is " + (rectperimeter)  +"</p>");
    }
		 function CalculateAreaCirc(){
      document.getElementById("hexform").style.display="none";
		document.getElementById("rectangleform").style.display="none"; 	
		document.getElementById("triangleform").style.display="none";
		document.getElementById("circleform").style.display="block";
    document.getElementById("squareform").style.display="none";
	    var radius =document.form1.txtRadius.value;
        document.getElementById("areamsg").innerHTML =("<P>The area of the circle is " + (radius * radius * Math.PI) + "</p>");
        document.getElementById("circumferencemsg").innerHTML =("<P>The circumference of the circle is " + (2 * radius * Math.PI) + "</p>");
    }
     function CalculateAreaTriangle(){
      document.getElementById("hexform").style.display="none";
     	document.getElementById("rectangleform").style.display="none";
     	 document.getElementById("circleform").style.display="none";
		 document.getElementById("triangleform").style.display="block";
     document.getElementById("squareform").style.display="none";
	     var a =document.form2.side1.value;
	     var b =document.form2.side2.value;
	     var c =document.form2.side3.value;
	     var perimeter = +a + +b + +c;
	     var s = (+a + +b + +c )*0.5;
	     var area = Math.sqrt(s* +(s-a) * +(s-b) * +(s-c));
         document.getElementById("trimsg").innerHTML =("<P>The area of the triangle is " + (area) + "</p>");
         document.getElementById("perimetermsg").innerHTML =("<P>The perimeter of the triangle is " + (perimeter) + "</p>");
     }


