class UserMailer < ApplicationMailer
  default from: "reset@finep.com"

  def password_reset(user)
    @user = user

    mail to: @user.email, subject: "Reset Password"
  end
end
