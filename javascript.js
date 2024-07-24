document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const oneboxContainer = document.querySelector('.onebox-container');
    const oneboxList = document.getElementById('onebox-list');
    const editorContainer = document.querySelector('.editor-container');
    let darkMode = false;

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        showOneboxScreen();
    });
    function showOneboxScreen() {
        document.querySelector('.login-container').style.display = 'none';
        oneboxContainer.style.display = 'block';
        fetchOneboxList();
    }
    function fetchOneboxList() {
        const data = [
            { id: 1, title: 'Onebox Item 1', content: 'Lorem ipsum dolor sit amet.' },
            { id: 2, title: 'Onebox Item 2', content: 'Consectetur adipiscing elit.' },
            { id: 3, title: 'Onebox Item 3', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
        ];

        data.forEach(item => {
            renderOneboxItem(item);
        });
    }

    // Render onebox item
    function renderOneboxItem(item) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('onebox-item');
        itemDiv.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.content}</p>
            <button onclick="deleteOneboxItem(${item.id})">Delete</button>
            <button onclick="openReplyForm(${item.id})">Reply</button>
        `;
        oneboxList.appendChild(itemDiv);
    }

    function deleteOneboxItem(itemId) {
        
        document.getElementById(`onebox-item-${itemId}`).remove();
    }

    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'd') {

            deleteOneboxItem(); 
        } else if (event.key === 'r') {
            
            openReplyForm(); 
        }
    });

    // Function to open reply form
    function openReplyForm(itemId) {
        editorContainer.style.display = 'block';
        // Clear previous content if any
        editorContainer.innerHTML = '';
        // Implement your custom editor with buttons (Save, Variables, etc.)
        editorContainer.innerHTML = `
            <textarea id="reply-body" rows="5" placeholder="Enter your reply"></textarea><br>
            <button onclick="sendReply(${itemId})">Send Reply</button>
        `;
    }

    // Send reply
    function sendReply(itemId) {
        const replyBody = document.getElementById('reply-body').value;
        const replyData = {
            from: "email@example.com", 
            to: "recipient@example.com", 
            subject: "Reply Subject",
            body: `<html>${replyBody}</html>`
        };

      
        alert('Reply sent successfully.');
        editorContainer.style.display = 'none';
    }

    // Toggle light/dark mode
    const toggleModeButton = document.createElement('button');
    toggleModeButton.textContent = 'Toggle Dark Mode';
    document.body.appendChild(toggleModeButton);

    toggleModeButton.addEventListener('click', function() {
        darkMode = !darkMode;
        document.body.classList.toggle('dark-mode', darkMode);
    });

});




