// Smooth scrolling when clicking on navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const sectionId = this.getAttribute('href');
      const section = document.querySelector(sectionId);
  
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: section.offsetTop - 50 // Adjust scroll position to account for the fixed header
      });
    });
  });
  
  // Contact form validation
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const errorElement = document.getElementById('error');
  
    // Simple validation checks (you can add more complex checks if needed)
    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
      errorElement.textContent = 'All fields are required.';
      return;
    }
  
    // Code to handle the form submission goes here (e.g., sending data to a server)
    // For this example, we'll just clear the form fields and show a success message.
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
    errorElement.textContent = '';
    alert('Thank you for your message! We will get back to you soon.');
  });
  