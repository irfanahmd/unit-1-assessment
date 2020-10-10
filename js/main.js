let displayNum = $('#displayNum').text()
let newNum
let total


$('#addNumber').click(function(){
    newNum = $('#numInput').val();
    total = parseInt(displayNum) + parseInt(newNum);
    displayNum = total;
    $('#displayNum').text(total);
    if(total >= 0){
        $('#displayNum').css('color', 'black')  
    }
});


$('#subtractNumber').click(function(){
    newNum = $('#numInput').val();
    total = parseInt(displayNum) - parseInt(newNum);
    displayNum = total
    $('#displayNum').text(total);
    if(total < 0){
        $('#displayNum').css('color', 'red')  
    }
});
