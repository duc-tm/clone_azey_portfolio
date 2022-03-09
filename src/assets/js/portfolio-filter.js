const filterBtns = Array.from(document.querySelectorAll('#portfolio .filter__criteria'));

filterBtns.forEach((currentFilterBtn) => {
  currentFilterBtn.addEventListener('click', () => {
    filterBtns.forEach((filterBtn) => {
      if(filterBtn.classList.contains('active')) {
        filterBtn.classList.remove('active');

        return;
      }
    });
    
    currentFilterBtn.classList.add('active');
  });
});