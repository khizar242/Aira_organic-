// HTML Escaping Function to Prevent XSS Attacks & Hacking
function escapeHTML(str) {
    return String(str).replace(/[&<>"']/g, function (match) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        }[match];
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('newsletterPopup');
    const closeBtn = document.getElementById('closePopup');
    const subscribeForm = document.getElementById('subscribeForm');

    // Show popup after 4 seconds
    setTimeout(() => {
        popup.style.display = 'flex';
    }, 4000);

    // Close Popup
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });

    // Secure Form Handling
    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputEmail = subscribeForm.querySelector('input').value;
        const cleanEmail = escapeHTML(inputEmail);
        
        alert(`Thank you for subscribing with: ${cleanEmail}`);
        popup.style.display = 'none';
    });
});
