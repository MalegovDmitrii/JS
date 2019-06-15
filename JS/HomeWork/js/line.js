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

/*function changeColor()
{
    var arrayVerif = [];
    for (var line = 1; line < 26; line++) {

            var element = document.getElementById('cell' + line);
            if(element.onclick){
                if(arr.length <2){
                    arr.push (element);
                }else{
                    arr.splice(0,2);
                    arr.push (element);
                }
            }
    }
if(arr.length == 2){
    var color = arr[0].style.background;
    arr[0].style.background = arr[1].style.background;
    arr[1].style.background  = color;
}


}*/
function changeColor(that)
{
    if(arr.length <2){
        arr.push (that);
    }else{
        arr.splice(0,2);
        arr.push (that);
    }

    if(arr.length == 2){
        var color = arr[0].style.background;
        arr[0].style.background = arr[1].style.background;
        arr[1].style.background  = color;
        deleteElement();
    }


}
function deleteElement()
{
    var num = 0;
    for (var line = 2; line < 26; line++) {
        var element = document.getElementById('cell' + line);
        if(document.getElementById('cell' + line) == document.getElementById('cell' + line - 1))
        {
            num++
        } else {
            if(num >= 3){
                    for (var i = 0; i < num; i++) {
                    document.getElementById('cell' + line-i).style.background =
                               getRandomNum(1, 5) == 1 ? 'red' :
                              (getRandomNum(1, 5) == 2 ? 'blue' :
                              (getRandomNum(1, 5) == 3 ? 'green' :
                              (getRandomNum(1, 5) == 4 ? 'lightblue' :
                              (getRandomNum(1, 5) == 5 ? 'orange' : "" ))));
                    }
            } else{num = 0;}
        }
    }
}
