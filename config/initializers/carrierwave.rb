# -*- encoding : utf-8 -*-
CarrierWave.configure do |config|
  config.storage = :upyun
  config.upyun_username = 'siweitech'
  config.upyun_password = 'daydayup'
  config.upyun_bucket = 'siweitech'
  config.upyun_bucket_host = 'http://siweitech.b0.upaiyun.com'
end
