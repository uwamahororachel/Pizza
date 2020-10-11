function Order(type, size, crust, topping) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.topping = topping;

}

Order.prototype.fullOrder = function () {
    return this.type + " with the topping of " + this.topping + " and " + this.crust + " as crust.";
};

function Total(price, quantity, delivery) {
    this.price = price;
    this.quantity = quantity;
    this.delivery = delivery;
}

Total.prototype.totalprice = function () {
    return this.price * this.quantity + this.delivery;
};

//array for size (larg medium small)
var sizePrice = [5000, 3500, 2500];
var deliverPrices = [0, 700];
$(document).ready(function () {
    $('form#myForm').submit(function (event) {
        event.preventDefault();
        var typeofpiza = $('#type').val();

        var pizzaSize = parseInt($('#size').val());

        var Crust = $('#crust').val();

        var ptopping = $('#top').val();

        var quantity = parseInt($('#quantt').val());

        var pizzaPick = parseInt($('.pick').val());

        var phone=$('#delivery_phone').val();

        var address=$('#delivery_textbox').val();

        var price = sizePrice[pizzaSize];
        var DeliveryCost = deliverPrices[pizzaPick];



        newOrder = new Order(typeofpiza, pizzaSize, Crust, ptopping, phone, address);
        newTotal = new Total(price, quantity, DeliveryCost);
        if (pizzaPick===0){
       document.getElementById("procName").innerHTML+= $('#type').val();
   
    document.getElementById("procprice").innerHTML+= price+"(*"+quantity+")";
    document.getElementById("procfee").innerHTML+= " Free";
    document.getElementById("proctot").innerHTML+= newTotal.totalprice()+"Frw";
    

         document.getElementById("button_confirm").innerHTML+="<button type=\"button\" onclick=\"confirmOrder()\" id=\"confimbutton\" class=\"btn btn-warning\">Confirm Order</button>";
        

        }else{
            if(pizzaPick===1){
            document.getElementById("procName").innerHTML+= $('#type').val();
        document.getElementById("procprice").innerHTML+= price+"(*"+quantity+")";
        document.getElementById("procfee").innerHTML+=DeliveryCost+"Frw";

        document.getElementById("procaddh").innerHTML+="<h2>Delivered To:"+address+"</h2>";
        document.getElementById("procphoneh").innerHTML+= "<h2>Phone:"+phone+"</h2>";

        document.getElementById("proctot").innerHTML+= newTotal.totalprice()+"Frw";
        document.getElementById("button_confirm").innerHTML+="<button type=\"button\" onclick=\"confirmOrder()\" id=\"confimbutton\" class=\"btn btn-warning\">Confirm Order</button>";
             }
        }

    });

});


