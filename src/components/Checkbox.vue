<template>
  <label :for="`tt-form-${name}`" class="tt-checkbox" :class="className">
    <input
      type="checkbox"
      :name="name"
      :id="`tt-form-${name}`"
      @change="checkedEvent($event.target.checked)"
      :checked="checked">
    <span></span>
    <p>{{ text }}</p>
  </label>
</template>

<script>
export default {
  name: 'checkbox',
  props: {
    className: String,
    name: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    checked: Boolean,
    store: {
      type: Boolean,
      default: false
    },
    storeActions: String
  },
  methods: {
    async checkedEvent (event) {
      if (this.store) {
        await this.$store.dispatch(this.storeActions, event).then(() => {
          this.$emit('change', event)
        })
      } else {
        await this.$emit('change', event)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tt-checkbox {
  position: relative;
  display: block;
  margin: 0;
  font-size: 0;

  input, p {
    display: inline-block;
    vertical-align: middle;
    width: auto;
    margin: 0;
  }

  span, p {
    transition: all 225ms ease-in-out;
    will-change: auto;
    cursor: pointer;
  }

  input {
    width: 30px;
    height: 30px;
    position: relative;
    visibility: hidden;
    opacity: 0;
  }

  span {
    display: block;
    width: 30px;
    height: 30px;

    position: absolute;
    top: 0; left: 0;

    border: #ededed solid 3px;
    border-radius: 5px;

    background-color: white;

    &::after {
      width: 0;
      height: 0;

      display: block;
      margin: auto;

      position: absolute;
      top: 0; left: 0;
      bottom: 0; right: 0;

      border-radius: 2px;
      background-color: #86dfff;

      transition: all 225ms ease-in-out;
      will-change: auto;
      content: "";
    }
  }

  p {
    color: #818181;
    font-size: 18px;
    font-weight: 400;
    margin-left: 20px;
  }

  input:checked + span {
    border-color: #86dfff;

    &::after {
      width: 14px;
      height: 14px;
    }
  }

  input:checked ~ p {
    color: #454545;
  }
}
</style>
