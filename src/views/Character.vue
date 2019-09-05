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
        <div class="character">
          <img src="../assets/character-1.jpg" alt="" class="character__image">

          <div class="character__summary">
            <p class="character__name">Luke Skywalker</p>
            <p class="character__subtitle">Son of Anakin</p>
            <p class="character__detail">Anakin Skywalker, a Force-sensitive human male, was a legendary Jedi master who fought in the Galactic Civil War during the reign of the Galactic empire...<span class="button__inline-readmore" @click="details">Read More</span></p>
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
          <img src="../assets/character-3.jpg" alt="" class="character__image">

          <div class="character__summary">
            <p class="character__name">Luke Skywalker</p>
            <p class="character__subtitle">Son of Anakin</p>
            <p class="character__detail">Anakin Skywalker, a Force-sensitive human male, was a legendary Jedi master who fought in the Galactic Civil War during the reign of the Galactic empire...<span class="button__inline-readmore">Read More</span></p>
          </div>
        </div>

        <div class="character">
          <img src="../assets/character-3.jpg" alt="" class="character__image">

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
          <img src="../assets/character-2.jpg" alt="" class="character__image">

          <div class="character__summary">
            <p class="character__name">Luke Skywalker</p>
            <p class="character__subtitle">Son of Anakin</p>
            <p class="character__detail">Anakin Skywalker, a Force-sensitive human male, was a legendary Jedi master who fought in the Galactic Civil War during the reign of the Galactic empire...<span class="button__inline-readmore">Read More</span></p>
          </div>
        </div>

        <div class="character">
          <img src="../assets/character-2.jpg" alt="" class="character__image">

          <div class="character__summary">
            <p class="character__name">Luke Skywalker</p>
            <p class="character__subtitle">Son of Anakin</p>
            <p class="character__detail">Anakin Skywalker, a Force-sensitive human male, was a legendary Jedi master who fought in the Galactic Civil War during the reign of the Galactic empire...<span class="button__inline-readmore">Read More</span></p>
          </div>
        </div>
      </div>

      <div class="pagination">
        <div class="pagination__text">
          1-10 of 50
        </div>

        <ul class="pagination__controls">
          <li class="pagination__arrow"></li>
          <li class="pagination__arrow"></li>
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

export default {
  name: 'About',
  data: function () {
    return {
    }
  },
  components: {
    Header
  },
  methods: {
    details:  function () {
    this.$router.push({path: '/character-details'})
    }
  }
}
</script>
