// script.js
document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    const chatBox = document.getElementById('chatBox');

    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText !== '') {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', 'user-message'); // Assume current user sends
            messageElement.textContent = messageText;
            chatBox.appendChild(messageElement);
            messageInput.value = '';
            chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to bottom
        }
    }
});