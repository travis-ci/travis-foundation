guard 'slim', input_root: 'source', output_root: '.', slim: { pretty: true } do
  watch(%r'^.+\.slim$')
end

guard 'sass', input: 'source', output: 'styles', line_numbers: true, debug_info: false do
  watch %r(^.+\.sass$)
end

guard 'coffeescript', input: 'source', output: 'scripts'
