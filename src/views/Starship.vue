<template>
  <div class="home">
    <header class="header">
      <img class="header__logo small-logo" src="../assets/logo.png" @click="home" alt="">
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
        Popular Starships
      </div>

      <div class="starships-container">
        <div class="starship" v-for="ships in starships.results" :key="ships.name">
          <img src="../assets/starship-5.jpg" class="starship__image">

          <div class="starship__summary">
            <p class="starship__name">{{ships.name}}</p>
            <p class="starship__description">The {{ships.name}} is a {{ships.model}}, manufactured by the {{ships.manufacturer}}.</p>

            <button class="starship__button" @click="shipDetail(ships)">Read More &nbsp; &rarr; </button>
          </div>
        </div>
        
      </div>
      <p style="font-size: 2rem; font-weight: 500;" v-if="loading">Loading...</p>
      <p style="font-size: 2rem; font-weight: 500;" v-if="starships.results.length === 0 && loading === false">Empty</p>
      <div class="pagination" v-if="starships">
        <div class="pagination__text">
          1-10 of {{starships.count}}
        </div>

        <ul class="pagination__controls">
          <li class="pagination__arrow" v-if="starships.previous" @click="prev(starships.previous)" ><</li>
          <li class="pagination__arrow" v-if="starships.next" @click="next(starships.next)">></li>
        </ul>
      </div>    

    </main>

    <footer class="footer">
      &nbsp;
    </footer>
  </div>
</template>

<script>
import API from '../api/index.js'
export default {
  name: 'Starship',
  data: function () {
    return {
      starships: [],
      loading: false,
      search: ''
    }
  },
  methods: {
     home: function () {
      this.$router.push('/')
    },
    details: function () {
      this.$router.push({path: 'starship-details'})
    },
    async listStarship () {
      this.loading = true
      try {
        const response = await API.listStarship()
        this.starships = response.data
        this.loading = false
      } catch (error) {
        console.log(error)
        this.loading = false
      }
    },
    shipDetail: function (param) {
      this.$router.push({name: 'starship-details', params: param})
    },
    async next (url) {
      this.starships.results = ''
      this.loading = true
      try {
        const response = await API.starshipNext(url)
        this.starships = response.data
        this.loading = false
      } catch (error) {
        console.log(error)
        this.loading = false
      }
    },
    async prev (url) {
      this.starships.results = ''
      this.loading = true
      try {
        const response = await API.starshipPrev(url)
        this.starships = response.data
        this.loading = false
      } catch (error) {
        console.log(error)
        this.loading = false
      }
    }
  },
  created () {
    this.listStarship()
  },
  watch: {
    search: async function () {
      this.loading = true
      try {
        const response = await API.starshipSearch(this.search)
        this.starships = response.data
        this.loading = false
      } catch (error) {
        console.log(error)
        this.loading = false
      }
    }
  }
}
</script>
