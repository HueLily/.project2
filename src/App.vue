<template>
  <Navbar />
  <div class="all-page-content">
    <router-view/>
  </div>
</template>

<script >
import Navbar from './components/Navbar.vue';
export default {
  name: 'App',
  components: {
    Navbar,
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
