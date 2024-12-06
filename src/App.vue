<template>
  <Navbar />
  <div class="all-page-content">
    <router-view/>
  </div>
  <!-- <Footer /> -->
</template>

<script >
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
:root {
  --navbar-height: 60px;
}

.all-page-content{
  padding-top: var(--navbar-height);
  width: 100%;
}
</style>
