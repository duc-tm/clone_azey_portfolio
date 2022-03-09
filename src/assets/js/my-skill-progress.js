const observeTarget = document.getElementById('resume__my-skills');
const progressBars = Array.from(document.querySelectorAll('#resume__my-skills .progress-bar'));
const progress = [95, 78, 89, 80, 85, 80, 75, 70];

const handleSectionIntersect = (entries, observer) => {
  const isIntersecting = entries[0].isIntersecting;

  if(isIntersecting) {
    progressBars.forEach((progressBar, index) => {
      progressBar.style.width = progress[index] + '%';
    });

    observer.unobserve(observeTarget);
  }
}

const observer = new IntersectionObserver(
  handleSectionIntersect,
  {
    root: null,
    rootMargin: '50px',
    threshold: 0,
  }
);

observer.observe(observeTarget);