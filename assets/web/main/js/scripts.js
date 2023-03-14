

// let ws= new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
let ws= new WebSocket('wss://stream.binance.com/stream?streams=ethusdt@trade/btcusdt@trade/xrpusdt@trade/ltcusdt@trade');

let ethUsdt= document.getElementById('eth');
let lastPrice = null;
let btcUsdt= document.getElementById('btc');
let btclastPrice = null;
let xrpUsdt= document.getElementById('xrp');
let xrplastPrice = null;
let ltcUsdt= document.getElementById('ltc');
let ltclastPrice = null;
let price= null;
let btcprice= null;
let xrpprice= null;
let ltcprice= null;
let collection = document.getElementsByClassName("bi");

ws.onmessage= (event) =>{
    let eventData = JSON.parse(event.data);
    if (eventData.stream=='ethusdt@trade'){
        price=parseFloat(eventData.data.p).toFixed(2);
       
        
      
    }
    else if(eventData.stream=='btcusdt@trade'){
        btcprice=parseFloat(eventData.data.p).toFixed(2);

        
    }
    else if(eventData.stream=='xrpusdt@trade'){
        xrpprice=parseFloat(eventData.data.p).toFixed(3);

        
    }
    else if(eventData.stream=='ltcusdt@trade'){
        ltcprice=parseFloat(eventData.data.p).toFixed(2);

        
    }
    

    ethUsdt.innerText=price;
    
    // ethUsdt.style.color= !lastPrice || lastPrice==price ? 'black': price>lastPrice ? 'green' : 'red';


   if (price>lastPrice){
    collection[0].classList.remove("bi-caret-down-fill");
    collection[0].classList.add( "bi-caret-up-fill" );
    collection[0].style.color='green';
   }
   else if (price<lastPrice){
    collection[0].classList.remove("bi-caret-up-fill");
    collection[0].classList.add( "bi-caret-down-fill" );
    collection[0].style.color='red';
   }
    // else if (price==lastPrice){
    //     collection[0].classList.remove("bi-caret-up-fill");
    //     collection[0].classList.remove( "bi-caret-down-fill" );
    // }




    lastPrice=price;

    btcUsdt.innerText=btcprice;
 
    // btcUsdt.style.color= !btclastPrice || btclastPrice==btcprice ? 'black': btcprice>btclastPrice ? 'green' : 'red';
   
    
    if (btcprice>btclastPrice){
        collection[1].classList.remove("bi-caret-down-fill");
        collection[1].classList.add( "bi-caret-up-fill" );
        collection[1].style.color='green';
       }
       else if (btcprice<btclastPrice){
        collection[1].classList.remove("bi-caret-up-fill");
        collection[1].classList.add( "bi-caret-down-fill" );
        collection[1].style.color='red';
       }
        // else if (btcprice==btclastPrice){
        //     collection[1].classList.remove("bi-caret-up-fill");
        //     collection[1].classList.remove( "bi-caret-down-fill" );
        // }
    

    btclastPrice=btcprice;



    xrpUsdt.innerText=xrpprice;
 
    // btcUsdt.style.color= !btclastPrice || btclastPrice==btcprice ? 'black': btcprice>btclastPrice ? 'green' : 'red';
   
    
    if (xrpprice>xrplastPrice){
        collection[2].classList.remove("bi-caret-down-fill");
        collection[2].classList.add( "bi-caret-up-fill" );
        collection[2].style.color='green';
       }
       else if (xrpprice<xrplastPrice){
        collection[2].classList.remove("bi-caret-up-fill");
        collection[2].classList.add( "bi-caret-down-fill" );
        collection[2].style.color='red';
       }
        // else if (xrpprice==xrplastPrice){
        //     collection[1].classList.remove("bi-caret-up-fill");
        //     collection[1].classList.remove( "bi-caret-down-fill" );
        // }
    

    xrplastPrice=xrpprice;


    ltcUsdt.innerText=ltcprice;
 
   
    
    if (ltcprice>ltclastPrice){
        collection[3].classList.remove("bi-caret-down-fill");
        collection[3].classList.add( "bi-caret-up-fill" );
        collection[3].style.color='green';
       }
       else if (ltcprice<ltclastPrice){
        collection[3].classList.remove("bi-caret-up-fill");
        collection[3].classList.add( "bi-caret-down-fill" );
        collection[3].style.color='red';
       }
        

    ltclastPrice=ltcprice;
  
    
}





(function() {
    "use strict";



    $("#menu").metisMenu();

    $('.nk-nav-scroll').slimscroll({
        position: "left",
        size: "5px",
        height: "100%",
    });


    $(".nav-control").click(function() {
        $("body").toggleClass("nav-mini");
        $(".hamburger").toggleClass("is-active");
    });


    $(function() {
        for (var nk = window.location, o = $("ul#menu a").filter(function() {
                    return this.href == nk;
                })
                .addClass("active")
                .parent()
                .addClass("active");;) {
            if (!o.is("li")) break;
            o = o.parent()
                .addClass("in")
                .parent()
                .addClass("active");
        }
    });

    $(function() {
        var win = window.innerWidth;
        if (win <= 1170) {
            $("body").addClass("nav-mini");

        } else {
            $("body").removeClass("nav-mini");
        };


    });

    // $('body').attr('class', 'NewID') 



})(jQuery);




jQuery(window).on("load", function() {
    if ($("#preloader")[0]) {
        $("#preloader").delay(500).fadeOut(500, 0, function() {
            $(this).remove();
        });
    }
});



/////////////////////
//Charts
/////////////////////

// $.plot('#flotPie2', piedata, {
//     series: {
//         pie: {
//             show: true,
//             radius: 1,
//             innerRadius: 0.5,
//             label: {
//                 show: true,
//                 radius: 2 / 3,
//                 formatter: labelFormatter,
//                 threshold: 0.1
//             }
//         }
//     },
//     grid: {
//         hoverable: true,
//         clickable: true
//     }
// });