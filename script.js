function listaDeCompras() {
  const nomeItem = document.querySelector(".input-item");
  const btnItem = document.querySelector(".btn-item");
  const qntItem = document.querySelector(".qnt-item");
  const valorItem = document.querySelector(".valor-item");
  const listaItens = document.querySelector(".lista-Itens");
  const formContainer = document.querySelector(".form-conteiner");
  const conteinerNumbers = document.querySelector(".conteiner-numbers");

  // let oldValue;

  function criaDiv() {
    const div = document.createElement("div");
    return div;
  }

  function criaListItens(text) {
    const div = criaDiv();
    div.classList.add("item");

    const titleItem = document.createElement("h3");
    titleItem.innerText = text;
    div.appendChild(titleItem);

    const btnComprado = document.createElement("button");
    btnComprado.classList.add("btn-comprado");
    btnComprado.innerHTML = '<i class= "fi fi-rr-shopping-cart"></i>';
    div.appendChild(btnComprado);
    

    const btnDelete = document.createElement("button");
    btnDelete.classList.add("btn-delete");
    btnDelete.innerHTML = '<i class="fi fi-rr-trash"></i>';
    div.appendChild(btnDelete);

    const itemValor = document.createElement("h4");
    itemValor.innerText = valorItem.value;
    div.appendChild(itemValor);

    const itemQnt = document.createElement("h4");
    itemQnt.classList.add("item-qtn");
    itemQnt.innerText = qntItem.value;
    div.appendChild(itemQnt);

    listaItens.appendChild(div);


    valorItem.value = "";
    valorItem.focus();

    qntItem.value = "";
    qntItem.focus();

    nomeItem.value = "";
    nomeItem.focus();

   salvarItem();
  }

  btnItem.addEventListener("click", function (e) {
    e.preventDefault();
    const nomeValue = nomeItem.value;
    const regras = document.querySelector(".regras");
    const regraNome = document.createElement("h5");

    if(!nomeValue){
      regraNome.classList.add("regraNome");
      regraNome.innerText = "Sem nome do Produto!";
      regras.appendChild(regraNome);
    }

    if (nomeValue) {
      regraNome.classList.add("hide");
      criaListItens(nomeValue);
    }
  });

  const toggleItem = () => {
    conteinerNumbers.classList.toggle("hide");
    formContainer.classList.toggle("hide");
  };

  document.addEventListener("click", function (e) {
    const click = e.target;
    const parente = click.closest("div");
    let titleItem;

    if (parente && parente.classList.contains("h3")) {
      titleItem = parente.querySelector("h3").innerText;
    }

    if (click.classList.contains("btn-comprado")) {
      parente.classList.toggle("pegou");
    }

    if (click.classList.contains("btn-delete")) {
      parente.remove();
      salvarItem();
    }

    if (click.classList.contains("btn-quanti")) {
      toggleItem();
    }
  });

  
    document.addEventListener("keypress", function (e) {
      const keyPress = e.target;
      const total = document.querySelector(".total-item");

      if (keyPress.classList.contains("qnt-item")) {
        let totalItem = valorItem.value * qntItem.value;
        total.innerText = totalItem;
      }
    });
    
    function salvarItem() {
      const divItem = listaItens.querySelectorAll('div');
      const listaDeItens = [];
    
      for (let item of divItem) {
        let itemTexto = item.innerText;
        // itemTexto = itemTexto.replace('Apagar', '').trim();
        listaDeItens.push(itemTexto);
      }
    
      const itensJSON = JSON.stringify(listaDeItens);
      localStorage.setItem('listaDeItens', itensJSON);
    }
    
    function adicionaTarefasSalvas() {
      const itens = localStorage.getItem('listaDeItens');
      const listaDeItens = JSON.parse(itens);
    
      for(let item of listaDeItens) {
        criaTarefa(item);
      }
    }
}
// localStorage.clear();
listaDeCompras();
