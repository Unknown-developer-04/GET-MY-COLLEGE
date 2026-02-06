document.addEventListener('DOMContentLoaded', () => {
    
    // Form Submission Handling
    const form = document.getElementById('leadForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simple validation visualization
        const inputs = form.querySelectorAll('input, select');
        let isValid = true;
        
        inputs.forEach(input => {
            if(input.value.trim() === '' || input.value === 'Select Course') {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ccc';
            }
        });

        if(isValid) {
            // Simulate form submission
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Sending...';
            btn.style.backgroundColor = '#16a34a'; // Green color
            
            setTimeout(() => {
                alert('Success! Our counselor will call you shortly.');
                form.reset();
                btn.innerText = originalText;
                btn.style.backgroundColor = ''; // Reset color
            }, 1500);
        }
    });

    // Optional: Add scroll animation for other elements if needed
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
});
