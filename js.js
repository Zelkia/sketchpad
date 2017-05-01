var height = $(window).height()*0.8;
var width = $(window).width()*0.8;

var x = 24;
var y = 24;



$(document).ready(function(){


//creates a function to draw cells.
    function draw(x, y) {
    	//loops through the amount of cells to fit the y axis.
    	for (j=0; j<y; j++){
    		//loops through the amount of cells to fit the x axis.
    		for (i=0; i<x; i++){
    			//adds divs with the class "cell" to the wrapper.
    			$('.wrapper').append("<div class='cell'></div>");
			}
		}
		//cell width is equal to 80% of window width.
		var cellWidth = width/x;
		//cell height is equal to 80% of window height.
		var cellHeight = height/y;

		$('.cell').css("width",cellWidth + "px");
		$('.cell').css("height",cellHeight + "px");
		console.log(height, cellHeight, y);
	}


	draw(x, y);
	pen();


	$("button").click(function(){
		$("div").remove(".cell");
		x = prompt("How many cells horizontally?:");
		y = prompt("How many cells vertically?:");
		draw(x, y);
		pen();
	});

	function pen(){
		$(".cell").mouseover(function(){
		$(this).css("background-color","#a59b77");
	});
	}

});
