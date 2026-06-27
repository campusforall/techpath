// Logic for university listing and detail pages
const params = new URLSearchParams(window.location.search);
const selectedUniId = params.get("uni");

const listView = document.querySelector("#listView");
const detailView = document.querySelector("#detailView");

// Check if a valid university is selected
const selectedUni = universities.find(u => u.id === selectedUniId);

// Update footer year
document.querySelector("#year").textContent = new Date().getFullYear();

// Common interactions: Menu toggle
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

// Common interactions: Scroll progress and body scrolled class
const progressBar = document.querySelector(".scroll-progress");
const updateScrollEffects = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.transform = `scaleX(${scrollable > 0 ? window.scrollY / scrollable : 0})`;
  document.body.classList.toggle("scrolled", window.scrollY > 24);
};
window.addEventListener("scroll", updateScrollEffects, { passive: true });
updateScrollEffects();

// Common interactions: Cursor glow
const cursorGlow = document.querySelector(".cursor-glow");
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  window.addEventListener("pointermove", event => {
    cursorGlow.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
  }, { passive: true });
}

// Common interactions: Reveal observer
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { 
    entry.target.classList.add("visible"); 
    observer.unobserve(entry.target); 
  }
}), { threshold: 0.12 });

if (selectedUni) {
  // RENDER DETAIL VIEW
  listView.hidden = true;
  detailView.hidden = false;

  document.title = `${selectedUni.name} | TechPath`;
  document.querySelector("#uniName").textContent = selectedUni.name;
  document.querySelector("#uniIntro").textContent = selectedUni.intro;
  document.querySelector("#uniCourseCount").textContent = selectedUni.courses.length;
  document.querySelector("#uniLogo").textContent = selectedUni.logo;
  document.querySelector("#uniCode").textContent = selectedUni.shortName;

  const websiteLink = document.querySelector("#uniWebsite");
  if (selectedUni.websiteUrl) {
    websiteLink.href = selectedUni.websiteUrl;
    websiteLink.hidden = false;
  } else {
    websiteLink.hidden = true;
  }

  // Add theme color class to logo badge
  const logoBadge = document.querySelector("#uniLogoBadge");
  logoBadge.className = `subject-badge reveal ${selectedUni.colorClass}`;

  // Populate course grid
  const courseGrid = document.querySelector("#courseGrid");
  courseGrid.innerHTML = selectedUni.courses.map((course, index) => `
    <article class="resource-card" style="--delay:${index * 45}ms">
      <div class="resource-card-top">
        <span class="resource-type degree">Degree</span>
        <span class="subject-code">${selectedUni.shortName}</span>
      </div>
      <div class="file-art degree">
        <span>DEG</span>
        <b>${selectedUni.shortName}</b>
        <i></i>
      </div>
      <div class="resource-body">
        <p>Undergraduate Pathway</p>
        <h3>${course.name}</h3>
        <div class="resource-meta">
          <span>State University</span>
          <span>Google Drive</span>
        </div>
      </div>
      <a class="drive-link" href="${course.driveUrl}" target="_blank" rel="noopener noreferrer">
        Open Syllabus Link <span>&#8599;</span>
      </a>
    </article>
  `).join("");

  document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

} else {
  // RENDER LIST VIEW
  listView.hidden = false;
  detailView.hidden = true;

  document.title = "Universities & Degrees | TechPath";

  // Calculate statistics
  const totalUnis = universities.length;
  const totalCourses = universities.reduce((acc, curr) => acc + curr.courses.length, 0);
  document.querySelector("#totalUnisCount").textContent = totalUnis;
  document.querySelector("#totalCoursesCount").textContent = totalCourses;

  // Populate university grid
  const universityGrid = document.querySelector("#universityGrid");
  universityGrid.innerHTML = universities.map(uni => `
    <button class="subject-card ${uni.colorClass} reveal" data-uni="${uni.id}">
      <span class="subject-icon">${uni.logo}</span>
      <small>${uni.shortName}</small>
      <h3>${uni.name}</h3>
      <span class="card-arrow">&#8599;</span>
    </button>
  `).join("");

  // Add click listeners to university cards
  document.querySelectorAll("[data-uni]").forEach(card => card.addEventListener("click", () => {
    window.location.href = `university.html?uni=${encodeURIComponent(card.dataset.uni)}`;
  }));

  // Add tilt effect to university cards if on desktop
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
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
    document.querySelectorAll("[data-uni]").forEach(addTilt);
  }

  document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
}
