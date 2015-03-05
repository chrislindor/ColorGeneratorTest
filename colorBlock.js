/*
A program that generates a random color and 
prints it to the page the number of times specified
*/

//Set ininital variables;
var red;
var green;
var blue;
var rgbColor;
var numberToPrint = 10;

//Function to generate random colors and return rgb value;
function colorGenerator() {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    return rgbColor;
}

/* for while loop to print out number 
of blocks speciefied in numberToPrint variable
*/
for (var x = 1; x <= numberToPrint; x += 1) {
    document.write('<p style="background-color:' + colorGenerator() + '">' + colorGenerator() + '</p>')
}
