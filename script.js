// JavaScript to toggle the navbar on smaller screens
document.getElementById('navbarToggle').addEventListener('click', function () {
    var nav = document.querySelector('nav');
    nav.classList.toggle('active');
});

//Readmore section
function toggleReadMore(event) {
    event.preventDefault();
    const hiddenText = document.querySelector('.hidden-text');
    const readMoreLink = event.target;

    if (hiddenText.style.display === 'none') {
        hiddenText.style.display = 'inline';
        readMoreLink.textContent = 'Read Less';
    } else {
        hiddenText.style.display = 'none';
        readMoreLink.textContent = 'Read More';
    }
}

// Function to toggle the visibility of the chat window
function toggleChat() {
    const chatbotContainer = document.getElementById('chatbot-container');

    // Check if the chatbot window is hidden and toggle visibility
    if (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') {
        chatbotContainer.style.display = 'flex'; // Show the chat window
        appendBotMessage("Hello! I'm Dimaky, your virtual assistant."); // Initial greeting
    } else {
        chatbotContainer.style.display = 'none'; // Hide the chat window
    }
}

// Function to send a message
function sendMessage() {
    const userInput = document.getElementById('user-input').value;

    // Prevent sending empty messages
    if (userInput.trim() === '') return;

    // Append user message
    appendUserMessage(userInput);

    // Clear the input field after sending
    document.getElementById('user-input').value = '';

    // Check if user input is a greeting
    if (isGreeting(userInput.toLowerCase())) {
        const greetingResponse = "Hello! I'm here to assist you. What would you like to know?";
        appendBotMessage(greetingResponse);
        
        // Display options after greeting
        setTimeout(() => {
            displayOptions([
                { text: "Tell me about yourself", value: "about you" },
                { text: "What skills do you have?", value: "skills" },
                { text: "What projects have you worked on?", value: "projects" },
                { text: "How can I contact you?", value: "contact" },
                { text: "Do you offer collaboration?", value: "services" },
                { text: "Provide feedback about the portfolio", value: "feedback" },
            ]);
        }, 500); // Short delay before showing options
    } else {
        // Provide a default response if not a greeting
        appendBotMessage("Sorry, I don't understand that. Please ask something else.");
    }
}

// Function to check if the input is a greeting
function isGreeting(input) {
    const greetings = ["hi", "hello", "hey", "greetings", "good morning", "good afternoon", "good evening"];
    return greetings.some(greeting => input.includes(greeting));
}

// Function to display options below the chat messages
function displayOptions(options) {
    const optionsContainer = document.getElementById('chatbot-options');
    optionsContainer.innerHTML = ''; // Clear previous options

    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.onclick = () => {
            appendUserMessage(option.value);
            const botReply = getBotResponse(option.value.toLowerCase());
            appendBotMessage(botReply.text);
            displayOptions(botReply.options);
        };
        optionsContainer.appendChild(button);
    });
}

// Function to append user message to the chat
function appendUserMessage(message) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = `You: ${message}`;
    messageElement.classList.add('user-message');
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
}

// Function to append bot message to the chat
function appendBotMessage(message) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = `Bot: ${message}`;
    messageElement.classList.add('bot-message');
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
}

// Function to get a bot response based on user input
function getBotResponse(input) {
    if (input.includes("about you") || input.includes("tell me about yourself")) {
        return { text: "I'm Madiba Desree, graduated with a national diploma in information technology at Tshwane university of thechnology. I'm an aspiring software developer passionate about technology and problem-solving.", options: [] };
    } else if (input.includes("skills") || input.includes("what do you know")) {
        return { text: "I have experience with HTML, CSS, JavaScript and C++. I’m also familiar with data visualization and analysis tools. I'm continuously learning and currently diving deeper into web development and artificial intelligence.", options: [] };
    } else if (input.includes("projects") || input.includes("what projects have you worked on")) {
        return { text: "Although I haven't completed any formal projects yet, I am currently working on building my portfolio by learning essential skills in web development and programming.", options: [] };  
    } else if (input.includes("services") || input.includes("collaboration")) {
        return { text: "I’m open to collaboration on projects related to software development, data analysis, and web development. Feel free to ask about my availability!", options: [] };
    } else if (input.includes("contact") || input.includes("how can I contact you")) {
        return { text: "You can connect with me via LinkedIn [https://www.linkedin.com/in/desree-madiba-3880b6272] or email me at [desreedimaky@gmail.com].", options: [] };
    } else if (input.includes("feedback") || input.includes("thoughts on my portfolio")) {
        return { text: "I would love to hear your thoughts on my portfolio. Reply with your feedback on my contact form", options: [] };
    } else {
        return { text: "Sorry, I don't understand that. Choose from the options provided?", options: [] };
    }
}
