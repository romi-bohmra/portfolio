$(document).ready(function() {
  
    typing( 0, $('.typewriter-text').data('text') );
  
    function typing( index, text ) {
      
      var textIndex = 1;
  
      var tmp = setInterval(function() {
        if ( textIndex < text[ index ].length + 1 ) {
          $('.typewriter-text').text( text[ index ].substr( 0, textIndex ) );
          textIndex++;
        } else {
          setTimeout(function() { deleting( index, text ) }, 2000);
          clearInterval(tmp);
        }
  
      }, 100);
  
    }
  
    function deleting( index, text ) {
  
      var textIndex = text[ index ].length;
  
      var tmp = setInterval(function() {
  
        if ( textIndex + 1 > 0 ) {
          $('.typewriter-text').text( text[ index ].substr( 0, textIndex ) );
          textIndex--;
        } else {
          index++;
          if ( index == text.length ) { index = 0; }
          typing( index, text );
          clearInterval(tmp);
        }
  
      }, 100)
  
    }
  
  });
$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function testScroll() {
  if (isScrolledIntoView($(".numbers")) && !viewed) {
      viewed = true;
      $('.value').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
  }
}