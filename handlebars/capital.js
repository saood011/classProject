
Handlebars.registerHelper('makeCaps', function(content){

    return new Handlebars.SafeString(content.fn(this).split(' ').filter(v=> v.replace(",", "")).join(' ').slice(3).split(' ').map(v=> v.charAt(0).toUpperCase()+v.slice(1)).join(' '))
});

$(document).ready(function(){
    var Temp = $("#myTemplate").html();
    var renderTemp = Handlebars.compile(Temp);
    $("#content").html(renderTemp());
});
