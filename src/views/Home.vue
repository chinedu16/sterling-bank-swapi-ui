<template>
  <div class="home">
    <Header></Header>

    <main class="main">
      <div class="main__primary-title">
        Popular Starships
      </div>

      <div class="starships-container">
        <div class="starship">
          <img src="../assets/starship-1.jpg" class="starship__image">

          <div class="starship__summary">
            <p class="starship__name">{{starships[0].name}}</p>
            <p class="starship__description">The {{starships[0].name}} is a {{starships[0].model}}, manufactured by the {{starships[0].manufacturer}}.</p>

            <button class="starship__button" @click="shipDetail(starships[0])">Read More &nbsp; &rarr; </button>
          </div>
        </div>
        <div class="starship">
          <img src="../assets/starship-2.jpg" class="starship__image">

          <div class="starship__summary">
            <p class="starship__name">{{starships[1].name}}</p>
            <p class="starship__description">The {{starships[1].name}} is a {{starships[1].model}}, manufactured by the {{starships[1].manufacturer}}.</p>

            <button class="starship__button" @click="shipDetail(starships[1])">Read More &nbsp; &rarr; </button>
          </div>
        </div>
        <div class="starship">
          <img src="../assets/starship-4.jpg" class="starship__image">

          <div class="starship__summary">
            <p class="starship__name">{{starships[2].name}}</p>
            <p class="starship__description">The {{starships[2].name}} is a {{starships[2].model}}, manufactured by the {{starships[2].manufacturer}}.</p>

            <button class="starship__button" @click="shipDetail(starships[2])">Read More &nbsp; &rarr; </button>
          </div>
        </div>

        <div class="starship">
          <img src="../assets/starship-6.jpg" class="starship__image">

          <div class="starship__summary">
            <p class="starship__name">{{starships[3].name}}</p>
            <p class="starship__description">The {{starships[3].name}} is a {{starships[3].model}}, manufactured by the {{starships[3].manufacturer}}.</p>

            <button class="starship__button" @click="shipDetail(starships[3])">Read More &nbsp; &rarr; </button>
          </div>
        </div>

        <div class="starship">
          <img src="../assets/starship-4.jpg" class="starship__image">

          <div class="starship__summary">
            <p class="starship__name">{{starships[4].name}}</p>
            <p class="starship__description">The {{starships[4].name}} is a {{starships[4].model}}, manufactured by the {{starships[4].manufacturer}}.</p>

            <button class="starship__button" @click="shipDetail(starships[4])">Read More &nbsp; &rarr; </button>
          </div>
        </div>

        <div class="starship">
          <img src="../assets/starship-5.jpg" class="starship__image">

          <div class="starship__summary">
            <p class="starship__name">{{starships[5].name}}</p>
            <p class="starship__description">The {{starships[5].name}} is a {{starships[5].model}}, manufactured by the {{starships[5].manufacturer}}.</p>

            <button class="starship__button" @click="shipDetail(starships[5])">Read More &nbsp; &rarr; </button>
          </div>
        </div>

      </div>

      <div class="button__view-more" @click="starship">
        view more
      </div>

      <div class="main__primary-title">
        Popular Planets
      </div>

      <div class="planets-container">
        <div class="planet">
          <img src="../assets/planet-1.jpg" alt="" class="planet__image">
          <p class="planet__name">Corellia</p>  
        </div>

        <div class="planet">
          <img src="../assets/planet-1.jpg" alt="" class="planet__image">
          <p class="planet__name">Corellia</p>  
        </div>

        <div class="planet">
          <img src="../assets/planet-1.jpg" alt="" class="planet__image">
          <p class="planet__name">Corellia</p>  
        </div>
      </div>

      <div class="button__view-more">
        view more
      </div>

      <div class="main__primary-title">
        Popular Characters
      </div>

      <div class="characters-container">
        <div class="character">
          <img src="../assets/character-1.jpg" alt="" class="character__image">

          <div class="character__summary">
            <p class="character__name">Luke Skywalker</p>
            <p class="character__subtitle">Son of Anakin</p>
            <p class="character__detail">Anakin Skywalker, a Force-sensitive human male, was a legendary Jedi master who fought in the Galactic Civil War during the reign of the Galactic empire...<span class="button__inline-readmore">Read More</span></p>
          </div>
        </div>
        
        <div class="character">
          <img src="../assets/character-1.jpg" alt="" class="character__image">

          <div class="character__summary">
            <p class="character__name">Luke Skywalker</p>
            <p class="character__subtitle">Son of Anakin</p>
            <p class="character__detail">Anakin Skywalker, a Force-sensitive human male, was a legendary Jedi master who fought in the Galactic Civil War during the reign of the Galactic empire...<span class="button__inline-readmore">Read More</span></p>
          </div>
        </div>

        <div class="character">
          <img src="../assets/character-1.jpg" alt="" class="character__image">

          <div class="character__summary">
            <p class="character__name">Luke Skywalker</p>
            <p class="character__subtitle">Son of Anakin</p>
            <p class="character__detail">Anakin Skywalker, a Force-sensitive human male, was a legendary Jedi master who fought in the Galactic Civil War during the reign of the Galactic empire...<span class="button__inline-readmore">Read More</span></p>
          </div>
        </div>

        <div class="character">
          <img src="../assets/character-1.jpg" alt="" class="character__image">

          <div class="character__summary">
            <p class="character__name">Luke Skywalker</p>
            <p class="character__subtitle">Son of Anakin</p>
            <p class="character__detail">Anakin Skywalker, a Force-sensitive human male, was a legendary Jedi master who fought in the Galactic Civil War during the reign of the Galactic empire...<span class="button__inline-readmore">Read More</span></p>
          </div>
        </div>
      </div>

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
import API from '../api/index.js'
export default {
  name: 'Home',
  data: function () {
    return {
      starships: ''
    }
  },
  components: {
    Header
  },
  methods: {
    character: function () {
      this.$router.push({path: '/character'})
    },
    starship: function () {
      this.$router.push({path: '/starship'})
    },
    async listStarship () {
      try {
        const response = await API.listStarship()
        this.starships = response.data.results
      } catch (error) {
        console.log(error)
      }
    },
    shipDetail: function (param) {
      this.$router.push({name: 'starship-details', params: param})
    }
  },
  created () {
    this.listStarship()
  }
  
}
</script>
