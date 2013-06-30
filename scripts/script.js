(function() {
  var BlurbHeading, CompanyPackages, Projects;

  Projects = function() {
    var _this = this;

    this.projects = $('#projects li');
    this.wrapper = this.projects.closest('div');
    this.current = this.projects.first();
    $('#projects h3').click(function(event) {
      _this.stop();
      return _this.activate($(event.target).closest('li'));
    });
    $('#next-testimonial').click(function() {
      _this.stop();
      return _this.next();
    });
    $('#prev-testimonial').click(function() {
      _this.stop();
      return _this.prev();
    });
    return this;
  };

  Projects.DELAY = 5000;

  $.extend(Projects.prototype, {
    prev: function() {
      var element;

      element = $(this.current).prev('li');
      if (element.length === 0) {
        element = this.projects.last();
      }
      return this.activate(element);
    },
    next: function() {
      var element;

      element = $(this.current).next('li');
      if (element.length === 0) {
        element = this.projects.first();
      }
      return this.activate(element);
    },
    activate: function(element) {
      var id;

      id = element.attr('id');
      $('#testimonial-' + this.current.attr('id')).hide();
      $('#testimonial-' + id).show();
      this.wrapper.removeClass().addClass(id);
      return this.current = element;
    },
    start: function() {
      return this.timeout = setTimeout($.proxy(this.flip, this), Projects.DELAY);
    },
    flip: function() {
      this.next();
      return this.start();
    },
    stop: function() {
      return clearTimeout(this.timeout);
    }
  });

  CompanyPackages = function() {
    if (location.hash === '#company-packages') {
      this.toggle();
    }
    $('#company-packages > a').click(this.toggle);
    return this;
  };

  $.extend(CompanyPackages.prototype, {
    toggle: function() {
      return $('#company-packages').toggleClass('expanded');
    }
  });

  BlurbHeading = function(element) {
    this.element = element;
    this.win = $(window);
    this.win.scroll($.proxy(this.position, this));
    this.position();
    return this;
  };

  $.extend(BlurbHeading.prototype, {
    position: function() {
      var offset, top;

      top = this.win.scrollTop();
      if (top < 500) {
        offset = top * 0.625 - 40;
        if (offset > 150) {
          offset = 150;
        }
        return this.element.css({
          top: 'calc(50% + ' + offset + 'px)'
        });
      }
    }
  });

  $.fn.blurb_heading = function() {
    return new BlurbHeading(this);
  };

  $(function() {
    var projects;

    projects = new Projects();
    return $('#blurb h2').blurb_heading();
  });

}).call(this);
