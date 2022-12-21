$(".default_option").click(function(){
    $(this).parent().toggleClass("active");
})
  
$(".select_ul li").click(function(){
    var currentel = $(this).html();
    $(".default_option li").html(currentel);
    $(this).parents(".select_wrap").removeClass("active");
})


