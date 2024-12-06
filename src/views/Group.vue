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

            <div class="post-feed">
                <div v-for="(post, index) in posts" :key="index" class="post">
                    <h3 class="post-author">{{ post.author }}</h3>
                    <p class="post-content">{{ post.content }}</p>
                    <p class="post-timestamp">{{ post.timestamp }}</p>
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
            },
            posts: [
                {
                    author: "Teddy Bear",
                    content: "Check out this hilarious meme!",
                    timestamp: "2024-12-03T14:00:00Z"
                },
                {
                    author: "Bunny Plush",
                    content: "Brain rot incoming: Why do we park on driveways and drive on parkways?",
                    timestamp: "2024-12-03T12:00:00Z"
                },
                {
                    author: "Robo Stuffie",
                    content: "Here's your daily dose of cursed images. Enjoy!",
                    timestamp: "2024-12-03T10:00:00Z"
                },
                {
                    author: "Kitty Pillow",
                    content: "If I fits, I sits. 🐱",
                    timestamp: "2024-12-03T08:00:00Z"
                },
                {
                    author: "Unicorn Puff",
                    content: "When life gives you lemons... make memes!",
                    timestamp: "2024-12-03T06:00:00Z"
                },
                {
                    author: "Builder Bear",
                    content: "Who else can't stop laughing at this?",
                    timestamp: "2024-12-02T14:00:00Z"
                },
                {
                    author: "Tiger Buddy",
                    content: "What if cats are just tiny tigers in disguise?",
                    timestamp: "2024-12-02T10:00:00Z"
                },
                {
                    author: "Puppy Doge",
                    content: "Wow. So group. Much fun. Very brain rot.",
                    timestamp: "2024-12-01T12:00:00Z"
                },
                {
                    author: "Code Panda",
                    content: "If code compiles without errors, is it really code?",
                    timestamp: "2024-12-01T08:00:00Z"
                },
                {
                    author: "Meme Moose",
                    content: "Me: ‘I should sleep.’ Also me: ‘One more meme.’",
                    timestamp: "2024-11-30T14:00:00Z"
                }

            ]

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
    position: relative;
    gap: 2rem;
}

/* header - including banner image, name, group status, and description*/

.group-header {
    width: 100%;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

.about-header {
    margin-bottom: 1rem;
}

.about-status h3 {
    margin-top: 20px;
}

/* ______________________ */

/* Post */
.post {
    padding: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    background-color: white;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
}

.post:hover {
    transform: scale(1.02);
}

.post-author {
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #333;
}

.post-content {
    margin-bottom: 0.5rem;
    color: #555;
    line-height: 1.5;
}

.post-timestamp {
    font-size: 0.9rem;
    color: #878d92;
    text-align: right;
}

</style>