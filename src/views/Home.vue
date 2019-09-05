<template>
  <div class="home">
    <Header></Header>

    <main class="main">

      <div class="main__primary-title">
        Popular Starships
      </div>
      <StarshipContainer></StarshipContainer>

      <div class="button__view-more" @click="starship">
        view more
      </div>
      <div class="main__primary-title">
        Popular Planets
      </div>

      <PlanetContainer></PlanetContainer>

      <div class="button__view-more" @click="planet">
        view more
      </div>

      <div class="main__primary-title">
        Popular Characters
      </div>

      <CharacterContainer></CharacterContainer>

      <div class="button__view-more" @click="character">
        view more
      </div>
    </main>

    <footer class="footer">
      &nbsp;
    </footer>
  </div>
</template>

<script>
import Header from '../components/Header'
import StarshipContainer from '../components/StarshipContainer'
import PlanetContainer from '../components/PlanetContainer'
import CharacterContainer from '../components/CharacterContainer'
import API from '../api/index.js'
export default {
  name: 'character-container',
  data: function () {
    return {
      starships: '',
      characters: '',
      planets: ''
    }
  },
  components: {
    Header,
    StarshipContainer,
    PlanetContainer,
    CharacterContainer
  },
  methods: {
    character: function () {
      this.$router.push({path: '/character'})
    },
    starship: function () {
      this.$router.push({path: '/starship'})
    },
    planet: function () {
      this.$router.push({path: '/planet'})
    },
    shipDetail: function (param) {
      this.$router.push({name: 'starship-details', params: param})
    },
    characterDetail: function (param) {
      this.$router.push({name: 'character-details', params: param})
    }
  }
}
</script>
