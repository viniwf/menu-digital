let rodizio = document.getElementById('rodizio')
let tradicionais = document.getElementById('tradicionais')
let especiais = document.getElementById('especiais')
let coqueteis = document.getElementById('coqueteis')
let premium = document.getElementById('premium')
let doces = document.getElementById('doces')
let semAlcool = document.getElementById('semAlcool')
let cervejas = document.getElementById('cervejas')
fetch("db.json")
    .then(res => res.json()).then(
        res => {
            res.RodizioPizza.map(
                data => {
                    rodizio.append(criarDivEntradas(data.id, data.nome, data.valor, data.descricao, data.logo, data.imgs, 'principal'))
                }
            )
            res.PizzasTradicionais.map(
                data => {
                    tradicionais.append(criarDivEntradas(data.id, data.nome, data.valor, data.descricao, data.logo, data.imgs))
                }
            )
            res.PizzasEspeciais.map(
                data => {
                    especiais.append(criarDivEntradas(data.id, data.nome, data.valor, data.descricao, data.logo, data.imgs))
                }
            )
            res.PizzasPremium.map(
                data => {
                    premium.append(criarDivEntradas(data.id, data.nome, data.valor, data.descricao, data.logo, data.imgs))
                }
            )
            res.PizzasDoces.map(
                data => {
                    doces.append(criarDivEntradas(data.id, data.nome, data.valor, data.descricao, data.logo, data.imgs))
                }
            )
            res.SemAlcool.map(
                data => {
                    semAlcool.append(criarDivEntradas(data.id, data.nome, data.valor, data.descricao, data.logo, data.imgs))
                }
            )
            res.Cervejas.map(
                data => {
                    cervejas.append(criarDivEntradas(data.id, data.nome, data.valor, data.descricao, data.logo, data.imgs))
                }
            )
            res.Coqueteis.map(
                data => {
                    coqueteis.append(criarDivEntradas(data.id, data.nome, data.valor, data.descricao, data.logo, data.imgs))
                }
            )
        }
    )
function criarDivEntradas(id, nome, valor, descricao, logo, imgs, principal) {
    let div = document.createElement('div')
    div.classList.add('flex', 'flex-col', 'justify-between', 'h-max')
    div.id = id
    div.innerHTML = `
      <div class=" flex flex-col  justify-between h-max ">
                    <div class="my-5 flex w-full ">
                        <div class="flex-col w-full justify-center sm:justify-between items-center">
                            <h2 class="font-oswald text-white ml-2 sm:ml-4 text-lg sm:text-2xl">${nome} </h2>
                            <h2 class="font-oswald text-white ml-2 sm:hidden flex items-center text-md sm:text-2xl sm:ml-4 sm:mx-20">R$${valor}  </h2>
                            <h4 class="font-barlow text-white ml-2 sm:ml-4 text-md sm:text-xl">
                            ${descricao}
                            </h4>
                        </div>
                        <div class="w-2/5 sm:w-full flex justify-center sm:justify-end items-center">
                            <div class="flex items-center justify-between w-full">
                                <h2 class="font-oswald text-white sm:flex items-center text-md sm:text-2xl ml-auto  hidden md:block">R$${valor} </h2>
                                <img src="${logo}" alt="" class="w-14 h-14 mx-auto sm:mx-auto  sm:w-20 sm:h-20 object-scale-down ">
                            </div>
                        </div>
                    </div>
            
    `
     if (id == 1 && principal ) {
         div.classList.add('sm:px-10', 'border-2','border-white', 'rounded-lg', 'relative', 'z-10' )
         div.id = 'principal' + id
         div.innerHTML += `
              <div class="w-full h-1/2 flex justify-center relative " >
                 <img src="pizzaria/icones/estilos/clique.png" class=" w-10 sm:w-20 h-auto absolute  left-85 sm:left-85 top-60 sm:top-100  animate-fadeInPointer" id="elemento2"  alt="">
             </div>
         `
     }
    div.style.cursor = 'pointer'
    div.addEventListener('click', (ev) => {
        document.querySelector('body').append(criarCardFlutuante(nome, imgs))
    })
    return div
}
function criarCardFlutuante(nome, imagem) {
    let section = document.createElement('section')
    section.classList.add('modal', 'relative', 'z-10')
    section.innerHTML = `
      <main class="modal-content  h-auto flex flex-col justify-between bg-white border-b-2">
            <div class="border-b-2 border-b-white w-full relative mb-10">
                <div class="w-full text-end">
                    <span class="close w-100 d-flex justify-content-end ">&times;</span>
                </div>
               <div class="absolute flex justify-center top-7 w-full">
                <span class="font-brittany px-2 bg-black text-xl sm:text-3xl text-white">
                    ${nome}
                </span>
               </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-32 relative border-b-2 border-b-white py-4">
                <div class="w-full  h-72 sm:h-113  flex flex-col  justify-center items-center sm:justify-start sm:items-start">
                    <div class="w-full h-72">
                        <img src="${imagem[0]}" class="w-full h-full object-cover"  alt="">
                    </div>
                    <img src="pizzaria/icones/estilos/linha_italia.webp" class=" w-56 mt-2 sm:mt-10 " alt="">
                </div>
                <div class="grid grid-cols-2 gap-4 sm:gap-0 sm:grid-cols-1 h-auto ">
                    <div class=" w-full sm:absolute flex justify-between  flex-col left-30 md:left-28 lg:left-30  top-16 ">
                        <img src="${imagem[1]}" class="w-full h-44 sm:w-56 sm:h-56 object-cover sm:order-2 " alt="">
                        <div class="w-auto  sm:w-56 flex justify-center sm:justify-end sm:mb-16 sm:ml-1">
                            <img src="pizzaria/icones/estilos/italia.webp" class="sm:w-28 w-24 " alt="">
                        </div>
                    </div>
                    <div class="w-full h-72 sm:w-full sm:h-113 bg-white ">
                        <img src="${imagem[2]}" class="w-full h-full object-cover"   alt="">
                    </div>
                </div>
            </div>
        </main>
    `
    document.querySelector('body').append(section)
    section.querySelector('.close').onclick = function () {
        section.remove()
        if(animacao.style.display !== 'none'){
            displayNone()
        }
    }
    window.onclick = function (event) {
        if (event.target == section || event.target.classList.contains('modal')) {
            section.remove()
            if(animacao.style.display !== 'none'){
                displayNone()
            }
        }
    }
    return section
}
 let animacao = document.getElementById('animacao')
 document.addEventListener('DOMContentLoaded', (ev) => {
    
     
     setTimeout(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
          });
        animacao.style.display = 'block'
        document.querySelector('body').classList.add('overflow-hidden')
      }, 200);

     animacao.addEventListener('click', (ev) => {
         let evento = ev.target
         if (evento.classList.contains('fechar')) {
            let elemento2 = document.getElementById('elemento2')
            animacao.style.display = 'none'
            elemento2.style.display = 'none'
            document.querySelector('body').classList.remove('overflow-hidden')
            let principal = document.getElementById('principal1')
            principal.classList.remove('border-2','border-white','relative', 'z-10','sm:px-10' )
         }
     })
 })


 function displayNone(){
    let elemento2 = document.getElementById('elemento2')
    animacao.style.display = 'none'
    elemento2.style.display = 'none'
    document.querySelector('body').classList.remove('overflow-hidden')
    let principal = document.getElementById('principal1')
    principal.classList.remove('border-2','border-white','relative', 'z-10','sm:px-10' )
}



