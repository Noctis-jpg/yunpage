

var current = 0,
    slides = document.getElementsByTagName("h3");

setInterval(function() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  current = (current != slides.length - 1) ? current + 1 : 0;
  slides[current].style.opacity = 1;
}, 2000);
// window.onscroll = function() {myFunction()};

$(function() {
    var header = $(".navbar");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            header.removeClass('navbar').addClass("wht-nav");

        } else {
            header.removeClass("wht-nav").addClass('navbar');

        }
    });
});
$(function() {
    var div = $(".collapse");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            div.removeClass('').addClass("cent");
        } else {
            div.removeClass('cent').addClass('');
        }
    });
});



var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
var options = {
	useEasing: true,
	useGrouping: true,
	separator: ",",
	decimal: "."
};


// contador JS codes begin >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



var waypoint = new Waypoint({
  element: document.getElementById('waypoints'),
  handler: function(direction) {
    function countUp(val, limit, symbol, el) {
      // console.log('val: ' + val);
      // console.log('limit: ' + limit);
      $(el).html(val + symbol);
      val++;
      setTimeout(function() {
        if (val <= limit)
          countUp(val, limit, symbol, el);
      }, 100);
    };

    $(function() {
      var _that = $('.contador'),
        val = parseInt($(_that).data('value')),
        symbol = $(_that).data('symbol');
      countUp(0, val, symbol, _that);
    });
    $(function() {
      var _that = $('.contador1'),
        val = parseInt($(_that).data('value')),
        symbol = $(_that).data('symbol');
      countUp(0, val, symbol, _that);
    });
    $(function() {
      var _that = $('.contador2'),
        val = parseInt($(_that).data('value')),
        symbol = $(_that).data('symbol');
      countUp(0, val, symbol, _that);
    });
    $(function() {
      var _that = $('.contador3'),
        val = parseInt($(_that).data('value')),
        symbol = $(_that).data('symbol');
      countUp(0, val, symbol, _that);
    });
  },
  offset: '75%'
})
// contador JS codes end >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Slick slider begin >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
$( document ).ready(function() {

  $(".myslider").slick({

    // normal options...
    infinite: false,

    // the magic
    responsive: [{

        breakpoint: 300,
        settings: {
          slidesToShow: 3,
          infinite: true
        }

      }, {

        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: true
        }

      }, {

        breakpoint: 300,
        settings: "unslick" // destroys slick

      }]
  });
});
//Slick slider end >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// $(document).ready(function(){
// $("nav").find("#about").click (e) ->
//     e.preventDefault()
//     section = $(this).attr "#about"
//     $("html, body").animate
//         scrollTop: $(section).offset().top
// });
