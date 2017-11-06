require 'rack/jekyll'
require 'rack-ssl-enforcer'
use Rack::SslEnforcer, :except_environments => 'development'
run Rack::Jekyll.new
