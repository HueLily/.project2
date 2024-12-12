<template>
    <div>
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
        <img class="banner" src="../assets/banner.png" alt="Group banner">
          <h1>Welcome to HobbyBuddy: Connect and Explore Shared Interests!</h1>
          <button @click="navigateToExplore" class="cta-button">Discover Hobbies</button>
        </div>
      </section>
  
      <!-- Introduction Section -->
      <section class="introduction">
        <div class="introduction-content">
          <h2>What is HobbyBuddy?</h2>
          <p>
            HobbyBuddy is your go-to platform for connecting with people who share your passions. 
            Whether you’re into photography, hiking, gaming, or cooking, we make it easy to find like-minded groups 
            and explore your hobbies together.
          </p>
          <p>
            Join a group, learn something new, or create your own community. The possibilities are endless!
          </p>
        </div>
      </section>
  
      <!-- Popular Groups Section -->
      <section class="popular-groups">
        <h2>Popular Groups</h2>
        <div class="groups-carousel">
          <div v-for="group in groups" :key="group.id" class="group-card">
            <img :src="group.image" :alt="group.name" class="group-image" />
            <h3>{{ group.name }}</h3>
            <p>{{ group.description }}</p>
            <button class="join-button">Join</button>
          </div>
        </div>
      </section>
      <!-- Upcoming Events Section -->
      <section class="upcoming-events">
      <h2>Upcoming Events</h2>
      <div class="carousel">
        <button class="carousel-control prev" @click="prevEvent">❮</button>
        <div class="carousel-items">
          <div v-for="(event, index) in visibleEvents" :key="event.id" class="event-card">
            <img :src="event.image" :alt="event.title" class="event-image" />
            <div class="event-details">
              <h3>{{ event.title }}</h3>
              <p><strong>Date:</strong> {{ event.date }}</p>
              <p><strong>Location:</strong> {{ event.location }}</p>
              <button class="details-button">View Details</button>
            </div>
          </div>
        </div>
        <button class="carousel-control next" @click="nextEvent">❯</button>
      </div>
    </section>

</div>

</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      groups: [
        {
          id: 1,
          name: "Photography Enthusiasts",
          description: "Share tips and tricks!",
          image: "https://cdn.contrastly.com/wp-content/uploads/photomarathon-1.jpg",
        },
        {
          id: 2,
          name: "Gamers Unite",
          description: "Find teammates for your favorite games.",
          image: "https://fairwindsteaching.com/wp-content/uploads/2020/08/Untitled1-2.png",
        },
        {
          id: 3,
          name: "Cooking Lovers",
          description: "Exchange recipes and cooking hacks.",
          image: "https://www.micds.org/wp-content/uploads/2018/10/cook-club.jpg",
        },
        {
          id: 4,
          name: "Photography Enthusiasts",
          description: "Share tips and tricks!",
          image: "https://via.placeholder.com/300x200",
        },
      ],
    };
  },
  methods: {
    navigateToExplore() {
        this.$router.push("/explore");
    },
  },
};
</script>

<style scoped>
/* Hero Section */
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  text-align: center;
  color: white;
}
.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}
.cta-button {
  background-color: #0077b6;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
}
.cta-button:hover {
  background-color: #005f8a;
}

/* Introduction Section */
.introduction {
  padding: 50px 20px;
  background-color: #ffffff;
  color: #2c3e50;
  text-align: center;
}
.introduction-content {
  max-width: 800px;
  margin: 0 auto;
}
.introduction h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #0077b6;
}
.introduction p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 15px;
}

/* Popular Groups Section */
.popular-groups {
  padding: 50px 20px;
  background-color: #f0f4f8;
  text-align: center;
}
.groups-carousel {
    display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 20px;
}
.group-card {
  flex: 0 0 300px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  text-align: left;
}
.group-card img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 15px;
}

.group-card h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}
.join-button {
  background-color: #0077b6;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}
.join-button:hover {
  background-color: #005f8a;
}

/* Carousel */
.carousel {
  position: relative;
  display: flex;
  align-items: center;
}
.carousel-items {
  display: flex;
  gap: 20px;
  overflow: hidden;
  padding: 10px;
}
.carousel-control {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}
.group-card, .event-card {
  flex: 0 0 300px;
  text-align: center;
}
.event-details {
  padding: 15px;
}

</style>