document.addEventListener('DOMContentLoaded', function() {
    const contractAddress = document.getElementById('contractAddress');
    const toast = document.getElementById('copyToast');

    contractAddress.addEventListener('click', function() {
        const addressText = this.querySelector('span').textContent;
        navigator.clipboard.writeText(addressText).then(() => {
            // Show toast notification
            toast.classList.add('show');
            
            // Hide toast after 2 seconds
            setTimeout(() => {
                toast.classList.remove('show');
            }, 2000);
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
});