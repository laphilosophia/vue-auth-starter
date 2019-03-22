<template>
  <div :class="className">
    <language/>

    <h2>{{ $i18n.t('pages.register.title') }}</h2>
    <p>{{ $i18n.t('pages.register.description') }}</p>

    <form @submit.prevent="register" novalidate>
      <label for="email">
        <input
          id="email"
          name="email"
          type="email"
          v-model="email"
          v-validate="'required|email'"
          class="tt-input"
          :class="{ 'input': true, 'is-error': errors.has('email') }"
          :placeholder="$i18n.t('forms.register.email')"
          autocomplete="off"
          required>
        <span
          v-show="errors.has('email')"
          class="is-error">
          {{ errors.first('email') }}
        </span>
      </label>

      <label for="password">
        <span
          class="password-viewer"
          :class="{ 'is-password-active': passOpen }"
          @click="passwordViewer($event)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 15"><path d="M-9.523-43.2c-3.894,0-7.07,2.045-12.017,7.5,3.493,3.7,6.5,7.5,12.017,7.5,5.6,0,9.593-4.892,11.983-7.4C-.08-38.7-4.041-43.2-9.523-43.2Zm0,1.7c3.292,0,6.234,1.773,9.727,5.83C-2.186-33.109-5.362-29.9-9.523-29.9c-4.228,0-6.685-2.54-9.71-5.8C-15.222-39.944-12.6-41.5-9.523-41.5Zm0,9.784A3.945,3.945,0,0,0-5.612-35.7a3.945,3.945,0,0,0-3.911-3.989A3.934,3.934,0,0,0-13.434-35.7,3.934,3.934,0,0,0-9.523-31.711Zm0-1.7a2.241,2.241,0,0,1-2.24-2.284,2.241,2.241,0,0,1,2.24-2.284A2.251,2.251,0,0,1-7.284-35.7,2.251,2.251,0,0,1-9.523-33.416Z" transform="translate(21.54 43.2)"/></svg>
        </span>
        <input
          id="password"
          :type="[passOpen ? 'text' : 'password']"
          name="password"
          v-model="password"
          v-validate="'required|min:6'"
          class="tt-input"
          :class="{ 'input': true, 'is-error': errors.has('password') }"
          :placeholder="$i18n.t('forms.register.pass')"
          autocomplete="off"
          required>
        <span
          v-show="errors.has('password')"
          class="is-error">
          {{ errors.first('password') }}
        </span>
      </label>

      <password v-model="password" :strength-meter-only="true"/>

      <router-link
        to="/login"
        class="allready-account">
        {{ $i18n.t('forms.register.login') }}
      </router-link>

      <button
        type="submit"
        class="tt-button animated register-button"
        tt-button="success"
        :disabled="errors.any() || !isCompleted">
        {{ $i18n.t('forms.register.signup') }}
      </button>
    </form>
  </div>
</template>

<script>
import Password from 'vue-password-strength-meter'
import notification from '@/plugins/notification'
import Language from '@/components/Language'

export default {
  name: 'register-form',
  props: ['className'],
  components: {
    Language,
    Password
  },
  data () {
    return {
      email: '',
      password: '',
      passOpen: false
    }
  },
  computed: {
    isCompleted: function () {
      return this.email && this.password
    }
  },
  methods: {
    register: function () {
      let data = {
        email: this.email,
        password: this.password
      }

      this.$validator.validateAll().then(result => {
        if (result) {
          this.$store
            .dispatch('register', data)
            .then(() => {
              let successNotify = {
                className: ['notification', 'notification-success'],
                horizontal: 'right',
                vertical: 'bottom',
                duration: 4000,
                mode: 'queue',
                closeable: true,
                transition: 'slide-up'
              }

              notification({
                title: this.$i18n.t('pages.register.successTitle'),
                description: this.$i18n.t('pages.register.successDesc')
              }, 'error', successNotify).then(() => {
                this.$router.push({ name: 'login' })
              })
            })
            .catch(err => {
              let errorNotify = {
                className: ['notification', 'notification-error'],
                horizontal: 'right',
                vertical: 'bottom',
                duration: 4000,
                mode: 'queue',
                closeable: true,
                transition: 'slide-up'
              }

              notification({
                title: this.$i18n.t('pages.register.errorTitle'),
                description: this.$i18n.t('pages.register.errorDesc')
              }, 'error', errorNotify).then(() => {
                this.$log.error(err)
              })
            })
          return
        }

        this.$log.error('Correct them errors!')
      })
    },
    passwordViewer: function (event) {
      this.passOpen = !this.passOpen
    }
  }
}
</script>
