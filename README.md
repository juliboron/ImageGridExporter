# ImageGridExporter
 Extract multiple grids as a PNG from a PNG file
This project uses node.js so make sure you've installed it
# How to use it

## Installing modules
To install the required modules you will need to run the following commands in your project root's directory
```
npm install imagizer
npm install image-size
```
## Modifying the variables
To export grid cells from a PNG you need to move your picture to extract from in the "imgIN" folder.

After that you will need **modify the index.js file** to your desired grid size.
The variables are located on line 9 through 11:
```
//SET YOUR GRID LAYOUT
const gridHeight = 24;
const gridWidth = 24;
```
## Executing the code
Now you can simply run node index.js on the project root's terminal
```
node index.js
```
