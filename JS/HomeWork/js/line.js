function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function round (number){
    return Math.round(((6/5) % 1)*100)/100;

}

function colorCells(){

    for (var line = 1; line < 26; line++) {
        var random = getRandomNum(1, 5);
      document.getElementById('cell' + line).style.background =
                                                             random == 1 ? 'red' :
                                                            (random == 2 ? 'blue' :
                                                            (random == 3 ? 'green' :
                                                            (random == 4 ? 'lightblue' :
                                                            (random == 5 ? 'orange' : "" ))));
    }
}
var arr = [];
function lineSearch()
{
    var arrayVerif = [];
    for (var line = 1; line < 26; line++) {
        /*if(document.getElementById('cells' + line).style.background ==
            document.getElementById('cells' + line + 1).style.background){
                 arrayVerif.push(line)

            }*/
            var element = document.getElementById('cells' + line);
            if(element.onclick){
                if(arr.length <2){
                    arr.push = element
                }else{
                    arr.splice(0,2);
                    arr.push = element
                }

            }

    }
    var color = arr[0].style.background;

    array[0].style.background = array[i+1].style.background;
    array[1].style.background  = color;
    
}
