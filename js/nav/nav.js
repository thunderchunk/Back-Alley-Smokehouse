angular.module('backAlley')
.directive('baNav', function(){
return{
  restrict: 'E',
  templateUrl: './js/nav/nav.html',
  link: function( scope, element, attributes ) {

    $('.navBtn').hover(function(){
      $(this).css({'color':'#9e0c0c'})
    })
    $('.navBtn').mouseout(function(){
      $(this).css({'color':'black'})
    })

    $('.homeBtn').mousedown(function(){
      $('.homeBtn').animate({
        left: "+=5px"
      })

    })
    $('.homeBtn').mouseup(function(){
      $('.homeBtn').animate({
        left: "-=5px"
      })
    })


  }
}



});
