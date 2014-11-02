/* slideshow v.0 */
$(window).ready(function(){
  var audioOb = "<audio></audio>";
  var drone = "sound/drone.mp3";
  var advance = "sound/advance.mp3";
  $('body').append($(audioOb));
  var audioEl = $("audio");
  $(audioEl)
      .attr('src', drone) // default
      .attr('loop', true)
      .attr('autoplay', true);

  $('.photoCarousel1975').each(function(){
    var pc1975 = $(this);
    var slide = null;
    var img = null;
    var imgSrc = null;
    var i = 0;
    var w_width = $(window).width();
    pc1975.find('li').each(function(){
      i++;
      slide = $(this);
      img = $(slide).find('img');
      imgSrc = $(img).attr('src');
      $(this).css({
        'background-image': 'url(' + imgSrc + ')',
        'z-index': i,
        'left': (w_width * i)
      });
      $(img).remove();
    });
    var transition = setInterval(function(){
      $(audioEl)
          .attr('src', advance)
          .attr('loop', false);
      $(slide).animate({
        // 'left': (-w_width)
      }, function(){
        $(audioEl)
          .attr('src', drone)
          .attr('loop', true);
      });
    }, 5000)
  });
});