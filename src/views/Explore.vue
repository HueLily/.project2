<template>
    <div class="explore">
        <div v-for="(category, index) in exploreData" :key="index" class="category-content">
            <h2 class="category-name">{{ index }}</h2>
            <div class="category-grid">
                <div v-for="(group, groupIndex) in category" :key="groupIndex" class="group-card">
                    <img :src="group.image" alt="Group Image" class="group-image" />
                    <h3 class="group-name">{{ group.name }}</h3>
                    <p class="group-about">{{ group.about }}</p>
                    <p class="group-member"><strong>Members:</strong> {{ group.members }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import exploreData from '../fakeData/explore.js';

export default {
    name: 'Explore',
    data() {
        return {
            exploreData: exploreData
        }
    }
};
</script>

<style scoped>
.explore {
    position: relative;
    width: 100%;
    background-color: aliceblue;
}

.category-content {
    text-align: center;
}

.category-name {
    background-color: white;
    font-size: 40px;
    margin: 30px 0 ;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, 400px);
    gap: 40px;
    padding: 50px;
}

.group-card {
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
}

.group-card:hover {
    transform: scale(1.02);
}

.group-card img {
    width: 90%;
    border-radius: 10px;
}

.group-name {
    margin: 10px 0;
    color: red;
}

.group-about {
    margin: 10px 50px;
    text-align: center;
}

.group-member {
    margin-top: 10px 0;
}
</style>