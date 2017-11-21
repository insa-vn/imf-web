<template>
  <transition name="landing-page">
    <section class="imf-container">
      <div>
        <logo/>
        <h1 class="title text--primary">
          Images Fight
        </h1>
        <h2 class="subtitle text-secondary">
          Let the fun begin
        </h2>
        <div class="links">
          <router-link to="play" class="button--primary">Play</router-link>
          <a href="/whoweare" target="_blank" class="button--grey">Who we are</a>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  layout: 'landing'
}
</script>

<style>
.imf-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.landing-page-enter-active, .landing-page-leave-active {
  transition: opacity 1s;
}
.landing-page-enter, .landing-page-leave-to {
  opacity: 0;
}

</style>
