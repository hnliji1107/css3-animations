define(['jquery'], function ($) {

  $(function () {

    var stage = $('.carousel-image-3d'),
      nodes = stage.find('li'),
      nodesCount = nodes.length,
      currentIndex = 0,
      startPoint = 0,
      endPoint = 0;


    function jump(idx) {

      nodes.each(function () {
        $(this).removeAttr('class');
      });

      nodes.eq(idx).attr('class', 'left-pre');
      nodes.eq(idx + 1).attr('class', 'left-1');
      nodes.eq(idx + 2).attr('class', 'left-2');
      nodes.eq(idx + 3).attr('class', 'middle');
      nodes.eq(idx + 4).attr('class', 'right-2');
      nodes.eq(idx + 5).attr('class', 'right-1');
      nodes.eq(idx + 6).attr('class', 'right-pre');

    }


    function slideRight() {

      currentIndex--;

      if (currentIndex < -nodesCount) {
        currentIndex = -1;
      }

      jump(currentIndex);

    }


    function slideLeft() {

      currentIndex++;

      if (currentIndex + 6 >= nodesCount) {
        currentIndex = -6;
      }

      jump(currentIndex);

    }


    stage.on('touchstart', 'ul', function (evt) {

      startPoint = evt.originalEvent.changedTouches[0].clientX;

    }).on('touchend', 'ul', function (evt) {

      endPoint = evt.originalEvent.changedTouches[0].clientX;


      if (endPoint - startPoint > 0) {

        slideRight();

      } else if (endPoint - startPoint < 0) {

        slideLeft();

      }

    });

  });

});