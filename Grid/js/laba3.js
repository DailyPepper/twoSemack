const burgerMenu = document.querySelector('.burgerMenu');
    const handleBurgerClick = (evt) => {
      evt.preventDefault();
      burgerMenu.classList.toggle('active');
    }
  
    burgerMenu.addEventListener('click', handleBurgerClick);