## Requirements for stateManagement problem

* Display a board.
	* The board should have light coloured background.
	* The board should be a square.
	* The size of the board to be maximum occupyable.
	* The board should be aligned in a center position.
	* The board size should be responsive while changing browser size

* Display a square object.
	* The object to be a square.
	* The object colour should be black.
	* The Square shaped object to be placed inside the board.
	* The object size to be randomly taken inbetween 5 to 10.
	* Randomly sized objects are populated with a time gap of 1s.
	* There should be 10 random sized object.

* Display a circle object.
	* The object to be a square.
	* The object colour should be black.
	* The Square shaped object to be placed inside the board.
	* The object size to be randomly taken inbetween 5 to 10.
	* Randomly sized objects are populated with a time gap of 1s.
	* There should be 10 random sized object.
	* Circle and Triangle should not be visible under a same size of square.

* Movement of objects
		* Based on the direction given the object have to move with the given distance



## Steps to do

* Display a board.
	* Set the background colour to Lightpink.
	* Set the width and height to same value to make the board in square shape.
	* Take the minimum side of screen size's to make the square board to occupy maximum area.
	* Position the board in center by using translate css property.

* Display an object
	* Set the width and heigth to same value to get a square object.
	* Fix the size of the object randomly ranging between 5 to 10.
	* Set the background colour to black.
  * Position the object in center by using absolute and translate css property.
 	* Set the top and left value for object based on the object size and board size to place object inside board.
	* Set the top and left value in a random manner.
	* Create n number of square object with a regular interval of 1 sec using setInterval.
	* Populate only 10 sqaures by comparing the length of the array and then return the square's properties.

* Display an object of shape Triangle.
	* Take border-bottom, border-right, border-left property to get the triangle.
	* Triangle should be equilateral triangle by dividing border bottom value by 2 for keeping in border-right and left property.

* Movement of an object inside a board.
		* set the movement distance for an object
		* Based on the direction given the object x and y value 		have to be increased and decreased.
		* use setInterval with a time delay to make the object to move.
* Movement of shape in random directions.
	  * Randomly select shapes from 4 available shapes.
		* Based on the direction, change the x and y value by calculating with distance and direction.

