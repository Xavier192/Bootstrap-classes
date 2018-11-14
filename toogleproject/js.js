var boxesCounter=4; //Indicates how many boxes we have.
var colorTeal = "rgb(57, 204, 204)";//Blue color
var colorWhite= 'rgb(255,255,255)';//White color

$(document).ready(function() {//When the page is loaded.
  ClassAndColorBoxes();

  $("#button_add_box").click(function(){//When clicking on the button addBox
    addBox();
  });

  $("#button_toggle_colors").click(function(){//When clicking on the button toggleColor
    colorBox();
  });

  $("#button_toggle_roundedges").click(function(){//When clicking on the button roundBorders
    roundBorders();	
  });

});


function addBox(){//Adds a new box.
  $("#boxes").append('<div style="background-color:rgb(255, 255, 255);" class="box outlined" id="box'+boxesCounter+'"></div>');
  boxesCounter++;
}

function ClassAndColorBoxes(){//Set color white to our first three boxes and the class 'box outlined'
  for(let boxes=1 ; boxes<4 ; boxes++){
    $("#box"+boxes).removeAttr('class');
	  $("#box"+boxes).attr('class','box outlined');	
	  $("#box"+boxes).css('background-color',colorWhite);	
  }
}

function colorBox(){//It sets white to blue and blue to white.
  var boxColor;
  for(let boxes=1 ; boxes<boxesCounter ; boxes++){
    boxColor=$("#box"+boxes).css("background-color");
    if(boxColor=='rgb(255, 255, 255)'){ 
      $("#box"+boxes).css("background-color",colorTeal);
    }
    else{
    $("#box"+boxes).css("background-color","rgb(255, 255, 255)");
    }
  }
  boxColor=null;
}

function roundBorders(){//Round the borders if they aren't rounded if they are rounded it unrounds them.
	for(let boxes=1 ; boxes<boxesCounter ; boxes++){
    boxClass=$("#box"+boxes).attr("class");
    if(boxClass=='box outlined'){ 
      $("#box"+boxes).removeAttr('class');
	    $("#box"+boxes).attr('class','box outlined round-edge');
    }
    else{
      $("#box"+boxes).attr('class','box outlined');
    }
  }
  boxClass=null;
}