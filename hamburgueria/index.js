let Lanches = document.getElementById('container-lanches')
let Porcoes = document.getElementById('container-porcoes')
let Bebidas = document.getElementById('container-bebidas')
let Sobremesa = document.getElementById('container-sobremesas')

fetch("db.json")
  .then(res => res.json())
  .then(res => {
    res.lanches.map(data => {
      Lanches.append(criarDiv(data.imagem, data.preco, data.name, data.id, data.ingredientes));
    });
    res.porcoes.map(data => {
      Porcoes.append(criarDivs(data.imagem, data.preco, data.nome, data.descricao));
    });
    res.bebidas.map(data => {
      Bebidas.append(criarDivs(data.imagem, data.preco, data.nome, data.descricao));
    });
    res.sobremesas.map(data => {
      Sobremesa.append(criarDivs(data.imagem, data.preco, data.nome, data.descricao));
    });
  })
  .catch(error => {
    console.error("Error fetching the JSON data:", error);
  });

  //Criado para as divs de lanches
function criarCardFlutuante(nome, imagem, preco, ingredientes) {
  document.getElementById('fundo-card').classList.remove('hidden')
  document.querySelector('body').classList.add('overflow-y-hidden')

  let div = document.createElement('div')
  div.classList.add('w-full','sm:w-3/4','pb-10','sm:pb-0', 'h-auto', 'rounded-lg', 'bg-card', 'overflow-y-auto', 'overflow-x-hidden', 'scrollbar-thin', 'scrollbar-container-card')
  div.innerHTML = `
         <div class="w-full text-end">
          <span class="close pr-2">&times;</span>
        </div>
        <div class="w-full mb-5">
          <div class="grid grid-cols-1 sm:grid-cols-2 w-full h-1/2 ">
            <div class="flex flex-col items-center justify-center w-full ">
              <div class="w-4/5 flex justify-center sm:justify-end h-full">
                <div class="w-11/12 h-52 ">
                  <img src="${imagem}" class="w-full h-full object-cover rounded-xl border-4 border-card-linha" alt="">
                </div>
              </div>
            </div>
           <div class="w-full flex flex-col items-center justify-center relative pt-5 sm:pt-0">
              <div class="card_shadow_info flex justify-center items-center w-11/12 h-36 sm:w-3/4 sm:h-3/4 p-auto  rounded-lg">
                <div class ="w-full h-auto text-center ">
                    <h1 class="text-white text-center mt-auto  font-anton text-4xl card_text_shadow_preco  px-5">${nome}</h1>
                    <h3 class="text-dourado font-anton text-4xl card_text_shadow_preco ">R$${preco} </h3>
              </div>
              </div>
              <div class="w-3/5 h-full flex justify-center items-center border-b-2 border-b-card-linha absolute top-2 sm:top-0"></div>
            </div>
          </div>
        </div>
    
        <div class="w-full flex flex-col items-center justify-center my-5" id="area-info">
          <div class="w-11/12 bg-card border-4 border-card-linha rounded-lg mb-2">
            <h1 class="text-4xl text-black font-anton p-2 pl-5 card_text_shadow">INGREDIENTES</h1>
          </div>
          <div class="w-11/12 bg-card border-4 border-card-linha rounded-lg">
            <ul class="w-full pl-12" id="header"></ul>
          </div>
        </div>
  `
  let listaIngredientes = div.querySelector('#header')
  // let listaIngredientes = document.getElementById('header')
  ingredientes.forEach((ingrediente) => {
    let li = document.createElement('li')
    li.classList.add('text-2xl', 'text-white', 'list-disc', 'font-anton', 'card_text_shadow_preco', 'my-2')
    li.innerHTML = ingrediente
    listaIngredientes.append(li)
  })

  div.querySelector('.close').onclick = function () {
    div.remove()
    document.getElementById('fundo-card').classList.add('hidden')
    document.querySelector('body').classList.remove('overflow-y-hidden')
  }
  window.onclick = function (event) {
    if (event.target.id =='fundo-card'|| event.target.id =='main-card') {
      div.remove()
      document.getElementById('fundo-card').classList.add('hidden')
      document.querySelector('body').classList.remove('overflow-y-hidden')
    }
  }

  return div
}
function criarDiv(imagem, preco, nome, id, ingredientes) {
  let div = document.createElement('div')
  div.id = 'card'
  div.classList.add('h-72','bg-card', 'rounded-xl', 'mr-5', 'min-w-56','max-w-56', 'sm:h-72')
  div.innerHTML = `
            <div class="w-full h-1/2 ">
              <img src="${imagem}"
                class="w-full h-full object-cover rounded-tl-xl rounded-tr-xl" alt="">
            </div>
             <div class="w-full h-1/2 flex flex-col items-center justify-center relative">
              <div class="w-3/4 border-2  border-card-linha absolute top-5 left-7 sm:left-7"></div>
              <div class=" h-28 max-w-56 mt-4 flex flex-col scrollbar-off text-center">
                <h1 class="font-anton text-3xl card_text_shadow truncate ... px-4 my-2">${nome}</h1>
                <h3 class="font-anton text-4xl text-corpreco card_text_shadow_preco ">R$${preco}</h3>
              </div>
            </div>
  `
  div.style.cursor = 'pointer'
  div.addEventListener('click', (ev) => {
    document.querySelector('#main-card').append(criarCardFlutuante(nome, imagem, preco, ingredientes))
  })
  return div
}

