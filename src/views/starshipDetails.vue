
<template>
  <div class="starship-1">
    <header class="header">
      <img class="header__logo small-logo" src="../assets/logo.png" @click="home" alt="">
      <img src="../assets/starship-2.jpg" alt="" class="header__bg">

      <div class="header__content">
        <div class="header__content-starship">
          <div class="header__starship-name">
            {{details.name}}
          </div>

          <div class="header__pagination">
            <ul class="header__pagination-controls">
              <li class="header__pagination-arrow"><i class="fas fa-chevron-left"></i></li>
              <li class="header__pagination-arrow"><i class="fas fa-chevron-right"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <main class="main">
      <div class="starship__main-detail">
        <h2 class="starship__main-name">{{details.name}}</h2>

        <p class="starship__main-description">
          The {{details.name}} is a {{details.model}}, manufactured by the {{details.manufacturer}}.

          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate quae, repellendus neque nam porro aliquid tempore, quis, debitis a ullam sapiente cumque facilis eveniet. Quos nihil minima quae iusto autem.

          its MGLT is {{details.MGLT}} while carrying a consumable of about {{details.consumable}}. The {{details.starship_class}} is rumored to have about {{details.passengers}} passengers on its {{details.hyperdrive_rating}} hyperdrive rating

          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, saepe necessitatibus nemo quas rerum libero recusandae inventore, eos repellat quos maxime repudiandae.

         As for the Architecture is has a lenght of {{details.length}} carrying {{details.crew}} crem members on board with an outstanding cargo carrying capacity of  {{details.cargo_capacity}}
        </p>
      </div>


      <div class="main__secondary-title">
        Recently Viewed Starships
      </div>

      <hr class="divider" />

      <div class="starships-container">
        <div class="starship">
          <img src="../assets/starship-1.jpg" class="starship__image">

          <div class="starship__summary">
            <p class="starship__name">Ghost</p>
            <p class="starship__description">The Ghost is a modified VCX-100 light freighter, manufactured by the Corelian Engineering Corporation.</p>

            <button class="starship__button">Read More &nbsp; &rarr; </button>
          </div>
        </div>

        <div class="starship">
            <img src="../assets/starship-2.jpg" class="starship__image">
  
            <div class="starship__summary">
              <p class="starship__name">Ghost</p>
              <p class="starship__description">The Ghost is a modified VCX-100 light freighter, manufactured by the Corelian Engineering Corporation.</p>
  
              <button class="starship__button">Read More &nbsp; &rarr; </button>
            </div>
        </div>

        <div class="starship">
            <img src="../assets/starship-3.jpg" class="starship__image">
  
            <div class="starship__summary">
              <p class="starship__name">Ghost</p>
              <p class="starship__description">The Ghost is a modified VCX-100 light freighter, manufactured by the Corelian Engineering Corporation.</p>
  
              <button class="starship__button">Read More &nbsp; &rarr; </button>
            </div>
        </div>
      </div>
    </main>

    <footer class="footer">
      &nbsp;
    </footer>
  </div>
</template>

<script>

export default {
  name: 'starshipDetails',
  data: function () {
    return {
      details: ''
    }
  },
  methods: {
     home: function () {
      this.$router.push('/')
    }
  },
  created () {
    this.details = this.$route.params
    if (!this.$route.params.created) {
      this.$router.push({name: 'starship'})
    }
  }
  
}
</script>
