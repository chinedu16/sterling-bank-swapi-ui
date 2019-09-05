<template>
  <div class="PlanetContainer">

    <div class="planets-container">
      <div class="planet">
        <img src="../assets/planet-1.jpg" alt="" class="planet__image">
        <p class="planet__name">{{planets[0].name}}</p>  
      </div>

      <div class="planet">
        <img src="../assets/planet-2.jpg" alt="" class="planet__image">
        <p class="planet__name">{{planets[1].name}}</p>  
      </div>

      <div class="planet">
        <img src="../assets/planet-3.jpg" alt="" class="planet__image">
        <p class="planet__name">{{planets[2].name}}</p>  
      </div>
    </div>

  </div>
</template>

<script>

import API from '../api/index.js'
export default {
  name: 'planet-container',
  data: function () {
    return {
      planets: ''
    }
  },
  
  methods: {
    async listPlanet () {
      try {
        const response = await API.listPlanet()
        this.planets = response.data.results
      } catch (error) {
        console.log(error)
      }
    }
  },
  created () {
    this.listPlanet()
  }
  
}
</script>
