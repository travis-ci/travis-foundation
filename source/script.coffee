Projects = ->
  @projects = $('#projects li')
  @wrapper = @projects.closest('div')
  @current = @projects.first()
  $('#projects h3').click (event) =>
    @stop()
    @activate $(event.target).closest('li')
  $('#next-testimonial').click =>
    @stop()
    @next()
  $('#prev-testimonial').click =>
    @stop()
    @prev()
  @

Projects.DELAY = 5000
$.extend Projects::,
  prev: ->
    element = $(@current).prev('li')
    element = @projects.last()  if element.length is 0
    @activate element

  next: ->
    element = $(@current).next('li')
    element = @projects.first()  if element.length is 0
    @activate element

  activate: (element) ->
    id = element.attr('id')
    $('#testimonial-' + @current.attr('id')).hide()
    $('#testimonial-' + id).show()
    @wrapper.removeClass().addClass id
    @current = element

  start: ->
    @timeout = setTimeout($.proxy(@flip, this), Projects.DELAY)

  flip: ->
    @next()
    @start()

  stop: ->
    clearTimeout @timeout


CompanyPackages = ->
  @toggle()  if location.hash is '#company-packages'
  $('#company-packages > a').click @toggle
  @

$.extend CompanyPackages::,
  toggle: ->
    $('#company-packages').toggleClass 'expanded'


BlurbHeading = (element) ->
  @element = element
  @win = $(window)
  @win.scroll $.proxy(@position, this)
  @position()
  @

$.extend BlurbHeading::,
  position: ->
    top = @win.scrollTop()
    if top < 500
      offset = top * 0.625 - 40
      offset = 150  if offset > 150
      @element.css top: 'calc(50% + ' + offset + 'px)'

$.fn.blurb_heading = -> new BlurbHeading(this)

$ ->
  projects = new Projects()
  # projects.start()
  # new CompanyPackages()

  $('#blurb h2').blurb_heading()
