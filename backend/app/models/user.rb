class User < ActiveRecord::Base
  def send_new_password
    self.passwd = SecureRandom.hex(8)
    save!
    UserMailer.password_reset(self).deliver_now
  end
end