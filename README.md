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
## Executing the code
To export grid cells from a PNG you need to move your picture to extract from in the "imgIN" folder.

Now you can simply run node index.js on the project root's terminal, replace GridX and GridY with pixel measurements for your grid.
```
node index.js GridX GridY
```
or as in the example in the fodler imgIN
```
node index.js 24 24
```
