guard 'slim', input_root: 'source', output_root: '.', slim: { pretty: true } do
  watch(%r'^.+\.slim$')
end

guard 'sass', input: 'source', output: 'styles', line_numbers: true, debug_info: false do
  watch %r(^.+\.sass$)
end

guard 'coffeescript', input: 'source', output: 'scripts'

guard 'livereload', grace_period: 1 do
  watch(%r(.+\.(sass|coffee|slim))) do |m|
    'http://localhost:4000/*'
  end
end
