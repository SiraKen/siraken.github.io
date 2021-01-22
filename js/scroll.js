window.onscroll = function() {

  let scrollTop = window.pageYOffset ;

  if (scrollTop < 160 ) {
    $('.navbar').css('background-color', '');
    $('.navbar').css('transition', '.5s');
  }

  if (scrollTop > 161 ) {
    $('.navbar').css('background-color', 'black');
    $('.navbar').css('opacity', '.8');
    $('.navbar').css('transition', '.5s');
  }

  // console.log(scrollTop);

}