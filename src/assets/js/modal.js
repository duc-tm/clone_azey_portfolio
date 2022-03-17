const modalOverlay = document.querySelector('.modal-overlay');
const modalBody = modalOverlay.querySelector('.modal-body');
const imgElement = modalBody.querySelector('.modal__image');
const nextBtn = modalBody.querySelector('.modal__next-btn');
const prevBtn = modalBody.querySelector('.modal__prev-btn');
const projectItems = Array.from(document.querySelectorAll('.project__item'));
const imgSources = projectItems.map((projectItem) => {
  const img = projectItem.querySelector('img');
  return img?.src;
});
let currentImgIndex;

projectItems.forEach((projectItem, index) => {
  projectItem.addEventListener('click', () => {
    imgElement.src = imgSources[index];
    
    modalOverlay.classList.add('modal--open');
    document.body.classList.add('modal--open');
    currentImgIndex = index
  });
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target !== modalOverlay) return;

  modalOverlay.classList.remove('modal--open');
  document.body.classList.remove('modal--open');
});

prevBtn.addEventListener('click', () => {
  const srcIndex = Math.abs((currentImgIndex - 1) % imgSources.length);
  imgElement.src = imgSources[srcIndex];
  currentImgIndex = srcIndex;
});

nextBtn.addEventListener('click', () => {
  const srcIndex = Math.abs((currentImgIndex + 1) % imgSources.length);
  imgElement.src = imgSources[srcIndex];
  currentImgIndex = srcIndex;
});