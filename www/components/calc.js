
$(document).on("click","#tabuada", function(){
var numero= $("#num").val();
var tabuada ='';
var count;

for(count=0; count<=numero; count++){
tabuada += (numero +"X"+ count + "=" + (parseInt(numero)*count)+"<br />");
}

$("#result").html(tabuada);
});


