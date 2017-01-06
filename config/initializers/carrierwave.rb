# -*- encoding : utf-8 -*-
CarrierWave.configure do |config|
  config.storage = :upyun
  config.upyun_username = 'fodcool'
  config.upyun_password = 'yuanchengblog'
  config.upyun_bucket = 'yuanchengblog'
  config.upyun_bucket_host = 'http://yuanchengblog.b0.upaiyun.com'
end
