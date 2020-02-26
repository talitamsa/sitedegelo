
function removeSifrao(i){
    i = i.replace("R$","").replace(".","").replace(",",".");
    i = parseFloat(i).toFixed(2);
    return i;
 }
 
 // deleta produto do carrinho
 function removeProduto(el){
     var item = $(el).closest(".cart-header");
     var itemPreco = item.find(".item_preco").text();
     var itemQtd = item.find(".qtd").text();
     subtraiValorTotal(itemPreco,itemQtd);
     item.remove();
 }
 
 //diminui o valor total quando um item é removido
 function subtraiValorTotal(itemPreco,itemQtd){
     var precoItem = (removeSifrao(itemPreco) * itemQtd).toFixed(2);
     var total = removeSifrao($("subvalorTotal").text());
     var novoTotal = total - precoItem;
     $("subvalorTotal").text("R$" + novoTotal.toFixed(2).replace(".",","));
 }

 
 function calculate(obj) {

  var obj_price = $(obj).closest('.cart-header').find('.item_preco');
  var obj_total = $(obj).closest('.card').find('.subvalorTotal');

  var price = parseFloat( (obj_price.is("input") ? obj_price.val() : obj_price.text()) ) || 0;
  var quantity = parseInt($(obj).closest('.cart-header').find('.quantity').val());
  var total = price * quantity;

	if (obj_price.is("input")) {
  	obj_total.val(total);
   } else {
   	obj_total.text(total);
   }
}

function changeQuantity(num, obj) {

  $(obj).parent().find('.quantity').val(parseInt($(obj).parent().find('.quantity').val()) + num);
}




$().ready(function() {
  //calculate();
  $(".minus").click(function() {
    changeQuantity(-1, this);
    calculate(this);
  });
  $(".plus").click(function() {
    changeQuantity(1, this);
    calculate(this);
  });


  $(".quantity").keyup(function(e) {
    if (e.keyCode == 38) changeQuantity(1, this);
    if (e.keyCode == 40) changeQuantity(-1, this);
    calculate(this);
  });


});


var atualizaCarrinho = function(){
    var carrinhos = $('.cart-header');
    carrinhos.each(function(){
        var carrinhoAtual = $(this);
        var valorItem = carrinhoAtual.find('.item_preco:visible');
        var valorTotal = carrinhoAtual.find('.valorTotal');
        var qtdTotal = carrinhoAtual.find('.qtd');
        var item_total = $('.item-total');
        var qtdItems = $('.qtd');
        var vt= 0;
        var resultado = 0.0;
        for(var i = 0; i < qtdItems.length; i++){
            var qtdItem = parseFloat(qtdItems[i].innerHTML);
            var vtItem = qtdItem * parseFloat(item_total[i].innerHTML);
            item_total[i].innerHTML = vtItem;
            resultado += vtItem;
            vt += qtdItem ;
        }   
                
        valorTotal.text(resultado);
        qtdTotal.text(vt);
    });
};
atualizaCarrinho();