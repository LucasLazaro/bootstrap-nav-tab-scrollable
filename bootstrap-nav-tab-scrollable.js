// Add Horizontal Tabs to jquery
(function ($){

  $.fn.horizontalTabs = function() {
    // Variable creation
    var $elem = $(this),
    widthOfReducedList = $elem.find('.nav-tabs-horizontal').width(),
    widthOfList = 0,
    currentPos = 0,
    adjustScroll = function () {
      $elem.find('.nav-tabs-horizontal li').each(function(index, item) {
        widthOfList += $(item).width();
      });

      widthAvailale = $elem.width();

      if (widthOfList > widthAvailale) {
        $elem.find('.scroller').show();
        updateArrowStyle(currentPos);
        widthOfReducedList = $elem.find('.nav-tabs-horizontal').width();
      } else {
        $elem.find('.scroller').hide();
      }
    },
    scrollLeft = function () {
      $elem.find('.nav-tabs-horizontal').animate({
          scrollLeft: currentPos - widthOfReducedList
      }, 500);
      
      if (currentPos - widthOfReducedList > 0) {
        currentPos -= widthOfReducedList;    
      } else {
        currentPos = 0;
      }
    },
    scrollRight = function () {
      $elem.find('.nav-tabs-horizontal').animate({
        scrollLeft: currentPos + widthOfReducedList
      }, 500);

      if ( (currentPos + widthOfReducedList) < (widthOfList - widthOfReducedList)) {
        currentPos += widthOfReducedList;
      } else {
        currentPos = (widthOfList - widthOfReducedList);
      }
    },
    manualScroll = function () {
      currentPos = $elem.find('.nav-tabs-horizontal').scrollLeft();
      
      updateArrowStyle(currentPos);
    },
    updateArrowStyle = function (position) {
      if (position >= (widthOfList - widthOfReducedList)) {
        $elem.find('.arrow-right').addClass('disabled');
      } else {
        $elem.find('.arrow-right').removeClass('disabled');
      };

      if (position <= 0) {
        $elem.find('.arrow-left').addClass('disabled');
      } else {
        $elem.find('.arrow-left').removeClass('disabled');
      };
    };

    // Event binding
    $(window).resize( function () {
      adjustScroll();
    });

    $elem.find('.arrow-left').on('click.horizontalTabs', function (){
      scrollLeft();
    });

    $elem.find('.arrow-right').on('click.horizontalTabs', function (){
      scrollRight();
    });

    $elem.find('.nav-tabs-horizontal').scroll( function (){
      manualScroll();
      
    });

    // Initial Call
    adjustScroll();

    return this;
  }

}(window.jQuery));
