const subjectCodes = {
  "Engineering Technology": "ET",
  "Science for Technology": "SFT",
  "Information & Communication Technology": "ICT",
  "Bio Systems Technology": "BST",
  "Agricultural Science": "AGRI"
};
const typeClass = { 
  "Past Paper": "paper", 
  "Textbook": "book", 
  "Teachers' Guide": "guide", 
  "Model Paper": "model",
  "Question-wise Paper": "question",
  "Province Paper": "province",
  "Extra Notes": "notes"
};
const subjectCode = subject => subjectCodes[subject] || "TECH";

const params = new URLSearchParams(window.location.search);
const requestedSubject = params.get("subject");
const validSubjects = Object.keys(subjectCodes);
const currentSubject = validSubjects.includes(requestedSubject) ? requestedSubject : validSubjects[0];
const allowedTypes = ["All", "Past Paper", "Textbook", "Teachers' Guide", "Model Paper", "Question-wise Paper", "Province Paper", "Extra Notes"];
let activeType = "All";

const subjectItems = resources.filter(item => item.subject === currentSubject);
const grid = document.querySelector("#subjectResourceGrid");
const emptyState = document.querySelector("#subjectEmptyState");
const search = document.querySelector("#subjectSearch");

document.title = `${currentSubject} Materials | TechPath`;
document.querySelector("#subjectTitle").textContent = currentSubject;
document.querySelector("#materialsHeading").textContent = `${subjectCode(currentSubject)} materials`;
document.querySelector("#subjectCodeLarge").textContent = subjectCode(currentSubject);
document.querySelector("#subjectIntro").textContent = `Find ${currentSubject} past papers, textbooks, teachers' guides and model papers in one focused page.`;
document.querySelector("#subjectCount").textContent = subjectItems.length;
document.querySelector("#subjectMediums").textContent = new Set(subjectItems.map(item => item.medium)).size;
document.querySelector("#subjectYears").textContent = new Set(subjectItems.map(item => item.year)).size;

function renderSubjectResources() {
  const term = search.value.trim().toLowerCase();
  const filtered = subjectItems.filter(item => {
    const matchesSearch = `${item.title} ${item.year} ${item.medium} ${item.type}`.toLowerCase().includes(term);
    return matchesSearch && (activeType === "All" || item.type === activeType);
  });

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

document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  document.querySelector(".filter.active").classList.remove("active");
  button.classList.add("active");
  activeType = button.dataset.type;
  renderSubjectResources();
}));
search.addEventListener("input", renderSubjectResources);

function setSubjectType(type) {
  const filterButton = document.querySelector(`[data-type="${type}"]`);
  if (!filterButton) return;
  document.querySelector(".filter.active").classList.remove("active");
  filterButton.classList.add("active");
  activeType = type;
  renderSubjectResources();
}

document.querySelectorAll("[data-subject-type]").forEach(link => link.addEventListener("click", event => {
  event.preventDefault();
  setSubjectType(link.dataset.subjectType);
  const url = new URL(window.location.href);
  url.searchParams.set("subject", currentSubject);
  url.searchParams.set("type", link.dataset.subjectType);
  url.hash = "materials";
  window.history.pushState({}, "", url);
  document.querySelector("#materials").scrollIntoView({ behavior: "smooth" });
}));

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

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

const progressBar = document.querySelector(".scroll-progress");
const cursorGlow = document.querySelector(".cursor-glow");
const updateScrollEffects = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.transform = `scaleX(${scrollable > 0 ? window.scrollY / scrollable : 0})`;
  document.body.classList.toggle("scrolled", window.scrollY > 24);
};
window.addEventListener("scroll", updateScrollEffects, { passive: true });
updateScrollEffects();

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  window.addEventListener("pointermove", event => {
    cursorGlow.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
  }, { passive: true });
}

document.querySelector("#year").textContent = new Date().getFullYear();
const initialType = params.get("type");
if (allowedTypes.includes(initialType)) {
  setSubjectType(initialType);
} else {
  renderSubjectResources();
}
