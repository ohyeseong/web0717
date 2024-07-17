$(document).ready(function(){
    $(".main>li").hover(function(){
        $(this).find(".sub").stop().slideDown("fast");
    }, function(){
        $(".sub").stop().slideUp("fast");
    })// .main li.hover

    // $(".fade li").hide();
    // $(".fade li").eq(0).show();
    $(".fade li").eq(0).siblings().hide();

    var i = 0;

    setInterval(function(){
        i = (i + 1) % 3;
        console.log(i);

        $(".fade li").eq(i).fadeIn().siblings().fadeOut();
    }, 3000)// setInterval

    $(".cont1 h2").click(function(){
        $(".cont1 h2").addClass("b_on");
        $(this).removeClass("b_on");

        $(".cont1 ul").hide();
        $(this).next().css({"display":"flex"});

    })// .cont1 h2.click

    $(".click").click(function(){
        $(".pop").fadeIn();
    })

    $(".close").click(function(){
        $(".pop").fadeOut();
    })
})// jquery 끝