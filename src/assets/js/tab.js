const tabContainers = document.querySelectorAll('.tab-container');

Array.from(tabContainers).forEach((tabContainer) => {
  const tabs = Array.from(tabContainer.querySelectorAll('.tab'));
  const tabContent = Array.from(tabContainer.querySelectorAll('.tab-content__list'));

  tabs.forEach((currentTab, currentIndex) => {
    currentTab.addEventListener('click', () => {
      // remove active class in current active tab
      tabs.forEach((tab, index) => {
        if (tab.classList.contains('active')) {
          if(tab === currentTab) return;

          tab.classList.remove('active');
          tabContent[index].classList.remove('active');

          currentTab.classList.add('active');
          tabContent[currentIndex].classList.add('active');

          return;
        }
      });
    });
  });
});