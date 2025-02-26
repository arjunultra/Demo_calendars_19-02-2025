// typewriter effect
class Typewriter {
  constructor(element, texts, interval = 8000) {
    this.texts = texts; // Array of texts
    this.element = element; // HTML element to display text
    this.interval = interval; // Time interval between switching texts
    this.text = ""; // Current text being typed
    this.currentIndex = 0; // Index of the current text in the array
    this.isDeleting = false; // Typing or deleting flag
    this.typingSpeed = 150; // Speed of typing/deleting
    this.type(); // Start the typewriter effect
  }

  type() {
    const currentText = this.texts[this.currentIndex];

    // Update the text based on typing or deleting
    if (this.isDeleting) {
      this.text = currentText.substring(0, this.text.length - 1);
    } else {
      this.text = currentText.substring(0, this.text.length + 1);
    }

    // Only update the text content if it has changed
    if (this.element.textContent !== this.text) {
      this.element.textContent = this.text;
    }

    // Determine the typing speed
    const speed = this.isDeleting ? this.typingSpeed / 2 : this.typingSpeed;

    if (!this.isDeleting && this.text === currentText) {
      // Pause before deleting starts
      setTimeout(() => {
        this.isDeleting = true;
        this.type();
      }, this.interval);
    } else if (this.isDeleting && this.text === "") {
      // Move to the next text after deleting is done
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      this.type();
    } else {
      setTimeout(() => this.type(), speed);
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const typewriterElements = document.querySelectorAll(".typewriter");

  typewriterElements.forEach((element) => {
    const texts = JSON.parse(element.getAttribute("data-texts") || "[]");
    const interval =
      parseInt(element.getAttribute("data-interval"), 10) || 2000;

    if (texts.length > 0) {
      new Typewriter(element, texts, interval);
    } else {
      console.error("No texts found for element:", element);
    }
  });
});
// counter
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".odometer");

  const startCounting = (counter, target) => {
    let current = 0;
    const speed = 50; // Lower = faster, higher = slower
    const increment = Math.ceil(target / speed);

    const updateCounter = () => {
      current += increment;
      if (current >= target) {
        counter.innerText = target;
      } else {
        counter.innerText = current;
        requestAnimationFrame(updateCounter);
      }
    };

    updateCounter();
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute("data-count"), 10);
          startCounting(counter, target);
          observer.unobserve(counter); // Stop observing once animated
        }
      });
    },
    { threshold: 0.5 } // Starts when 50% of the section is visible
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});
// copy to clipboard
$(document).ready(function () {
  // Function for copying phone number or email
  function copyToClipboard(data, $element) {
    navigator.clipboard.writeText(data).then(
      () => {
        // Show success message
        const $message = $element.closest(".row").find(".copy-success-message");
        $message.fadeIn(200).delay(1000).fadeOut(200);
      },
      () => {
        // Handle failure (optional)
        alert("Failed to copy.");
      }
    );
  }

  // Copy phone number
  $(".copy-phone").on("click", function () {
    const phoneNumber = $(this).data("phone");
    copyToClipboard(phoneNumber, $(this));
  });

  // Copy email address
  $(".copy-email").on("click", function () {
    const email = $(this).data("email");
    copyToClipboard(email, $(this));
  });
});
// product page scrollspy
document.addEventListener("DOMContentLoaded", function () {
  const sidebarLinks = document.querySelectorAll(".product-nav-link");
  const sections = document.querySelectorAll(".product-category");
  const offset = 100; // Matches the sticky offset

  function onScroll() {
    let currentSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - offset;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSectionId = section.getAttribute("id");
      }
    });

    // Update active class
    sidebarLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentSectionId) {
        link.classList.add("active");
      }
    });
  }

  // Smooth scroll for sidebar links
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        let scrollToPosition = targetSection.offsetTop - offset;

        // Special case for the first section
        if (targetId === "daily-calendars") {
          scrollToPosition = targetSection.offsetTop - (offset - 800); // Fine-tune if needed
        }
        if (targetId === "monthly-sheets") {
          scrollToPosition = targetSection.offsetTop - (offset - 820); // Fine-tune if needed
        }
        if (targetId === "yearly-planners") {
          scrollToPosition = targetSection.offsetTop - (offset - 815); // Fine-tune if needed
        }
        if (targetId === "desk-calendars") {
          scrollToPosition = targetSection.offsetTop - (offset - 810); // Fine-tune if needed
        }
        if (targetId === "pocket-calendars") {
          scrollToPosition = targetSection.offsetTop - (offset - 810); // Fine-tune if needed
        }
        if (targetId === "fridge-calendars") {
          scrollToPosition = targetSection.offsetTop - (offset - 810); // Fine-tune if needed
        }

        window.scrollTo({
          top: scrollToPosition,
          behavior: "smooth",
        });

        // Update URL without refreshing
        history.pushState(null, null, `#${targetId}`);
      }
    });
  });

  window.addEventListener("scroll", onScroll);

  // Highlight on page load
  onScroll();
});
// index owl carousel
$(document).ready(function () {
  $(".testimonials-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
});
// sticky navbar

$(document).ready(function () {
  var stickyNavbar = $(".sticky-navbar");
  var headerHeight = $(".main-header").outerHeight();

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > headerHeight) {
      stickyNavbar.addClass("visible");
    } else {
      stickyNavbar.removeClass("visible");
    }
  });
});
