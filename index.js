const imageSize = require('image-size');
const imagizer = require('imagizer');
const myArgs = process.argv.slice(2);

/*
    BEGIN CHANGABLE VARIABLES
*/

//SET YOUR GRID LAYOUT
const gridHeight = parseInt(myArgs[0]);
const gridWidth = parseInt(myArgs[1]);

/*
    END CHANGABLE VARIABLES
*/



//SET YOUR IMAGE PATH
const path = './imgIN/picture.png';
const outPath = './imgOUT/';


//Creating Empty Image reference

var project = new imagizer.Project(gridWidth, gridHeight);

var layer = project.createLayer({
    blendingMode: "normal"
    });

project.save(outPath+ "empty.png");
console.log("Savesd Empty Image Reference");




const dimension = imageSize(path);

const imageInHeight = dimension.width;
const imageInWidth = dimension.height;

console.log(imageInWidth + " " + imageInHeight);


const loopHeight = imageInHeight/gridHeight;
const loopWidth = imageInWidth/gridWidth;

var imgCounter = 0;
for (let i = 0; i < loopWidth; i++) {
    for (let j = 0; j < loopHeight; j++) {

        var project = new imagizer.Project(imageInWidth, imageInHeight);

        var layer = project.createLayer({
            blendingMode: "normal"
        });

        var startX = gridWidth*j;
        var startY = gridHeight*i;

        var image = new imagizer.Image();
        image.load("./imgIN/picture.png", function() {
            const obj = layer.put(image, -startY, -startX);
            obj.crop(startX, startY, gridWidth, gridHeight);

        project.resize(24,24)
        });

        project.save(outPath+ imgCounter +".png");
        console.log("picture with i : " + imgCounter + " saved" + "          Cropped at: X:" +startX + " and Y:" + startY);

        var project = new imagizer.Project(imageInWidth, imageInHeight);

        var layer = project.createLayer({
            blendingMode: "normal"
        });

        var startX = gridWidth*j;
        var startY = gridHeight*i;

        var image = new imagizer.Image();
        image.load("./imgIN/picture.png", function() {
            const obj = layer.put(image, -startY, -startX);
            obj.crop(startX, startY, gridWidth, gridHeight);

        project.resize(24,24)
        });
 
        project.save(outPath+ imgCounter +".png");
        console.log("picture with i : " + imgCounter + " saved" + "  Cropped at: X:" +startX + " and Y:" + startY);

        imgCounter++;

        
    }
}


