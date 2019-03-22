<template>
  <div class="app-language">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.val">{{ lang.text }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'language',
  data () {
    return {
      langs: [
        { val: 'en', text: 'English' },
        { val: 'tr', text: 'Türkçe' }
      ]
    }
  }
}
</script>
