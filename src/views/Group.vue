<template>
    <div class="group-page">
        <div class="group-content">
            <div class="group-header">
                <img class="banner" src="../assets/banner-placeholder.png" alt="Group banner">
                <div class="header-content">
                    <div class="header-text">
                        <h1 class="group-name">{{ groupData.name }}</h1>
                        <div class="group-status"> 
                            <font-awesome-icon :icon="['fas', 'earth-americas']" />
                            {{ groupData.visibility }} group - {{ groupData.members }}
                        </div>
                    </div>
                    <button class="join-button" @click="toggleJoinStatus">
                        <font-awesome-icon :icon="['fas', userJoined ? 'user-minus' : 'user-plus']" class="join-icon" />
                        <p>{{ userJoined ? "Leave Group" : "Join Group" }}</p>
                    </button>
                </div>
            </div>

            <div class="group-about">
                <h2 class="about-header"> About </h2>
                <p>{{ groupData.about }}</p>
                <div class="about-status">
                    <h3>
                        <font-awesome-icon :icon="['far', 'address-card']" />
                        {{ groupData.visibility }}
                    </h3>
                    <p>Anyone can see who's in the group and what they post.</p>
                    <h3>
                        <font-awesome-icon :icon="['fas', 'eye']" />
                        Visible
                    </h3>
                    <p> Anyone can find this group.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Group',
    data() {
        return {
            userJoined: false,
            groupData: {
                name: "Group where I can post meme without judegement",
                members: "250 members",
                about: "So like, this is the group where memes happen and brains... you know, like, they melt or something?? Idk, we're all just vibing here with frogs in hats and spaghetti logic. Anyway, join or whatever, but don’t ask why the toaster is yelling. Cats? Yes. Sanity? No. Also, meow or moo, your choice, but the lasagna isn’t free.",
                visibility: "Public"
            }
        }
    },
    methods: {
        toggleJoinStatus() {
            if (!this.userJoined) {
                console.log("joining...");
            } else {
                console.log("leaving...")
            }
            this.userJoined = !this.userJoined;
        }
    }
};
</script>

<style scoped>
.group-page {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: aliceblue;
}

.group-content {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 2000px;
    position: relative;
    gap: 2rem;
}

/* header - including banner image, name, group status, and description*/

.group-header{
    width: 100%;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.banner {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 10px;
}

.header-content {
    display: flex;
    flex-direction: row;
    padding-bottom: 30px;
    /* border-bottom: 2px solid #878d92; */
    width: 100%;
    padding: 2rem;
}

.group-name {
    text-transform: uppercase;
    margin: 10px 10% 0 0;
}

.group-status {
    color: #878d92;
}

.join-button {
    display: flex;
    flex-direction: row;
    align-self: end;
    justify-content: center;
    gap: 5px;
    padding: 0.7rem;
    border-radius: 7px;
    background-color: #316ff6;
    color: white;
    outline: none;
    border: none;
    transition: transform 0.3s ease-in-out;
    height: fit-content;
    margin-top: 20px;
    min-width: 150px;
}

.join-button:hover {
    cursor: pointer;
    transform: scale(1.05);
}

/* ______________________ */

/* Group about (description) */
.group-about {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* margin: 2rem 0; */
    padding: 2rem;
    background-color: white;
    border-radius: 10px;
}

.about-header {
    margin-bottom: 1rem;
}

.about-status h3{
    margin-top: 20px;
}
</style>