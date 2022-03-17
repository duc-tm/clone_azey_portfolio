const firstSection = document.getElementById('home');
const serviceSection = document.getElementById('services');
const achievementSection = document.querySelector(
  '#portfolio .section-portfolio__achieve-statistic'
);
const blogSection = document.getElementById('blog');

const header = document.getElementById('header');
const scrollTopBtn = document.getElementById('scroll-top-btn');
const sectionBlogPosts = Array.from(document.querySelectorAll('.section-blog__post-item'));

const achievementTotal = [554, 540, 1200, 160];

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

const handleIntersecting = (intersectCallback, nonIntersectCallback, cleanUp) => {
  return (entries, observer) => {
    if (entries[0].isIntersecting) {
      intersectCallback?.();
      cleanUp?.(observer);
    }
    else {
      nonIntersectCallback?.();
    }
  }
}

const handleFirstSectionIntersecting = handleIntersecting(
  () => {
    header.style.backgroundColor = 'var(--header-color)';
    scrollTopBtn.classList.add('hidden');
  },
  () => {
    header.style.backgroundColor = 'var(--black-light-color)';
    scrollTopBtn.classList.remove('hidden');
  }
);
const handleServiceSectionIntersecting = handleIntersecting(
  () => {
    const serviceList = serviceSection.querySelector('.section-services__list');
    serviceList.classList.add('slideLeft');
  },
  null,
  (observer) => observer.unobserve(serviceSection)
);
const handleAchievementSectionIntersecting = handleIntersecting(
  () => {
    const baseSteps = [3, 3, 6, 1];
    const steps = [3, 3, 6, 1];
    const achievementCurrentCounts = [0, 0, 0, 0];
    const achievementList = achievementSection.querySelector('.achieve-statistic__list');
    const counterContainers = Array.from(
      achievementSection.querySelectorAll('.achieve-statistic__number')
    );

    achievementList.classList.add('slideRight');
    const interval = setInterval(() => {
      let isCountingDone = true;
      for (let i = 0; i < 4; i++) {
        if (achievementCurrentCounts[i] === achievementTotal[i]) continue;

        achievementCurrentCounts[i] += steps[i];
        if (achievementCurrentCounts[i] > achievementTotal[i]) {
          achievementCurrentCounts[i] = achievementTotal[i]
        }
        else {
          steps[i] += baseSteps[i];
          isCountingDone = false;
        }

        counterContainers[i].innerText = achievementCurrentCounts[i];
      }

      if (isCountingDone) {
        clearInterval(interval);
      }
    }, 100);
  },
  null,
  (observer) => observer.unobserve(achievementSection)
);
const handleBlogSectionIntersecting = handleIntersecting(
  () => {
    sectionBlogPosts.forEach((sectionBlogPost, index) => {
      if (index % 2 === 0) {
        sectionBlogPost.classList.add('slideRight');
      } else {
        sectionBlogPost.classList.add('slideLeft');
      }
    });
  },
  null,
  (observer) => observer.unobserve(blogSection)
);


const firstSectionObserver = new IntersectionObserver(
  handleFirstSectionIntersecting,
  {
    root: null,
    threshold: 0,
  }
);
const serviceSectionObserver = new IntersectionObserver(
  handleServiceSectionIntersecting,
  {
    root: null,
    threshold: 0,
  }
);
const achievementSectionObserver = new IntersectionObserver(
  handleAchievementSectionIntersecting,
  {
    root: null,
    threshold: 0,
  }
);
const blogSectionObserver = new IntersectionObserver(
  handleBlogSectionIntersecting,
  {
    root: null,
    threshold: 0,
  }
);


firstSectionObserver.observe(firstSection);
serviceSectionObserver.observe(serviceSection);
achievementSectionObserver.observe(achievementSection);
blogSectionObserver.observe(blogSection)