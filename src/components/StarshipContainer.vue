<template>
  <div class="StarshipContainer">
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
  </div>
</template>

<script>
import API from '../api/index.js'
export default {
  name: 'starship-container',
  data: function () {
    return {
      starships: '',
    }
  },
  methods: {
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
    },
  },
  created () {
    this.listStarship()
  }
}
</script>
