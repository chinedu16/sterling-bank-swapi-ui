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
            <p class="starship__name">Ghost</p>
            <p class="starship__description">The Ghost is a modified VCX-100 light freighter, manufactured by the Corelian Engineering Corporation.</p>

            <button class="starship__button" @click="details">Read More &nbsp; &rarr; </button>
          </div>
        </div>

        <div class="starship">
            <img src="../assets/starship-1.jpg" class="starship__image">
  
            <div class="starship__summary">
              <p class="starship__name">Ghost</p>
              <p class="starship__description">The Ghost is a modified VCX-100 light freighter, manufactured by the Corelian Engineering Corporation.</p>
  
              <button class="starship__button">Read More &nbsp; &rarr; </button>
            </div>
        </div>

        <div class="starship">
            <img src="../assets/starship-1.jpg" class="starship__image">
  
            <div class="starship__summary">
              <p class="starship__name">Ghost</p>
              <p class="starship__description">The Ghost is a modified VCX-100 light freighter, manufactured by the Corelian Engineering Corporation.</p>
  
              <button class="starship__button">Read More &nbsp; &rarr; </button>
            </div>
        </div>

        <div class="starship">
          <img src="../assets/starship-1.jpg" class="starship__image">

          <div class="starship__summary">
            <p class="starship__name">Ghost</p>
            <p class="starship__description">The Ghost is a modified VCX-100 light freighter, manufactured by the Corelian Engineering Corporation.</p>

            <button class="starship__button">Read More &nbsp; &rarr; </button>
          </div>
        </div>

        <div class="starship">
            <img src="../assets/starship-1.jpg" class="starship__image">
  
            <div class="starship__summary">
              <p class="starship__name">Ghost</p>
              <p class="starship__description">The Ghost is a modified VCX-100 light freighter, manufactured by the Corelian Engineering Corporation.</p>
  
              <button class="starship__button">Read More &nbsp; &rarr; </button>
            </div>
        </div>

        <div class="starship">
            <img src="../assets/starship-1.jpg" class="starship__image">
  
            <div class="starship__summary">
              <p class="starship__name">Ghost</p>
              <p class="starship__description">The Ghost is a modified VCX-100 light freighter, manufactured by the Corelian Engineering Corporation.</p>
  
              <button class="starship__button">Read More &nbsp; &rarr; </button>
            </div>
        </div>

        <div class="starship">
            <img src="../assets/starship-1.jpg" class="starship__image">
  
            <div class="starship__summary">
              <p class="starship__name">Ghost</p>
              <p class="starship__description">The Ghost is a modified VCX-100 light freighter, manufactured by the Corelian Engineering Corporation.</p>
  
              <button class="starship__button">Read More &nbsp; &rarr; </button>
            </div>
        </div>

        <div class="starship">
            <img src="../assets/starship-1.jpg" class="starship__image">
  
            <div class="starship__summary">
              <p class="starship__name">Ghost</p>
              <p class="starship__description">The Ghost is a modified VCX-100 light freighter, manufactured by the Corelian Engineering Corporation.</p>
  
              <button class="starship__button">Read More &nbsp; &rarr; </button>
            </div>
        </div>

        <div class="starship">
            <img src="../assets/starship-1.jpg" class="starship__image">
  
            <div class="starship__summary">
              <p class="starship__name">Ghost</p>
              <p class="starship__description">The Ghost is a modified VCX-100 light freighter, manufactured by the Corelian Engineering Corporation.</p>
  
              <button class="starship__button">Read More &nbsp; &rarr; </button>
            </div>
        </div>

        <div class="starship">
            <img src="../assets/starship-1.jpg" class="starship__image">
  
            <div class="starship__summary">
              <p class="starship__name">Ghost</p>
              <p class="starship__description">The Ghost is a modified VCX-100 light freighter, manufactured by the Corelian Engineering Corporation.</p>
  
              <button class="starship__button">Read More &nbsp; &rarr; </button>
            </div>
        </div>

        <div class="starship">
            <img src="../assets/starship-1.jpg" class="starship__image">
  
            <div class="starship__summary">
              <p class="starship__name">Ghost</p>
              <p class="starship__description">The Ghost is a modified VCX-100 light freighter, manufactured by the Corelian Engineering Corporation.</p>
  
              <button class="starship__button">Read More &nbsp; &rarr; </button>
            </div>
        </div>

        <div class="starship">
            <img src="../assets/starship-1.jpg" class="starship__image">
  
            <div class="starship__summary">
              <p class="starship__name">Ghost</p>
              <p class="starship__description">The Ghost is a modified VCX-100 light freighter, manufactured by the Corelian Engineering Corporation.</p>
  
              <button class="starship__button">Read More &nbsp; &rarr; </button>
            </div>
        </div>
      </div>

      <div class="button__view-more">
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

export default {
  name: 'Starship',
  data: function () {
    return {
    }
  },
  components: {
    Header
  },
  methods: {
    details: function () {
      this.$router.push({path: 'starship-details'})
    }
  }
  
}
</script>
