<template>
  <div class="CharacterContainer">

    <div class="characters-container">
      <div class="character">
        <img src="../assets/character-1.jpg" alt="" class="character__image">

        <div class="character__summary">
          <p class="character__name">{{characters[0].name}}</p>
          <p class="character__subtitle">Son of Anakin</p>
          <p class="character__detail">{{characters[0].name}}, a Force-sensitive creature, birthed in the year {{characters[0].birth_year}}, 
            Description include a {{characters[0].hair_color}} hair, with {{characters[0].eye_color}} eyes. {{characters[0].name}} is {{characters[0].skin_color}}...<span @click="characterDetail(characters[0])" class="button__inline-readmore">Read More</span></p>
        </div>
      </div>

      <div class="character">
        <img src="../assets/character-1.jpg" alt="" class="character__image">

        <div class="character__summary">
          <p class="character__name">{{characters[1].name}}</p>
          <p class="character__subtitle">Son of Anakin</p>
          <p class="character__detail">{{characters[1].name}}, a Force-sensitive creature, birthed in the year {{characters[1].birth_year}}, 
            Description include a {{characters[1].hair_color}} hair, with {{characters[1].eye_color}} eyes. {{characters[1].name}} is {{characters[1].skin_color}}...<span @click="characterDetail(characters[1])" class="button__inline-readmore">Read More</span></p>
        </div>
      </div>

      <div class="character">
        <img src="../assets/character-1.jpg" alt="" class="character__image">

        <div class="character__summary">
          <p class="character__name">{{characters[2].name}}</p>
          <p class="character__subtitle">Son of Anakin</p>
          <p class="character__detail">{{characters[2].name}}, a Force-sensitive creature, birthed in the year {{characters[2].birth_year}}, 
            Description include a {{characters[2].hair_color}} hair, with {{characters[2].eye_color}} eyes. {{characters[2].name}} is {{characters[2].skin_color}}...<span @click="characterDetail(characters[2])" class="button__inline-readmore">Read More</span></p>
        </div>
      </div>

      <div class="character">
        <img src="../assets/character-1.jpg" alt="" class="character__image">

        <div class="character__summary">
          <p class="character__name">{{characters[3].name}}</p>
          <p class="character__subtitle">Son of Anakin</p>
          <p class="character__detail">{{characters[3].name}}, a Force-sensitive creature, birthed in the year {{characters[3].birth_year}}, 
            Description include a {{characters[3].hair_color}} hair, with {{characters[3].eye_color}} eyes. {{characters[3].name}} is {{characters[3].skin_color}}...<span @click="characterDetail(characters[3])" class="button__inline-readmore">Read More</span></p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import API from '../api/index.js'
export default {
  name: 'character-container',
  data: function () {
    return {
      characters: ''
    }
  },
  methods: {
    async listCharacter () {
      try {
        const response = await API.listCharacter()
        this.characters = response.data.results
      } catch (error) {
        console.log(error)
      }
    },
    characterDetail: function (param) {
      this.$router.push({name: 'character-details', params: param})
    }
  },
  created () {
    this.listCharacter()
  }
  
}
</script>
