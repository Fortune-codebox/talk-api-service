<template>
    <div>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand href="#"> 
      <!-- <img src="../../assets/internia.png" class="img_size" alt=""> -->
      <span class="nav-letter"></span> </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" class="centered" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Talks</b-nav-item>
        <b-nav-item href="#" disabled>Attendees</b-nav-item>
        <b-nav-item href="#" disabled>Statistics</b-nav-item>
        <b-nav-item href="#" disabled>Client</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#"> 
          <img src="../../assets/bell.png" style="width: 1.5em; padding-top: 0.6em;" alt=""> 
          </b-nav-item>
        <b-nav-item href="#"> 
          <img src="../../assets/message.png" style="width: 1.5em; padding-top: 0.6em;" alt=""> 
          </b-nav-item>
        <b-nav-item href="#"> 
          <img src="../../assets/profile.png" alt="">
           </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script src="./navbar.js">
</script>

<style lang="scss">
@import "./navbar"
</style>


