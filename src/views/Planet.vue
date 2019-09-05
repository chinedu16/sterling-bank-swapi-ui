<template>
  <div class="home">
    <header class="header">
      <img class="header__logo small-logo" src="../assets/logo.png" alt="">
      <img src="../assets/hero-banner.jpg" alt="" class="header__bg">

      <div class="header__content">
        <div class="header__content-main">
          <div class="header__title">
            <img src="../assets/logo.png" alt="" class="header__title-img small-logo">
            <p class="header__title-text">Directory</p>
          </div>

          <div class="header__title-secondary">
            Find your favorite Characters, Films, Species, Starships and Planets
          </div>

          <div class="header__search-container">
            <i class="fa fa-search header__search-icon"></i>
            <input type="text" v-model="search" class="header__search-box" placeholder="Enter a search term">
          </div>
        </div>
      </div>
    </header>

    <main class="main">
      <div class="main__primary-title">
        Popular Planets
      </div>

      <div class="starships-container">
        <div class="starship" v-for="planet in planets.results" :key="planet.created">
          <img src="../assets/planet-2.jpg" class="starship__image">

          <div class="starship__summary">
            <p class="starship__name">{{planet.name}}</p>
            <p class="starship__description">The {{planet.name}} is a planet with a Population of {{planet.population}}. its terrian include {{planet.terrian}}. It also has a diameter of {{planet.diameter}} with climate mostly {{planet.climate}} </p>

            <button class="starship__button" @click="planetDetail(planet)">Read More &nbsp; &rarr; </button>
          </div>
        </div>
        
      </div>
      <p style="font-size: 2rem; font-weight: 500;" v-if="loading">Loading...</p>
      <p style="font-size: 2rem; font-weight: 500;" v-if="planets.results.length === 0">Empty</p>
      <div class="pagination" v-if="planets.length === 0">
        <div class="pagination__text">
          1-10 of {{planets.count}}
        </div>

        <ul class="pagination__controls">
          <li class="pagination__arrow" v-if="planets.previous" @click="prev(planets.previous)" ><</li>
          <li class="pagination__arrow" v-if="planets.next" @click="next(planets.next)">></li>
        </ul>
      </div>    

    </main>

    <footer class="footer">
      &nbsp;
    </footer>
  </div>
</template>

<script>
import Header from '../components/Header'
import API from '../api/index.js'
export default {
  name: 'Starship',
  data: function () {
    return {
      planets: '',
      loading: false,
      search: ''
    }
  },
  components: {
    Header
  },
  methods: {
    details: function () {
      this.$router.push({path: 'starship-details'})
    },
    async listPlanet () {
      this.loading = true
      try {
        const response = await API.listPlanet()
        this.planets = response.data
        this.loading = false
      } catch (error) {
        console.log(error)
        this.loading = false
      }
    },
    planetDetail: function (param) {
      this.$router.push({name: 'planet-details', params: param})
    },
    async next (url) {
      this.planets.results = ''
      this.loading = true
      try {
        const response = await API.planetNext(url)
        this.planets = response.data
        this.loading = false
      } catch (error) {
        console.log(error)
        this.loading = false
      }
    },
    async prev (url) {
      this.planets.results = ''
      this.loading = true
      try {
        const response = await API.planetPrev(url)
        this.planets = response.data
        this.loading = false
      } catch (error) {
        console.log(error)
        this.loading = false
      }
    }
  },
  created () {
    this.listPlanet()
  },
  watch: {
    search: async function () {
      this.loading = true
      try {
        const response = await API.planetSearch(this.search)
        this.planets = response.data
        this.loading = false
      } catch (error) {
        console.log(error)
        this.loading = false
      }
    }
  }
}
</script>
