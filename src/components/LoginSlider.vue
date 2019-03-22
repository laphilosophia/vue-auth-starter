<template>
  <div :class="className">
    <slider animation="fade" :control-btn="false" :interval="4000" :width="'100%'" :height="'100%'">
      <slider-item>
        <h4 v-html="$i18n.t('slider.login.primary.title')"/>
        <p v-html="$i18n.t('slider.login.primary.description')"/>
      </slider-item>
      <slider-item>
        <h4 v-html="$i18n.t('slider.login.secondary.title')"/>
        <p v-html="$i18n.t('slider.login.secondary.description')"/>
      </slider-item>
      <slider-item>
        <h4 v-html="$i18n.t('slider.login.tertiary.title')"/>
        <p v-html="$i18n.t('slider.login.tertiary.description')"/>
      </slider-item>
    </slider>
  </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'

export default {
  name: 'login-slider',
  props: ['className'],
  components: {
    Slider,
    SliderItem
  }
}
</script>
