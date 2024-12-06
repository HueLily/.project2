<template>
    <footer class="footer">
        <div class="footer-links">
            <a href="/contact-us">Contact Us</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
        </div>
       
        <div class="social-media">
            <a href="https://facebook.com" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="24">
            </a>
            <a href="https://twitter.com" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" width="24">
            </a>
            <a href="https://instagram.com" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" width="24">
            </a>
        </div>

        <p>&copy; 2024 HobbyBuddy. All rights reserved.</p>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped>
.footer {
    background-color: #f0f4f8;
    color: #2c3e50;
    text-align: center;
    padding: 20px 0;
    font-family: Arial, sans-serif;
}

.footer-links a {
    color: #0077b6;
    margin: 0 15px;
    text-decoration: none;
    font-weight: bold;
}

.footer-links a:hover {
    text-decoration: underline;
}

.social-media img {
    margin: 0 10px;
    transition: transform 0.3s ease;
}

.social-media img:hover {
    transform: scale(1.1);
}

p {
    font-size: 14px;
    color: #6c757d;
}
</style>