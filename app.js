const grid = document.querySelector("#resourceGrid");

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

function renderResources() {
  const sliced = resources.slice(0, 9);

  grid.innerHTML = sliced.map((item, index) => `
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

renderResources();

document.querySelectorAll(".subject-card").forEach(card => card.addEventListener("click", () => {
  if (card.dataset.subject === "University & Degree") {
    window.location.href = "university.html";
  } else {
    window.location.href = `subject.html?subject=${encodeURIComponent(card.dataset.subject)}`;
  }
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

document.querySelector("#year").textContent = new Date().getFullYear();
const initialType = new URLSearchParams(window.location.search).get("type");
if (allowedTypes.includes(initialType)) {
  setResourceType(initialType);
} else {
  renderResources();
}

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

  const addTilt = element => {
    element.addEventListener("pointermove", event => {
      const box = element.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width - 0.5;
      const y = (event.clientY - box.top) / box.height - 0.5;
      element.style.setProperty("--tilt-x", `${y * -5}deg`);
      element.style.setProperty("--tilt-y", `${x * 6}deg`);
    });
    element.addEventListener("pointerleave", () => {
      element.style.removeProperty("--tilt-x");
      element.style.removeProperty("--tilt-y");
    });
  };
  document.querySelectorAll(".subject-card").forEach(addTilt);
}
