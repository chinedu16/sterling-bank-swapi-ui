<template>
  <div class="about">
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
        Starwars Characters
      </div>

      <div class="filters">
        <div class="form-group">
          <label for="gender" class="form-label">filter</label>
          <select name="gender" id="" v-model="gender">
            <option value="">select</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        <div class="form-group">
            <label for="gender" class="form-label">view</label>
            <select name="gender" id="">
              <option value="grid" selected>grid</option>
              <option value="list">list</option>
            </select>
          </div>
      </div>

      <div class="characters-container">
        <div class="character" v-for="character in characters.results" :key="character.created">
          <img src="../assets/character-1.jpg" alt="" class="character__image">

          <div class="character__summary">
            <p class="character__name">{{character.name}}</p>
            <p class="character__subtitle">Son of Anakin</p>
            <p class="character__detail">{{character.name}}, a Force-sensitive creature {{character.gender}}, birthed in the year {{character.birth_year}}, 
              Description include a {{character.hair_color}} hair, with {{character.eye_color}} eyes. {{characters.name}} is {{characters.skin_color}}...<span class="button__inline-readmore" @click="details(character)">Read More</span></p>
          </div>
        </div>

      </div>
      <p style="font-size: 2rem; font-weight: 500;" v-if="loading">Loading...</p>
      <p style="font-size: 2rem; font-weight: 500;" v-if="characters.results.length === 0">Empty</p>
      <div class="pagination" v-if="characters.length === 0">
        <div class="pagination__text">
          1-10 of {{characters.count}}
        </div>

        <ul class="pagination__controls" >
          <li class="pagination__arrow" v-if="characters.previous" @click="prev(characters.previous)"><</li>
          <li class="pagination__arrow" v-if="characters.next" @click="prev(characters.next)">></li>
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
  name: 'characters',
  data: function () {
    return {
      characters: [],
      loading: false,
      search: '',
      gender: ''
    }
  },
  
  methods: {
    home: function () {
      this.$router.push('/')
    },
    async listCharacter () {
      this.loading = true
      try {
        const response = await API.listCharacter()
        this.characters = response.data
        this.loading = false
      } catch (error) {
        console.log(error)
        this.loading = false
      }
    },
    details:  function (param) {
      this.$router.push({name: 'character-details', params: param})
    },
    async next (url) {
      this.characters.results = ''
      this.loading = true
      try {
        const response = await API.characterNext(url)
        this.characters = response.data
        this.loading = false
      } catch (error) {
        console.log(error)
        this.loading = false
      }
    },
    async prev (url) {
      this.characters.results = ''
      this.loading = true
      try {
        const response = await API.characterPrev(url)
        this.characters = response.data
        this.loading = false
      } catch (error) {
        console.log(error)
        this.loading = false
      }
    }
  },
  created () {
    this.listCharacter()
  },
  // computed: {
  //   filteredPeople: function() {
  //     if (this.gender === "") {
  //       console.log('jghgfgh')
  //       return this.characters.results;
  //     } else {
  //       return this.characters.results.filter(function(person) {
  //         return person.gender === this.gender
  //       });
  //     }
  //   },
  // },
  watch: {
    search: async function () {
      this.loading = true
      try {
        const response = await API.characterSearch(this.search)
        this.characters = response.data
        this.loading = false
      } catch (error) {
        console.log(error)
        this.loading = false
      }
    }
  }
}
</script>
