var box = $(window)
var nav= $('nav')
posEnd=0
box.scroll(function () { 
    var pos= box.scrollTop()
    
    if(pos > posEnd){
        nav.slideUp();
    }
    else{
        nav.slideDown()
    }
    posEnd=pos
});
$('.cadrmenu').hide();    
$('.ham-menu1').hide();
$('.ham-menu2').show();
$('.ham-menu2').css('opacity',"100");

$('.ham-menu1').on('click', function () {

    $('.cadrmenu').slideUp();    
    $('.ham-menu1').hide();
    $('.ham-menu2').show();
    $('.ham-menu2').css('opacity',"100");

});
$('.ham-menu2').on('click', function () {
    $('.ham-menu1').show();
    $('.ham-menu2').css('opacity',"0");
    $('.cadrmenu').slideDown();   
});

text=[
    "It is a long established fact that a reader will be distracted by the readable content of a page whenlooking at its layout." ,
    "The point of using Lorem Ipsum is that it has a more-or-less normal distributionof letters, as opposed to using 'Content here, content here', making it look like readable English." ,
    "Manydesktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and asearch for 'lorem ipsum' will uncover many web sites still in their infancy.", 
    "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    ]
    var typed1 = new Typed('.type', {
        strings: text,
        smartBackspace: true, // Default value
        typeSpeed: 15,
        backDelay: 1000,
        startDelay: 20,
        backSpeed: 20,
        loop:100,
        bindInputFocusEvents: true
      });
$('.lightmode').hide();

$('.darkmode').click(function (e) { 
    $('.cadrmenu').css('background', '#222');
    $('nav').css('background', '#999');

    $('body').css('background', '#444');
    $('.darkmode').hide();
    $('.lightmode').show();
});
$('.lightmode').click(function (e) {
    $('nav').css('background', '#757575');
    $('.cadrmenu').css('background', '#fff');
    $('body').css('background', 'linear-gradient(20deg,#aaaaaa,#f89f1a) no-repeat');
    $('.darkmode').show();
    $('.lightmode').hide();
});