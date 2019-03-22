<template>
  <div class="app-login">
    <register-form className="app-login--form"/>
    <login-banner className="app-login--banner" type="auth"/>
  </div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm'
import LoginBanner from '@/components/LoginBanner'

export default {
  name: 'register',
  components: {
    RegisterForm,
    LoginBanner
  }
}
</script>
