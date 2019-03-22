const messages = {
  tr: {
    pages: {
      login: {
        title: 'Hoşgeldiniz',
        description: 'Giriş yapın ve {name} keşfedin',
        errorTitle: 'Eposta adresiniz yada şifreniz yanlış!',
        errorDesc: 'Lütfen e-posta adresinizi ve şifrenizi kontrol ediniz.',
        successTitle: 'Giriş Başarılı!',
        successDesc: 'Hoşgeldin! {name} ile tadını çıkar!'
      },
      register: {
        title: 'Hoşgeldiniz',
        description: 'Kayıt olun ve {name} keşfedin',
        errorTitle: 'Eposta adresiniz yada şifreniz hatalı!',
        errorDesc: 'Lütfen e-posta adresinizi ve şifrenizi kontrol ediniz.',
        successTitle: 'Kayıt Başarılı!',
        successDesc: 'Hoşgeldin! Artık sen de bizden birisin!'
      },
      forgot: {
        title: 'Şifreni mi Unuttun?',
        description: 'Eposta adresinizi girin, şifrenizi sıfırlamanız için size bir bağlantı gönderelim.',
        successTitle: 'Sıfırlama bağlantısı başarıyla gönderildi',
        successDesc: 'Kayıtlı eposta adresinize, şifrenizi sıfırlamanız için bir bağlantı gönderdik.',
        errorTitle: 'Eposta adresiniz hatalı!',
        errorDesc: 'Lütfen e-posta adresinizi kontrol ediniz'
      },
      dashboard: {
        errorTitle: 'Veri indirilirken bir hata oluştu!',
        errorDesc: 'Lütfen daha sonra tekrar deneyin veya çıkış yapıp tekrar giriş yapın.',
        successTitle: 'Verileriniz başarıyla alındı!',
        successDesc: 'Şimdi, {name} tadını çıkarabilirsiniz!'
      }
    },
    forms: {
      login: {
        email: 'Eposta adresinizi giriniz',
        pass: 'Şimdi de şifrenizi giriniz',
        register: 'Kayıtlı hesabınız yok mu?',
        signin: 'GİRİŞ YAP',
        logout: 'ÇIKIŞ YAP',
        forgot: 'Şifremi Unuttum?'
      },
      register: {
        email: 'En çok kullandığını epostanızı giriniz',
        pass: 'Şimdi de güçlü bir şifre seçiniz',
        login: 'Zaten kayıtlı mısınız?',
        signup: 'KAYIT OL',
        help: 'Güçlü bir şifre için biraz yardım alın'
      },
      forgot: {
        email: 'Eposta adresinizi giriniz.',
        back: 'Giriş Yap\'a Dön',
        submit: 'GÖNDER'
      }
    }
  },
  en: {
    pages: {
      login: {
        title: 'Get Started',
        description: 'Sign in and discover {name}',
        errorTitle: 'Invalid email or password!',
        errorDesc: 'Please check your e-mail address and password.',
        successTitle: 'Login Successful!',
        successDesc: 'Welcome! Enjoy with {name}!'
      },
      register: {
        title: 'Get Started',
        description: 'Sign up and discover {name}',
        errorTitle: 'Wrong email or password!',
        errorDesc: 'Please check your e-mail address and password.',
        successTitle: 'Registration Successful!',
        successDesc: 'Welcome! You are one of us now!'
      },
      forgot: {
        title: 'Forgot Password?',
        description: 'Enter your email address and we\'ll send you a link to reset your password',
        successTitle: 'Reset link successfully sent!',
        successDesc: 'We\'ve sent a link to your registered email address to reset your password.',
        errorTitle: 'Wrong email address!',
        errorDesc: 'Please check your email address!'
      },
      dashboard: {
        errorTitle: 'An error occured while data downloading!',
        errorDesc: 'Please try again later or logout and login again.',
        successTitle: 'Your data was successfully received!',
        successDesc: 'Now! Enjoy with {name}!'
      }
    },
    forms: {
      login: {
        email: 'Enter your email address',
        pass: 'Now, enter your password',
        register: 'Do not have an account?',
        signin: 'LOGIN',
        logout: 'LOGOUT',
        forgot: 'Forgot Password?'
      },
      register: {
        email: 'Enter your most used email',
        pass: 'Now choose a strong password',
        login: 'Already have an account?',
        signup: 'REGISTER',
        help: 'Here some help for strong password'
      },
      forgot: {
        email: 'Enter your email address',
        back: 'Go Back to Login',
        submit: 'SEND'
      }
    }
  }
}

export default messages
