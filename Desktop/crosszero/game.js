for (var i = 0; i < 9; i++) {
    document.getElementById("canvas").innerHTML+='<div class="block"></div>';
}
//document.getElementById("canvas").innerHTML = '<div class='clear'>RESTART</div>';


var iter = 0;
var win = '';

document.getElementById("canvas").onclick = function(event){
/*	if (event.target.className == 'clear'){
		for (var j=0; j<9; j++){
			blockArr.innerHTML[j] == undefined;
		};
	}
*/	
	if (event.target.className == 'block'){
		if (iter%2==0){
		    event.target.innerHTML = "x";
		}else{
			event.target.innerHTML = "о"
		}
		iter++;
		check();
	}
}

/*
function winner(win){
	alert(win+" is winner! Congratulation;)");
}

function check(){
	var blockArr = document.getElementByClassName('block');
	if (blockArr[0].innerHTML == blockArr[1].innerHTML) && (blockArr[0].innerHTML==blockArr[2].innerHTML) {
		win = blockArr[0].innerHTML;
	} else {
		if (blockArr[3].innerHTML == blockArr[4].innerHTML) && (blockArr[3].innerHTML==blockArr[5].innerHTML){
			win = blockArr[3].innerHTML;
		} else {
			if (blockArr[6].innerHTML == blockArr[7].innerHTML) && (blockArr[6].innerHTML==blockArr[8].innerHTML){
				win = blockArr[6].innerHTML;
			} else {
					if (blockArr[0].innerHTML == blockArr[3].innerHTML) && (blockArr[0].innerHTML==blockArr[6].innerHTML) {
						win = blockArr[0].innerHTML;
					} else {
						if (blockArr[1].innerHTML == blockArr[4].innerHTML) && (blockArr[1].innerHTML==blockArr[7].innerHTML){
							win = blockArr[1].innerHTML;
						} else {
							if (blockArr[2].innerHTML == blockArr[5].innerHTML) && (blockArr[2].innerHTML==blockArr[8].innerHTML){
								win = blockArr[2].innerHTML;
							} else {
								if (blockArr[0].innerHTML == blockArr[4].innerHTML) && (blockArr[0].innerHTML==blockArr[8].innerHTML){
									win = blockArr[0].innerHTML;
								} else {
									if (blockArr[2].innerHTML == blockArr[4].innerHTML) && (blockArr[2].innerHTML==blockArr[6].innerHTML){
										win = blockArr[2].innerHTML;
					}
		        } 
             }
		}
	}
	winner(win);
}
*/
