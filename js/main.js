/**
 * AI Tool Hub — main.js
 *
 * Every "Explore / View AI Video Bundle" button on the site reads its
 * destination from this single constant, so updating the link here
 * updates the whole site.
 */
const AFFILIATE_URL = "https://b8c255lj2i02332ymff54-bz2x.hop.clickbank.net";

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
