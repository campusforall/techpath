// JavaScript for resources.html Library page
const grid = document.querySelector("#libraryGrid");
const resultCount = document.querySelector("#resultCount");
const search = document.querySelector("#librarySearch");
const subjectFilter = document.querySelector("#librarySubjectFilter");
const mediumFilter = document.querySelector("#libraryMediumFilter");
const emptyState = document.querySelector("#libraryEmptyState");
let activeType = "All";

const allowedTypes = [
  "All", 
  "Past Paper", 
  "Textbook", 
  "Teachers' Guide", 
  "Model Paper", 
  "Question-wise Paper", 
  "Province Paper", 
  "Extra Notes"
];

const typeClass = { 
  "Past Paper": "paper", 
  "Textbook": "book", 
  "Teachers' Guide": "guide", 
  "Model Paper": "model",
  "Question-wise Paper": "question",
  "Province Paper": "province",
  "Extra Notes": "notes"
};

const subjectCodes = {
  "Engineering Technology": "ET",
  "Science for Technology": "SFT",
  "Information & Communication Technology": "ICT",
  "Bio Systems Technology": "BST",
  "Agricultural Science": "AGRI"
};
const subjectCode = subject => subjectCodes[subject] || "TECH";

// Calculate and set initial global library stats
document.querySelector("#libraryCount").textContent = resources.length;
document.querySelector("#libraryMediums").textContent = new Set(resources.map(item => item.medium)).size;

function renderLibrary() {
  const term = search.value.trim().toLowerCase();
  
  const filtered = resources.filter(item => {
    const matchesSearch = `${item.title} ${item.subject} ${item.year || ''} ${item.medium} ${item.type}`.toLowerCase().includes(term);
    return matchesSearch && (activeType === "All" || item.type === activeType) &&
      (subjectFilter.value === "All" || item.subject === subjectFilter.value) &&
      (mediumFilter.value === "All" || item.medium === mediumFilter.value);
  });

  resultCount.textContent = filtered.length;
  emptyState.hidden = filtered.length !== 0;

  grid.innerHTML = filtered.map((item, index) => `
    <article class="resource-card" style="--delay:${index * 45}ms">
      <div class="resource-card-top">
        <span class="resource-type ${typeClass[item.type]}">${item.type}</span>
        <span class="subject-code">${subjectCode(item.subject)}</span>
      </div>
      <div class="file-art ${typeClass[item.type]}"><span>${item.year || ''}</span><b>${subjectCode(item.subject)}</b><i></i></div>
      <div class="resource-body">
        <p>${item.subject}</p><h3>${item.title}</h3>
        <div class="resource-meta"><span>${item.medium}</span><span>PDF / Drive</span></div>
      </div>
      <a class="drive-link" href="${item.driveUrl}" target="_blank" rel="noopener noreferrer">Open in Google Drive <span>&#8599;</span></a>
    </article>`).join("");
}

// Category filter buttons click listeners
document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  document.querySelector(".filter.active").classList.remove("active");
  button.classList.add("active");
  activeType = button.dataset.type;
  renderLibrary();
}));

function setResourceType(type) {
  const filterButton = document.querySelector(`[data-type="${type}"]`);
  if (!filterButton) return;
  document.querySelector(".filter.active").classList.remove("active");
  filterButton.classList.add("active");
  activeType = type;
  renderLibrary();
}

[search, subjectFilter, mediumFilter].forEach(control => control.addEventListener("input", renderLibrary));

// Clear filters button
document.querySelector("#clearFilters").addEventListener("click", () => {
  search.value = ""; 
  subjectFilter.value = "All"; 
  mediumFilter.value = "All"; 
  activeType = "All";
  document.querySelector(".filter.active").classList.remove("active");
  document.querySelector('[data-type="All"]').classList.add("active");
  renderLibrary();
});

// Parse query params on load
const params = new URLSearchParams(window.location.search);
const initialType = params.get("type");
if (allowedTypes.includes(initialType)) {
  setResourceType(initialType);
} else {
  renderLibrary();
}

// Common animations: hamburger toggle
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.classList.toggle("open", open);
  menuButton.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

// Scroll effects
const progressBar = document.querySelector(".scroll-progress");
const updateScrollEffects = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.transform = `scaleX(${scrollable > 0 ? window.scrollY / scrollable : 0})`;
  document.body.classList.toggle("scrolled", window.scrollY > 24);
};
window.addEventListener("scroll", updateScrollEffects, { passive: true });
updateScrollEffects();

// Cursor glow
const cursorGlow = document.querySelector(".cursor-glow");
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  window.addEventListener("pointermove", event => {
    cursorGlow.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
  }, { passive: true });
}

// Reveal animations on scroll
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { 
    entry.target.classList.add("visible"); 
    observer.unobserve(entry.target); 
  }
}), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

// Set footer year
document.querySelector("#year").textContent = new Date().getFullYear();
