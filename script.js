document.addEventListener("DOMContentLoaded", () => {
  console.log("Coffee Shop LP Loaded");

  // Mobile Menu
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const nav = document.querySelector(".nav");

  if (mobileMenuBtn && nav) {
    console.log("Mobile menu initialized");
    mobileMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent bubbling issues
      console.log("Menu button clicked");
      mobileMenuBtn.classList.toggle("active");
      nav.classList.toggle("active");
      document.body.classList.toggle("no-scroll");
    });
  } else {
    console.error("Mobile menu elements not found");
  }

  // Close menu when clicking a link
  document.querySelectorAll(".nav-list a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuBtn.classList.remove("active");
      nav.classList.remove("active");
      document.body.classList.remove("no-scroll");
    });
  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80; // Adjust for fixed header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el);
  });
});
