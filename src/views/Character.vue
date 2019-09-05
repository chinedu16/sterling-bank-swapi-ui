<template>
  <div class="about">
    <Header></Header>

    <main class="main">
      <div class="main__primary-title">
        Starwars Characters
      </div>

      <div class="filters">
        <div class="form-group">
          <label for="gender" class="form-label">filter</label>
          <select name="gender" id="">
            <option value="male" selected>male</option>
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
            <p class="character__detail">{{character.name}}, a Force-sensitive creature, birthed in the year {{character.birth_year}}, 
              Description include a {{character.hair_color}} hair, with {{character.eye_color}} eyes. {{characters.name}} is {{characters.skin_color}}...<span class="button__inline-readmore" @click="details(character)">Read More</span></p>
          </div>
        </div>

      </div>
      <p style="font-size: 2rem; font-weight: 500;" v-if="loading">Loading...</p>
      <div class="pagination" v-if="characters">
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
import Header from '../components/Header'
import API from '../api/index.js'
export default {
  name: 'About',
  data: function () {
    return {
      characters: '',
      loading: false
    }
  },
  components: {
    Header
  },
  methods: {
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
  }
}
</script>
