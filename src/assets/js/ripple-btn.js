const rippleBtnArr = document.querySelectorAll('.ripple-btn');

Array.from(rippleBtnArr).forEach((rippleBtn) => {
  let ripple;
  
  rippleBtn.addEventListener('mouseenter', (e) => {
    const {
      x: buttonClientX,
      y: buttonClientY
    } = rippleBtn.getBoundingClientRect();
    const mousePosX = e.clientX - buttonClientX
    const mousePosY = e.clientY - buttonClientY;

    ripple = document.createElement('div');
    ripple.classList.add('ripple')
    ripple.style.left = `${mousePosX}px`;
    ripple.style.top = `${mousePosY}px`;
    rippleBtn.prepend(ripple);
  });

  rippleBtn.addEventListener('mouseleave', () => {
    ripple.remove();
  })
})