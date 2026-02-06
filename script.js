document.addEventListener('DOMContentLoaded', () => {
    
    // Form Submission Handling
    const form = document.getElementById('leadForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validation Logic
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
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Sending...';
            btn.style.backgroundColor = '#16a34a'; // Green Success
            
            setTimeout(() => {
                alert('Success! We will contact you soon.');
                form.reset();
                btn.innerText = originalText;
                btn.style.backgroundColor = ''; // Reset
            }, 1500);
        }
    });

    // Scroll Animation Trigger (Fade In)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });
});
