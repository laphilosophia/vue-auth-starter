<template>
  <div class="spring-spinner">
    <div class="spring-spinner-part top">
      <div class="spring-spinner-rotator"></div>
    </div>
    <div class="spring-spinner-part bottom">
      <div class="spring-spinner-rotator"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'spinner'
}
</script>

<style scoped lang="scss">
.spring-spinner,
.spring-spinner * {
  box-sizing: border-box;
}

.spring-spinner {
  position: absolute;
  top: 0; left: 0;
  bottom: 0; right: 0;
  display: block;
  margin: auto;
  height: 50px;
  width: 50px;
}

.spring-spinner .spring-spinner-part {
  overflow: hidden;
  height: calc(50px / 2);
  width: 50px;
}

.spring-spinner .spring-spinner-part.bottom {
  transform: rotate(180deg) scale(-1, 1);
}

.spring-spinner .spring-spinner-rotator {
  width: 50px;
  height: 50px;
  border: calc(50px / 7) solid transparent;
  border-right-color: rgba(white, .4);
  border-top-color: rgba(white, .4);
  border-radius: 50%;
  box-sizing: border-box;
  animation: spring-spinner-animation 3s ease-in-out infinite;
  transform: rotate(-200deg);
}

@keyframes spring-spinner-animation {
  0% {
    border-width: calc(50px / 7);
  }
  25% {
    border-width: calc(50px / 23.33);
  }
  50% {
    transform: rotate(115deg);
    border-width: calc(50px / 7);
  }
  75% {
    border-width: calc(50px / 23.33);
  }
  100% {
    border-width: calc(50px / 7);
  }
}
</style>
