<template>
  <transition name="play">
    <div>
    <div class="play-container columns">
      <div class="column">
        <img
          @click="$store.commit('shuffleSecondItem')"
          :src="firstItem"
        />
      </div>
      <div class="column">
        <img
          @click="$store.commit('shuffleFirstItem')"
          :src="$store.state.items[Object.keys($store.state.items)[$store.state.currentItems[1]]].image_url"/>
      </div>
    </div>
    <div class = "container">
    <div class="links">
      <router-link to="results" class="button --primary">See results</router-link>
    </div>
    </div>
    </div>
  </transition>
</template>

<style>
.play-enter-active, .play-leave-active {
  transition: opacity 1s;
}
.play-enter, .play-leave-to {
  opacity: 0;
}
.play-container {
  margin-top: 48px;
  text-align: center;
  padding: 32px;
}

.button{
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    firstItem (state) {
      const currentId = state.currentItems[0]
      const correspondingItemId = Object.keys(state.items)[currentId]
      const item = state.items[correspondingItemId]
      return item.image_url
    }
  })
}
</script>
