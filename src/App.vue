
<template>
  <div class="main-container">
    <NavBar />
    <RouterView />
    <!-- <Footer /> -->
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue';
import Cadastros from './components/Cadastrar-informacao-sites.vue';

// import NavBar from '../src/components/Nav-Bar.vue'
// import Footer from '../src/components/Footer.vue'

export default {
  name: 'App',
  components: { NavBar, Cadastros }
}
</script>
<style>
.main-container {
  color: var(--c-default);
  flex: 1;
  min-height: 100vh;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
}
</style>
