// Contact Form Handler
class ContactFormHandler {
    constructor() {
        this.messagesFile = 'contact-messages.json';
        this.form = document.getElementById('contact-form');
        this.initializeForm();
    }

    initializeForm() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(this.form);
        const messageData = {
            name: formData.get('name') || this.form.querySelector('#name').value,
            email: formData.get('email') || this.form.querySelector('#email').value,
            subject: formData.get('subject') || this.form.querySelector('#subject').value,
            message: formData.get('message') || this.form.querySelector('#message').value
        };

        try {
            await this.saveMessage(messageData);
            this.showSuccessMessage();
            this.form.reset();
        } catch (error) {
            console.error('Error saving message:', error);
            this.showErrorMessage();
        }
    }

    async saveMessage(messageData) {
        try {
            // Read existing messages
            const response = await fetch(this.messagesFile);
            const data = await response.json();
            
            // Create new message object
            const newMessage = {
                id: data.totalMessages + 1,
                name: messageData.name,
                email: messageData.email,
                subject: messageData.subject,
                message: messageData.message,
                timestamp: new Date().toISOString(),
                status: 'unread'
            };

            // Add new message to array
            data.messages.push(newMessage);
            data.totalMessages = data.messages.length;
            data.unreadCount = data.messages.filter(msg => msg.status === 'unread').length;
            data.lastUpdated = new Date().toISOString();

            // Save updated data
            await this.writeToFile(data);
            
            return newMessage;
        } catch (error) {
            console.error('Error reading/writing file:', error);
            throw error;
        }
    }

    async writeToFile(data) {
        // Save to localStorage for demo purposes
        // In a real application, you would send this to a server
        try {
            localStorage.setItem('contactMessages', JSON.stringify(data));
            console.log('Message saved to localStorage:', data);
            
            // Also log to console for demonstration
            console.log('=== NEW MESSAGE ===');
            console.log('Name:', data.messages[data.messages.length - 1].name);
            console.log('Email:', data.messages[data.messages.length - 1].email);
            console.log('Subject:', data.messages[data.messages.length - 1].subject);
            console.log('Message:', data.messages[data.messages.length - 1].message);
            console.log('Timestamp:', data.messages[data.messages.length - 1].timestamp);
            console.log('==================');
            
            return true;
        } catch (error) {
            console.error('Error saving to localStorage:', error);
            return false;
        }
    }

    showSuccessMessage() {
        // Create success notification
        const notification = document.createElement('div');
        notification.className = 'notification success';
        notification.innerHTML = `
            <div class="notification-content">
                <svg class="notification-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div class="notification-text">
                    <h4>Message Sent Successfully!</h4>
                    <p>Thank you for contacting us. We'll get back to you soon.</p>
                </div>
            </div>
        `;
        
        this.showNotification(notification);
    }

    showErrorMessage() {
        // Create error notification
        const notification = document.createElement('div');
        notification.className = 'notification error';
        notification.innerHTML = `
            <div class="notification-content">
                <svg class="notification-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div class="notification-text">
                    <h4>Error Sending Message</h4>
                    <p>Please try again later or contact us directly.</p>
                </div>
            </div>
        `;
        
        this.showNotification(notification);
    }

    showNotification(notification) {
        // Add notification to page
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        // Remove notification after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }

    // Method to get all messages (for debugging)
    async getAllMessages() {
        try {
            // First try to get from localStorage
            const localData = localStorage.getItem('contactMessages');
            if (localData) {
                return JSON.parse(localData);
            }
            
            // If no localStorage data, try to fetch from JSON file
            const response = await fetch(this.messagesFile);
            if (response.ok) {
                return await response.json();
            }
            
            // Return empty data if both fail
            return { messages: [], totalMessages: 0, unreadCount: 0 };
        } catch (error) {
            console.error('Error reading messages:', error);
            return { messages: [], totalMessages: 0, unreadCount: 0 };
        }
    }
}

// Initialize contact form handler when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ContactFormHandler();
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ContactFormHandler;
}
