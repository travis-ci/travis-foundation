var Projects = function() {
  this.projects = $('#projects li');
  this.wrapper = this.projects.closest('div');
  this.current = this.projects.first();

  $('#projects h3').click(function(event) {
    this.stop();
    this.activate($(event.target).closest('li'));
  }.bind(this));

  $('#next-testimonial').click(function() { this.stop(); this.next() }.bind(this));
  $('#prev-testimonial').click(function() { this.stop(); this.prev() }.bind(this));
};

Projects.DELAY = 5000;

$.extend(Projects.prototype, {
  prev: function() {
    var element = $(this.current).prev('li');
    if(element.length == 0) element = this.projects.last();
    this.activate(element);
  },
  next: function() {
    var element = $(this.current).next('li');
    if(element.length == 0) element = this.projects.first();
    this.activate(element);
  },
  activate: function(element) {
    var id = element.attr('id');
    $('#testimonial-' + this.current.attr('id')).hide();
    $('#testimonial-' + id).show();
    this.wrapper.removeClass().addClass(id);
    this.current = element;
  },
  start: function() {
    this.timeout = setTimeout(function() {
      this.next();
      this.start();
    }.bind(this), Projects.DELAY);
  },
  stop: function() {
    clearTimeout(this.timeout);
  }
});

var CompanyPackages = function() {
  if(location.hash == '#company-packages') {
    this.toggle();
  }
  $('#company-packages > a').click(this.toggle);
}
$.extend(CompanyPackages.prototype, {
  toggle: function() {
    $('#company-packages').toggleClass('expanded');
  }
});

var BlurbHeading = function(element) {
  this.element = element;
  this.win = $(window);
  this.win.scroll($.proxy(this.position, this));
  this.position();
}
$.extend(BlurbHeading.prototype, {
  position: function() {
    var top = this.win.scrollTop();
    if(top < 500) {
      var offset = top * 0.625;
      if(offset > 150) offset = 150;
      this.element.css({ top: 'calc(50% + ' + offset + 'px)' });
    }
  },
});

$(function() {
  var projects = new Projects();
  // projects.start();
  new CompanyPackages();

  $.fn.blurb_heading = function() {
    return new BlurbHeading(this);
  };

  $('#blurb h2').blurb_heading();
});
