<template>
  <div class="app-login">
    <forgot-pass-form className="app-login--form"/>
    <login-banner className="app-login--banner" type="pass"/>
  </div>
</template>

<script>
import ForgotPassForm from '@/components/ForgotPassForm'
import LoginBanner from '@/components/LoginBanner'

export default {
  name: 'forgot-password',
  components: {
    ForgotPassForm,
    LoginBanner
  }
}
</script>
