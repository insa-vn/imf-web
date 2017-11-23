<<template>
  <transition name="play">
    <div>
    <div class="play-container columns">
      <div class="column">
        <img src="http://ksassets.timeincuk.net/wp/uploads/sites/55/2017/05/Jon-Snow-920x584.png" />
      </div>
      <div class="column">
        <img src="https://www.unilad.co.uk/wp-content/uploads/2016/08/Khal-Drogo.jpg"/>
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
