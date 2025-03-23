import projectsData from '../json/projects.json';
const projGallery = document.querySelector('.projects-list');
const loadMoreBtn = document.querySelector('.load-more-btn');
let startIndex = 0;
let projectsPerPage = 3;
const createProjCardElem = ({
  title,
  subtitle,
  url,
  imgUrls: { mob1x, mob2x, tab1x, tab2x, desk1x, desk2x },
}) => {
  return `
  <li class="my-projects-item">
  <picture>
    
    <source type="image/webp" srcset="${desk1x} 1x , ${desk2x} 2x" media="(min-width: 1280px)" />
    <source type="image/webp" srcset="${tab1x} 1x, ${tab2x} 2x" media="(min-width: 768px)" />
    <source type="image/webp" srcset="${mob1x} 1x, ${mob2x} 2x" media="(min-width: 320px)" />
    <img class="my-projects-img" src=" ${desk1x}" alt="${title}"/>
  </picture>
  <p class="my-projects-subtitle">${subtitle}</p>
  <h3 class="my-projects-title">${title}</h3>
  <a class="my-projects-link" href="${url}">Visit
    <span>
      <svg class="visit-us-svg" width="24" height="24">
        <use href="./img/sprite.svg#icon-Arrow-up-right"></use>
      </svg>
    </span>
  </a>
</li>
  `;
};

const addGalleryItem = () => {
  const endIndex = startIndex + projectsPerPage;

  const currentProjects = projectsData.slice(startIndex, endIndex);
  projGallery.insertAdjacentHTML(
    'beforeend',
    currentProjects.map(createProjCardElem).join('')
  );
  startIndex = endIndex;
  if (startIndex >= projectsData.length) {
    loadMoreBtn.style.display = 'none';
  }
};
addGalleryItem();

loadMoreBtn.addEventListener('click', addGalleryItem);

/* <li class="my-projects-item">
  <img class="my-projects-img" src="" alt="" />
  <p class="my-projects-subtitle"></p>
  <h3 class="my-projects-title"></h3>
  <a class="my-projects-link" href=""></a>
</li> */
