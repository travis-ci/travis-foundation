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

$(function() {
  var projects = new Projects();
  // projects.start();
  new CompanyPackages();

  var win  = $(window);
  var nav  = $('header');
  var h2   = $('#blurb h2');
  var lead = $('#lead');

  win.scroll(function() {
    var top = win.scrollTop();
    if(top < 500 && lead.offset().top - top > 420) {
      h2.css({ top: 'calc(50% + ' + (top * 0.625) + 'px)' });
    }
    if(h2.offset().top - top > 100) {
      nav.show();
    } else {
      nav.hide();
    }

  });
});
