function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function colorCells(){
    for (var line = 0; line < 25; line++) {
        var random = getRandomNum(1, 5);
      document.getElementById('Cells' + line).style.background =
                                                             random == 1 ? 'red' :
                                                            (random == 2 ? 'blue' :
                                                            (random == 3 ? 'green' :
                                                            (random == 4 ? 'lightblue' :
                                                            (random == 2 ? 'orange' : "" ))));
    }
}
function lineSearch()
{

        var arrayVerif = [];
    for (var line = 0; line < 25; line++) {
        if(document.getElementById('Cells' + line).style.background ==
            document.getElementById('Cells' + line + 1).style.background){
                 arrayVerif.push(line)

            }
    }
}
