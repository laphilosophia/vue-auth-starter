<template>
  <div :class="className">
    <language/>

    <h2>{{ $i18n.t('pages.forgot.title') }}</h2>
    <p>{{ $i18n.t('pages.forgot.description') }}</p>

    <form @submit.prevent="sendEmail" novalidate>
      <label for="email">
        <input
          id="email"
          name="email"
          type="email"
          v-model="email"
          v-validate="'required|email'"
          :placeholder="$i18n.t('forms.forgot.email')"
          :class="{ 'input': true, 'is-error': errors.has('email') }"
          required>
        <span
          v-show="errors.has('email')"
          class="is-error">
          {{ errors.first('email') }}
        </span>
      </label>

      <router-link
        to="/login"
        class="non-account">
        {{ $i18n.t('forms.forgot.back') }}
      </router-link>

      <button
        type="submit"
        class="submit-button"
        :disabled="errors.any()">
        {{ $i18n.t('forms.forgot.submit') }}
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import notification from '@/plugins/notification'
import Language from '@/components/Language'

export default {
  name: 'forgot-pass-form',
  props: ['className'],
  components: {
    Language
  },
  data () {
    return {
      email: ''
    }
  },
  computed: {
    isCompleted: function () {
      return this.email && this.password
    }
  },
  methods: {
    sendEmail () {
      this.$validator.validateAll().then(result => {
        if (result) {
          axios.post(`${process.env.VUE_APP_API}forgot_password?email=${this.email}`)
            .then(resp => {
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
                title: this.$i18n.t('pages.forgot.successTitle'),
                description: this.$i18n.t('pages.forgot.successDesc')
              }, 'error', successNotify).then(() => {
                this.$log.info('success!')
              })
            })
            .catch(err => {
              let notificationConfig = {
                className: ['notification', 'notification-error'],
                horizontal: 'right',
                vertical: 'bottom',
                duration: 4000,
                mode: 'queue',
                closeable: true,
                transition: 'slide-up'
              }

              notification({
                title: this.$i18n.t('pages.forgot.errorTitle'),
                description: this.$i18n.t('pages.forgot.errorDesc')
              }, 'error', notificationConfig).then(() => {
                this.$log.error(err)
              })
            })
        }

        this.$log.error('Correct them errors!')
      })
    }
  }
}
</script>
