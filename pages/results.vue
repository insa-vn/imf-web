<template>
  <transition name="results">
    <div class ="play-container rows">
    <div class ='hello'>
      <div class="form-group">
        <ul>
          <li v-for ="user in json">
            {{user.name}}
          </li>
        </ul>
      </div>  
    </div>
    </div>
  </transition>
</template>

<script>
  var json = require('/static/leaderboard.json')
  export default {
    name: 'hello',
    data () {
      return {
        json
      }
    }
  }
</script>

<style>
.results-enter-active, .results-leave-active {
  transition: opacity 1s;
}
.results-enter, .results-leave-to {
  opacity: 0;
}
.results-container {
  margin-top: 48px;
  text-align: center;
  padding: 32px;
}
</style>
