var employee = 
        {
        firstName : "Mohd Saood",
        lastName: "Akhtar",
    
        };

Handlebars.registerHelper('nameFormat', function(fn, ln){
    var newFormat = fn + ', '+ ln;
    return newFormat;
});

$(document).ready(function(){
    var libTemp = $("#myTemplate").html();
    var temple = Handlebars.compile(libTemp);
    
    $("#content").html(temple(employee));
});
