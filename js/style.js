// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Bootstrap-style client-side validation
(() => {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    form.classList.add('was-validated');
  });
})();

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => observer.observe(el));
});

// Typing effect for hero text
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 80);
  }
});

// Add hover effects to skill items
document.addEventListener('DOMContentLoaded', () => {
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
});

// Portfolio card interactions
document.addEventListener('DOMContentLoaded', () => {
  const portfolioCards = document.querySelectorAll('.portfolio-card');
  portfolioCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-15px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});

// Form submission with animation
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Add loading state
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Sending...';
      submitBtn.disabled = true;
      
      // Simulate form submission
      setTimeout(() => {
        submitBtn.innerHTML = '<i class="bi bi-check-circle me-2"></i>Sent!';
        submitBtn.classList.remove('btn-primary');
        submitBtn.classList.add('btn-success');
        
        // Reset form after 3 seconds
        setTimeout(() => {
          form.reset();
          form.classList.remove('was-validated');
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          submitBtn.classList.remove('btn-success');
          submitBtn.classList.add('btn-primary');
        }, 3000);
      }, 2000);
    });
  }
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
  }
});

// Add active navigation highlighting
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});