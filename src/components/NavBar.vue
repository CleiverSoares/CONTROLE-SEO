<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="../assets/logo_alterdata_software/SVG/logo_alterdata_software-01.svg" width="312" height="28">
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">

        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/comandos">Documentação</router-link>
        <router-link class="navbar-item" to="/medicao">Medição</router-link>


        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Segmentos
          </a>

          <div class="navbar-dropdown">
            <router-link class="navbar-item" to="/varejo-Home">Varejo</router-link>

            <a class="navbar-item">
              Atacado
            </a>
            <a class="navbar-item">
              Indústria
            </a>
            <a class="navbar-item">
              Alimentação
            </a>
            <a class="navbar-item">
              Serviços
            </a>
            <router-link class="navbar-item" to="/Terceiro-Setor-Home">Terceiro Setor</router-link>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"

}
</script>

<style scoped></style>