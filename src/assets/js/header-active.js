const windowInnerHeight = window.innerHeight;
const sectionLinks = Array.from(document.querySelectorAll('#header .navbar ul a'));
const sections = [];
const hashes = [];

sectionLinks.forEach((sectionLink) => {
  const hash = sectionLink.dataset.jsHash;
  const sectionElement = document.getElementById(hash.slice(1));

  hashes.push(hash);
  sections.push(sectionElement);
});

const handleHashChange = (currentIndex) => {
  sectionLinks.some((sectionLink) => {
    if (sectionLink.classList.contains('active')) {
      sectionLink.classList.remove('active');
      return true;
    }

    return false;
  });

  if (typeof currentIndex === 'number') {
    sectionLinks[currentIndex].classList.add('active');
  }
}

const handleSectionIntersecting = (currentIndex) => {
  return (entries) => {
    if (entries[0].isIntersecting) {
      history.pushState({}, '', hashes[currentIndex]);

      handleHashChange(currentIndex);
    }
  }
}

sections.forEach((sectionElement, index) => {
  if (!sectionElement) return;

  const threshold = windowInnerHeight / sectionElement.clientHeight;
  const observer = new IntersectionObserver(
    handleSectionIntersecting(index),
    {
      root: null,
      threshold: threshold <= 1 ? threshold / 2 : 0.99,
    }
  );

  observer.observe(sectionElement);
});
