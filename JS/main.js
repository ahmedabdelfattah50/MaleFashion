
$(document).ready(function(){

    $('.product_card .list_pro_stars #start_5').click(function(){
        $(this).css({
            'color': '#f7941d',
            'fontWeight': 600
        });
               

        $(this).siblings('#start_1,#start_2,#start_3,#start_4').css({
            'color': '#f7941d',
            'fontWeight': 600
        });
    });

    $('.product_card .list_pro_stars #start_4').click(function(){
        $(this).css({
            'color': '#f7941d',
            'fontWeight': 600
        });

        $(this).siblings().css({
            'color': '#000',
            'fontWeight': 0
        });

        $(this).siblings('#start_1,#start_2,#start_3').css({
            'color': '#f7941d',
            'fontWeight': 600
        });
    });

    $('.product_card .list_pro_stars #start_3').click(function(){
        $(this).css({
            'color': '#f7941d',
            'fontWeight': 600
        });

        $(this).siblings().css({
            'color': '#000',
            'fontWeight': 0
        });

        $(this).siblings('#start_1,#start_2').css({
            'color': '#f7941d',
            'fontWeight': 600
        });
    });

    $('.product_card .list_pro_stars #start_2').click(function(){
        $(this).css({
            'color': '#f7941d',
            'fontWeight': 600
        });

        $(this).siblings().css({
            'color': '#000',
            'fontWeight': 0
        });

        $(this).siblings('#start_1').css({
            'color': '#f7941d',
            'fontWeight': 600
        });
    });

    $('.product_card .list_pro_stars #start_1').click(function(){

        $(this).siblings().css({
            'color': '#000',
            'fontWeight': 0
        });
        
        $(this).css({
            'color': '#f7941d',
            'fontWeight': 600
        });
    });

});