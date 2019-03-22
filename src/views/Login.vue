<template>
  <div class="app-login">
    <login-form className="app-login--form"/>
    <login-banner className="app-login--banner" type="auth"/>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'
import LoginBanner from '@/components/LoginBanner'

export default {
  name: 'login',
  components: {
    LoginForm,
    LoginBanner
  }
}
</script>