//Criado para as divs restantes
function criarDivs(imagem, preco, nome, descricao) {
  let div = document.createElement('div')
  div.id = 'card'
  div.classList.add('h-72','bg-card', 'rounded-xl', 'mr-5', 'min-w-56','max-w-56', 'sm:h-72')
  div.innerHTML = `
            <div class="w-full h-1/2 ">
              <img src="${imagem}"
                class="w-full h-full object-cover rounded-tl-xl rounded-tr-xl" alt="">
            </div>
            <div class="w-full h-1/2 flex flex-col items-center justify-center relative">
              <div class="w-3/4 border-2  border-card-linha absolute top-5 left-7 sm:left-7"></div>
              <div class=" h-28 max-w-56 mt-4 flex flex-col scrollbar-off text-center">
                <h1 class="font-anton text-3xl card_text_shadow truncate ... px-4 my-2">${nome}</h1>
                <h3 class="font-anton text-4xl text-corpreco card_text_shadow_preco ">R$${preco}</h3>
              </div>
            </div>
  `
  div.style.cursor = 'pointer'
  div.addEventListener('click', (ev) => {
    document.querySelector('#main-card').append(criarCardFlutuantes(nome, imagem, preco, descricao))
  })
  return div
}
function criarCardFlutuantes(nome, imagem, preco, descricao) {
  document.getElementById('fundo-card').classList.remove('hidden')
  document.querySelector('body').classList.add('overflow-y-hidden')

  let div = document.createElement('div')
  div.classList.add('w-full','sm:w-3/4','pb-10','sm:pb-0', 'h-auto', 'sm:h-full' , 'rounded-lg', 'bg-card', 'overflow-y-auto', 'overflow-x-hidden', 'scrollbar-thin', 'scrollbar-container-card')
  div.innerHTML = `
         
      <div class="w-full mb-5">
        <div class="w-full text-end">
          <span class="close pr-2">&times;</span>
        </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 w-full h-1/2">
            <div class="flex flex-col items-center justify-center w-full ">
              <div class="w-4/5 flex justify-center sm:justify-end h-full">
                <div class="w-11/12 h-52">
                  <img src="${imagem}" class="w-full h-full object-cover rounded-xl border-4 border-card-linha" alt="">
                </div>
              </div>
              
            </div>
            <div class="w-full flex flex-col items-center justify-center relative pt-5 sm:pt-0">
              <div class="card_shadow_info flex justify-center items-center w-11/12 h-36 sm:w-3/4 sm:h-3/4   rounded-lg">
              <div class ="w-full h-auto text-center ">
                    <h1 class="text-white text-center mt-auto  font-anton text-4xl card_text_shadow_preco  px-5">${nome}</h1>
                    <h3 class="text-dourado font-anton text-4xl card_text_shadow_preco ">R$${preco} </h3>
              </div>
                
              </div>
              <div class="w-3/5 h-full flex justify-center items-center border-b-2 border-b-card-linha absolute top-2 sm:top-0"></div>
            </div>
          </div>
        </div>
    
        <div class="w-full h-auto sm:h-1/2   flex flex-col items-center justify-center" id="area-info">
          <div class="w-11/12  bg-card border-4 border-card-linha rounded-lg mb-2">
            <h1 class="text-4xl text-black font-anton p-2 pl-5 card_text_shadow">DESCRIÇÃO</h1>
          </div>
          <div class="w-11/12 h-full p-5 bg-card border-4 border-card-linha rounded-lg flex  justify-center items-center ">
             <p class="text-2xl text-white text-center font-anton card_text_shadow_preco">${descricao}</p>
          </div>
        </div>
      </div>
  `
  div.querySelector('.close').onclick = function () {
    div.remove()
    document.getElementById('fundo-card').classList.add('hidden')
    document.querySelector('body').classList.remove('overflow-y-hidden')
  }
  window.onclick = function (event) {
    if (event.target.id =='fundo-card'|| event.target.id =='main-card' ) {
      div.remove()
      document.getElementById('fundo-card').classList.add('hidden')
      document.querySelector('body').classList.remove('overflow-y-hidden')
    }
  }

  return div
}




