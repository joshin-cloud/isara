$(function(){
  $('.faq-list').click(function(){
   var $answer=$(this).find('.answer');
   var $arrow=$(this).find('.arrow');
  if($answer.hasClass('open')){
    $answer.removeClass('open');
    $answer.slideUp();
    $arrow.css('transform','rotate(225deg)');
    $arrow.css('top','35%');
  }else{
    $answer.addClass('open');
    $answer.slideDown();     
    $('.answer').not($answer).slideUp();
    $arrow.css('transform','rotate(45deg)');
    $arrow.css('top','45%');
    $('.arrow').not($arrow).css('transform','rotate(225deg)');
    $('.arrow').not($arrow).css('top','35%');
    $('.answer').not($answer).removeClass('open');
  }
 });
 
 
 $('.process-wrap-responsive').click(function(){
   var $answer=$(this).find('.process-wrap-responsive-bottom');
   var $arrow=$(this).find('.arrow');
  if($answer.hasClass('open')){
    $answer.removeClass('open');
    $answer.slideUp();
    $arrow.css('transform','rotate(225deg)');
    $arrow.css('top','35%');
  }else{
    $answer.addClass('open');
    $answer.slideDown();     
    $('.process-wrap-responsive-bottom').not($answer).slideUp();
    $arrow.css('transform','rotate(45deg)');
    $arrow.css('top','45%');
    $('.arrow').not($arrow).css('transform','rotate(225deg)');
    $('.arrow').not($arrow).css('top','35%');
    $('.process-wrap-responsive-bottom').not($answer).removeClass('open');
  }
 });
 
 
$(window).scroll(function(){
 if($(this).scrollTop() > 100){
   $('.scrollup-modal').fadeIn();
 }else{
   $('.scrollup-modal').fadeOut();
 }
});
 
$('.scrollup-modal').click(function(){
 $('html,body').animate({
   'scrollTop':0
 },500);
});
});