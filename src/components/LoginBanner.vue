<template>
  <div :class="className">
    <img v-if="type === 'auth'" :src="require(`@/assets/illustrations/authentication.svg`)"/>
    <img v-if="type === 'pass'" :src="require(`@/assets/illustrations/forgot-password.svg`)"/>
    <img v-if="type === 'change'" :src="require(`@/assets/illustrations/password-change.svg`)"/>
  </div>
</template>

<script>
export default {
  name: 'login-banner',
  props: ['className', 'type']
}
</script>
