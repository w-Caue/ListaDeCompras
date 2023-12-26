  const buttonNav = document.querySelector("#buttonNav");
  const menuNav = document.querySelector("#menuNav");
 
  buttonNav.addEventListener('click', function(){
      menuNav.classList.toggle('hidden');
  });
  
  const modal = document.querySelector('#modal');

  function acao(){
    modal.classList.toggle('hidden');
  };

  function fechar(){
    modal.classList.toggle('hidden');
  }