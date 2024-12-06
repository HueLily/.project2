<template>
    <div class="post">
        <h3 class="post-author">{{ author }}</h3>
        <p class="post-content">{{ content }}</p>
        <p class="post-timestamp">{{ timeAgo }}</p>
        <div class="post-actions">
            <button class="heart-button" @click="toggleHeartStatus">
                <font-awesome-icon 
                    :icon=" isHearted? ['fas', 'heart'] : ['far', 'heart']" 
                    :class=" isHearted? 'hearted-true' : 'hearted-false'"/>
            </button>
            <!-- <button class="comment-button">
                <i class="fas fa-comment"></i> Comment
            </button> -->
            <button class="share-button">
                <font-awesome-icon :icon="['fas', 'share']" />
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Post',
    props: {
        author: String,
        content: String,
        timestamp: Date
    },
    computed: {
        timeAgo() {
            const now = new Date();
            const postDate = new Date(this.timestamp);
            const diff = (now - postDate) / 1000; // Difference in seconds

            if (diff < 60) {
                return `${Math.floor(diff)} seconds ago`;
            } else if (diff < 3600) {
                return `${Math.floor(diff / 60)} minutes ago`;
            } else if (diff < 86400) {
                return `${Math.floor(diff / 3600)} hours ago`;
            } else if (diff < 604800) {
                return `${Math.floor(diff / 86400)} days ago`;
            } else {
                return postDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                });
            }
        }
    },
    data() {
        return {
            isHearted: false,
        };
    },
    methods: {
        toggleHeartStatus() {
            this.isHearted = !this.isHearted;
        }
    }
};
</script>

<style scoped>
.post {
    padding: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    background-color: white;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
    position: relative;
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
    position: absolute;
    top: 1rem;
    right: 1rem;
}

.post-actions {
    display: flex;
    gap: 1rem;
}

button {
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    color: #3b5998;
    transition: color 0.2s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

button:hover {
    color: #1d3a75;
}

.hearted-true {
    color: #f44336;
    animation: heartBeat 0.3s ease-in-out;
}

.hearted-false {
    animation: heartBeatReverse 0.3s ease-in-out;
}

@keyframes heartBeat {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.3);
    }
}

@keyframes heartBeatReverse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.7);
    }
}
</style>