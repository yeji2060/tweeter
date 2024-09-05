$(document).ready(function() {
  $('#tweet-text').on('input', function(){
    const textLength = $(this).val().length;
    const counterValue = 140 - textLength;

    $(this).closest('form').find('.counter').text(counterValue);


    if (counterValue < 0) {

      $(this).closest('form').find('.counter').addClass('exceed-limit');
    } else {

      $(this).closest('form').find('.counter').removeClass('exceed-limit');
    }
  })
});