var red;
var green;
var blue;
var rgbColor;

function colorGenerator() {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    return rgbColor;
}
for (var x = 1; x <= 10; x += 1) {
    document.write('<p style="background-color:' + colorGenerator() + '">' + colorGenerator() + '</p>')
}
