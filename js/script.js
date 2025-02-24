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
