import {
  skills, projects, certificates, social,
} from './data';

const skillsContainer = document.getElementById('Skills');
const projectsContainer = document.getElementById('Projects');
const certificatesContainer = document.getElementById('Certificates');
const socialContainer = document.getElementById('Social');

function loadSkills() {
  skills.forEach((skill) => {
    const container = `
      <div class="p-1 w-1/2 md:w-1/3">
        <figure class="bg-white px-auto py-4 rounded-lg shadow" title="${skill.name}">
          <img class="block h-12 mx-auto w-12" loading="lazy" width="100%" height="100%" src="./img/icons/${skill.logo}" alt="${skill.name}">
        </figure>
      </div>
    `;

    skillsContainer.innerHTML += container;
  });
}

function loadProjects() {
  projects.forEach((project, index) => {
    const container = `
      <section class="flex flex-col flex-shrink-0 h-full items-center justify-center relative w-full lg:w-1/2">
        <div class="bg-white flex flex-col rounded-lg shadow-2xl w-4/5">
          <img class="border-b-2 border-blue-400 h-full rounded-t-lg w-full" loading="lazy" width="100%" height="100%" src="./img/projects/${project.screenshot}" alt="${project.name}">
          <p class="border-b-2 border-blue-400 mb-1 mt-2 mx-4 pb-2">
            <strong>${project.name}</strong>
          </p>
          <a class="block mx-4 my-1" href="${project.urlProject}">
            🚀 <span class="border-b border-dotted border-black">${project.urlProject.slice(8)}</span>
          </a>
          <a class="block mx-4 my-1" href="${project.urlDetail}">
            📖 <span class="border-b border-dotted border-black">Detail</span>
          </a>
          <a class="block mb-2 mt-1 mx-4" href="${project.urlSource}">
            💻 <span class="border-b border-dotted border-black">Kode Sumber</span>
          </a>
        </div>
        <p class="absolute bottom-4 text-base text-center w-full">${index + 1}/${projects.length}</p>
      </section>
    `;

    projectsContainer.innerHTML += container;
  });
}

function loadCertificates() {
  certificates.forEach((certificate, index) => {
    const container = `
      <section class="flex flex-col flex-shrink-0 h-full items-center justify-center relative w-full lg:w-1/2">
        <div class="bg-white flex flex-col rounded-lg shadow-2xl w-4/5">
          <img class="border-b-2 border-indigo-400 h-full rounded-t-lg w-full" loading="lazy" width="100%" height="100%" src="./img/certificates/${certificate.screenshot}" alt="${certificate.name}">
          <p class="border-b-2 border-indigo-400 mb-1 mt-2 mx-4 pb-2">
            <strong>${certificate.scholarship}</strong>
          </p>
          <a class="block mx-4 my-1" href="${certificate.urlSource}">
            🚀 <span class="border-b border-dotted border-black">${certificate.nameSource}</span>
          </a>
          <a class="block mb-2 mt-1 mx-4" href="${certificate.urlDetail}">
            📖 <span class="border-b border-dotted border-black">Detail Sertifikat</span>
          </a>
        </div>
        <p class="absolute bottom-4 text-base text-center w-full">${index + 1}/${certificates.length}</p>
      </section>
    `;

    certificatesContainer.innerHTML += container;
  });
}

function loadSocial() {
  social.forEach((link) => {
    const container = `
      <div class="flex w-1/2 ${link.class} sm:w-full">
        <a class="block border-4 border-white m-1 p-4 hover:border-opacity-0" href="${link.url}" title="${link.name}">
          <img class="h-12 w-12" loading="lazy" width="100%" height="100%" src="./img/icons/${link.logo}" alt="${link.name}">
        </a>
      </div>
    `;

    socialContainer.innerHTML += container;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadSkills();
  loadProjects();
  loadCertificates();
  loadSocial();
});
