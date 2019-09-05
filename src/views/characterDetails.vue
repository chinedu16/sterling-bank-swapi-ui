<template>
  <div class="starship-1">
    <header class="header">
      <img class="header__logo small-logo" src="../assets/logo.png" @click="home" alt="">
      <img src="../assets/character-2.jpg" alt="" class="header__bg">

      <div class="header__content">
        <div class="header__content-starship">
          <div class="header__starship-name">
            {{details.name}}
          </div>

          <div class="header__pagination">
            <ul class="header__pagination-controls">
              <li class="header__pagination-arrow"><</li>
              <li class="header__pagination-arrow">></li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <main class="main">
      <div class="starship__main-detail">
        <h2 class="starship__main-name">{{details.name}}</h2>

        <p class="starship__main-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, sapiente culpa possimus consectetur maxime veniam dolorem et itaque laboriosam rem fuga voluptatem temporibus sed, mollitia aliquid. Officia ipsa minima velit.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate quae, repellendus neque nam porro aliquid tempore, quis, debitis a ullam sapiente cumque facilis eveniet. Quos nihil minima quae iusto autem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odio magni nostrum quo cupiditate ipsum doloribus doloremque nesciunt ratione impedit omnis non minima excepturi ducimus sint, consequatur atque itaque est?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, saepe necessitatibus nemo quas rerum libero recusandae inventore, eos repellat quos maxime repudiandae. Fuga repellat labore deleniti nesciunt nihil incidunt sequi! 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, repellat possimus? Voluptate nostrum sunt ullam atque assumenda quas velit quo in ab quae explicabo nulla, vel reprehenderit cumque modi dolorem!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores debitis natus, dolore quod necessitatibus voluptas at eum sit reiciendis quam fuga obcaecati ab! Exercitationem delectus eveniet inventore dolorum, esse harum.
        </p>
      </div>


      <div class="main__secondary-title">
        Recently Viewed Characters
      </div>

      <hr class="divider" />

      <div class="starships-container">
        <div class="starship">
          <img src="../assets/character-1.jpg" class="starship__image">

          <div class="starship__summary">
            <p class="starship__name">Chinedu Ohagwu</p>
            <p class="starship__description">The Ghost is a modified VCX-100 light freighter, manufactured by the Corelian Engineering Corporation.</p>
            <button class="starship__button">Read More &nbsp; &rarr; </button>
          </div>
        </div>

        <div class="starship">
            <img src="../assets/character-2.jpg" class="starship__image">
            <div class="starship__summary">
              <p class="starship__name">{{details.name}}</p>
              <p class="starship__description">The Ghost is a modified VCX-100 light freighter, manufactured by the Corelian Engineering Corporation.</p>
              <button class="starship__button">Read More &nbsp; &rarr; </button>
            </div>
        </div>

        <div class="starship">
            <img src="../assets/character-3.jpg" class="starship__image">
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
      this.$router.push({name: 'character'})
    }
  }
}
</script>
