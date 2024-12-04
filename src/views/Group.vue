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
                about: " this is a group where we talking no judging meow",
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
}

.group-content {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid red;
    height: 2000px;
}

/* header - including banner image, name, group status, and description*/

.group-header{
    width: 90%;
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
    border-bottom: 2px solid #878d92;
    width: 100%;
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
</style>