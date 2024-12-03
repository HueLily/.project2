<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/explore">Explore</router-link></li>
      <li><router-link to="/group">Group</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
nav {
  position: fixed;
  width: 100%;
  background-color: #2c455f;
  padding: 1rem;
  top: 0;
  right: 0;
  height: var(--navbar-height);
  z-index: 1000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
}

ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

li {
  display: inline;
}

a {
  text-decoration: none;
  color: #007bff;
}

a.router-link-active {
  font-weight: bold;
}
</style>