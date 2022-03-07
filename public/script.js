$(window).on('load',function() {
    $("#colbut").on('click',function(){
        $("#rectangular").css("background-color", $('#colorValue').val());
        $('#colorValue').focus();
    });
    $('#colorValue').on('keypress',function(e){
        if (e.keyCode==13) {$("#colbut").click();} //if you press enter
    });            
})