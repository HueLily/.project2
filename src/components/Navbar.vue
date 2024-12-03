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
  
  <style>
  nav {
    background-color: red;
    padding: 1rem;
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
  