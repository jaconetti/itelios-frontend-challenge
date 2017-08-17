$(document).ready(function () {
    $.getJSON("js/products.json", function (json) {
        $.each(json[0].data.recommendation, function (index) {
            //console.log(json[0].data.recommendation[index].businessId);

            var id = json[0].data.recommendation[index].businessId;
            var desc = json[0].data.recommendation[index].name;
            var img = json[0].data.recommendation[index].imageName;
            var price = json[0].data.recommendation[index].price;
            var pCondition = json[0].data.recommendation[index].productInfo.paymentConditions;

            if (index <= 3) {
                var text = "        <div class='product' id='" + id + "'>"
                    text = text + "     <div class='p_img'>"
                    text = text + "         <img src='" + img + "' />"
                    text = text + "     </div>"
                        
                    text = text + "     <div class='p_description'>"
                    text = text + "         <div>"
                    text = text + "             <span>" + desc + "</span>"
                    text = text + "         </div>"
                    text = text + "     </div>"

                    text = text + "     <div class='p_price'>"
                    text = text + "         <div>"
                    text = text + "             <span>Por: <b class='b_price'>" + price + "</b></span>"
                    text = text + "         </div>"
                    text = text + "         <div>"
                    text = text + "             <span><b>" + pCondition + "</b></span>"
                    text = text + "         </div>"
                    text = text + "     </div>"

                    text = text + "     <div class='button'>"
                    text = text + "         <div class='faixa'></div>"
                    text = text + "         <div class='button_add'>"
                    text = text + "             <span>adicionar ao carrinho <i class='material-icons'>add_shopping_cart</i></span>"
                    text = text + "         </div>"
                    text = text + "     </div>"
                    text = text + " </div>"

                    $('#page1').append(text).each(function () {
                        $('.content .product').mouseover(function () {
                            $(this).find($('.button')).css("display", "block");
                        });

                        $('.content .product').mouseout(function () {
                            $(this).find($('.button')).css("display", "none");
                        });

                        $('.button').mouseover(function () {
                            $(this).find('i').css("color", "#ff6600");
                            $(this).find($('.faixa')).css("display", "block");
                        });

                        $('.button').mouseout(function () {
                            $(this).find('i').css("color", "#5e6774");
                            $(this).find($('.faixa')).css("display", "none");
                        });
                    });
            } else if (index > 3 && index <= 7) {
                var text = "        <div class='product' id='" + id + "'>"
                text = text + "     <div class='p_img'>"
                text = text + "         <img src='" + img + "' />"
                text = text + "     </div>"

                text = text + "     <div class='p_description'>"
                text = text + "         <div>"
                text = text + "             <span>" + desc + "</span>"
                text = text + "         </div>"
                text = text + "     </div>"

                text = text + "     <div class='p_price'>"
                text = text + "         <div>"
                text = text + "             <span>Por: <b class='b_price'>" + price + "</b></span>"
                text = text + "         </div>"
                text = text + "         <div>"
                text = text + "             <span><b>" + pCondition + "</b></span>"
                text = text + "         </div>"
                text = text + "     </div>"

                text = text + "     <div class='button'>"
                text = text + "         <div class='faixa'></div>"
                text = text + "         <div class='button_add'>"
                text = text + "             <span>adicionar ao carrinho <i class='material-icons'>add_shopping_cart</i></span>"
                text = text + "         </div>"
                text = text + "     </div>"
                text = text + " </div>"

                $('#page2').append(text).each(function () {
                    $('.content .product').mouseover(function () {
                        $(this).find($('.button')).css("display", "block");
                    });

                    $('.content .product').mouseout(function () {
                        $(this).find($('.button')).css("display", "none");
                    });

                    $('.button').mouseover(function () {
                        $(this).find('i').css("color", "#ff6600");
                        $(this).find($('.faixa')).css("display", "block");
                    });

                    $('.button').mouseout(function () {
                        $(this).find('i').css("color", "#5e6774");
                        $(this).find($('.faixa')).css("display", "none");
                    });
                });
            } else {
                var text = "        <div class='product' id='" + id + "'>"
                text = text + "     <div class='p_img'>"
                text = text + "         <img src='" + img + "' />"
                text = text + "     </div>"

                text = text + "     <div class='p_description'>"
                text = text + "         <div>"
                text = text + "             <span>" + desc + "</span>"
                text = text + "         </div>"
                text = text + "     </div>"

                text = text + "     <div class='p_price'>"
                text = text + "         <div>"
                text = text + "             <span>Por: <b class='b_price'>" + price + "</b></span>"
                text = text + "         </div>"
                text = text + "         <div>"
                text = text + "             <span><b>" + pCondition + "</b></span>"
                text = text + "         </div>"
                text = text + "     </div>"

                text = text + "     <div class='button'>"
                text = text + "         <div class='faixa'></div>"
                text = text + "         <div class='button_add'>"
                text = text + "             <span>adicionar ao carrinho <i class='material-icons'>add_shopping_cart</i></span>"
                text = text + "         </div>"
                text = text + "     </div>"
                text = text + " </div>"

                $('#page3').append(text).each(function () {
                    $('.content .product').mouseover(function () {
                        $(this).find($('.button')).css("display", "block");
                    });

                    $('.content .product').mouseout(function () {
                        $(this).find($('.button')).css("display", "none");
                    });

                    $('.button').mouseover(function () {
                        $(this).find('i').css("color", "#ff6600");
                        $(this).find($('.faixa')).css("display", "block");
                    });

                    $('.button').mouseout(function () {
                        $(this).find('i').css("color", "#5e6774");
                        $(this).find($('.faixa')).css("display", "none");
                    });
                });
            }
        })
    });
});