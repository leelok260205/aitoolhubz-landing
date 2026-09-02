/**
 * AI Tool Hub — main.js
 *
 * IMPORTANT: Replace AFFILIATE_URL below with your real ClickBank
 * (or other network) tracking link for the AI Video Bundle offer.
 * Every "Explore / View AI Video Bundle" button on the site reads
 * from this single constant, so updating it here updates the whole site.
 */
const AFFILIATE_URL = "https://example.com/replace-with-your-clickbank-affiliate-link";

document.addEventListener("DOMContentLoaded", () => {
  // Wire up every affiliate CTA link/button on the page.
  document.querySelectorAll("[data-affiliate-link]").forEach((el) => {
    el.setAttribute("href", AFFILIATE_URL);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer sponsored");
  });

  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // FAQ accordion
  document.querySelectorAll(".faq-item").forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      const isOpen = item.getAttribute("data-open") === "true";

      // Close all other items
      document.querySelectorAll(".faq-item").forEach((other) => {
        if (other !== item) {
          other.setAttribute("data-open", "false");
          other.querySelector(".faq-question").setAttribute("aria-expanded", "false");
          other.querySelector(".faq-answer").style.maxHeight = null;
        }
      });

      const nextState = !isOpen;
      item.setAttribute("data-open", String(nextState));
      question.setAttribute("aria-expanded", String(nextState));
      answer.style.maxHeight = nextState ? answer.scrollHeight + "px" : null;
    });
  });

  // Footer year
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
