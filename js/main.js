"use strict";

// jQuery
$(document).ready(function () {
  var logo = $('.logo');
  $(window).bind('mousewheel', function (e) {
    if (e.originalEvent.wheelDelta >= 0) {
      if (logo.hasClass('expanded')) {
        logo.toggleClass('expanded');
      }
    } else {
      if (!logo.hasClass('expanded')) {
        logo.toggleClass('expanded');
      }
    }
  });
});



// OOP Style

class Hero {
  constructor(name, specialAbility) {
    // setting property values
    this._name = name;
    this._specialAbility = specialAbility;

    // declaring a method on the object
    this.getDetails = function () {
      return `${this._name} can ${this._specialAbility}`;
    };
  }
}


var IronMan = new Hero('Iron Man', 'flye');
var Thor = new Hero('Thor', 'dig');

console.log(IronMan.getDetails()); // Iron Man can run
console.log(Thor.getDetails()); // Iron Man can run






if ($('.slideshow').length) {
  $('.slideshow').carouFredSel({
    responsive: true,
    direction: 'up',
    pauseOnResize: true,
    auto: {
      pauseOnHover: true
    },
    items: {
      width: "800px",
      height: 600
    },
    pagination: {
      container: '#pager',
      keys: true,
    },
    mousewheel: true,
    scroll: {
      duration: 1600,
      easing: 'easeInOutExpo',
      onBefore: function(data){
        $('.slideshow section').toggleClass('blar')
        $('.slideshow article').addClass(data.scroll.direction + '-form')
        setTimeout(function(){
          $('.slideshow section').toggleClass('blar')
          $("[class*='-form']").removeClass()
        }, 800);
      }
    }
  });
}