let Entradas = document.getElementById('entradas')
let Rodizio = document.getElementById('rodizio')
let Temaki = document.getElementById('temaki')
let Sushi = document.getElementById('sushi')
let Rools = document.getElementById('rolls')
let Quentes = document.getElementById('quentes')
let Sobremesas = document.getElementById('sobremesas')
let SemAlcool = document.getElementById('sem-alcool')
let Alcool = document.getElementById('alcool')

fetch('db.json').then(res => res.json()).then(res => {
    res.rodizio.map(data => {
        Rodizio.append(criaDiv(data.nome, data.valor, data.descricao, data.logo, data.img))
    })
    res.entradas.map(data => {
        Entradas.append(criaDiv(data.nome, data.valor, data.descricao, data.logo, data.img))
    })
    res.temaki.map(data => {
        Temaki.append(criaDiv(data.nome, data.valor, data.descricao, data.logo, data.img))
    })
    res.sushi_sashimi.map(data => {
        Sushi.append(criaDiv(data.nome, data.valor, data.descricao, data.logo, data.img))
    })
    res.rolls.map(data => {
        Rools.append(criaDiv(data.nome, data.valor, data.descricao, data.logo, data.img))
    })
    res.pratos_quentes.map(data => {
        Quentes.append(criaDiv(data.nome, data.valor, data.descricao, data.logo, data.img))
    })
    res.sobremesas.map(data => {
        Sobremesas.append(criaDiv(data.nome, data.valor, data.descricao, data.logo, data.img))
    })
    res.sem_alcool.map(data => {
        SemAlcool.append(criaDiv(data.nome, data.valor, data.descricao, data.logo, data.img))
    })
    res.com_alcool.map(data => {
        Alcool.append(criaDiv(data.nome, data.valor, data.descricao, data.logo, data.img))
    })
})

function criaDiv(nome, valor, descricao, logo, img) {
    let div = document.createElement('div')
    div.classList.add('w-full', 'py-10', 'grid', 'grid-cols-2', 'border-t-2', 'border-t-laranja', 'cursor-pointer', 'flex', 'justify-center', 'items-center')
    div.innerHTML = `
    <div class="w-full ">
        <h3 class="font-oswald mb-1 sm:text-4xl text-white break-worlds">${nome}  </h3>
        <h5 class="font-oswald mb-1 text-sm sm:text-4xl text-white break-worlds">(${descricao})</h5>
        <h4 class="font-oswald text-sm sm:text-3xl text-laranja">R$ ${valor}</h4>
    </div>
    <div class="w-full h-24 flex justify-end  items-center ">
        <img src="${logo}" class="sm:max-w-32 max-w-24 h-full w-full  object-contain" alt="">
    </div>
    `
  div.addEventListener('click', (ev) => {
    document.querySelector('#main-card').append(criarCardFlutuante(nome,valor,img))
  })
  return div
}

function criarCardFlutuante(nome,valor,img){
    document.getElementById('fundo-card').classList.remove('hidden')
    document.getElementById('info').classList.add('hidden')
    document.getElementById('clique').classList.add('hidden')
    document.getElementById('main-card').classList.remove('hidden')
    document.getElementById('fundo-card').classList.add('card-f-fundo')
    document.getElementById('rodizio').classList.remove( 'relative', 'z-10', 'border-2', 'border-laranja', 'p-5', 'rounded-xl')
   
    let div = document.createElement('div')
    div.classList.add('w-11/12', 'border-2','border-laranja','h-4/5','pb-10')
    div.innerHTML=`
         <div class="w-full text-end absolute top-4 right-2 sm:right-10">
                    <span class="close cursor-pointer text-laranja text-4xl">&times;</span>
                </div>
                <div class="flex">
                    <div class=" absolute left-0 top-28 sm:top-0 z-20">
                         <img src="japones/icones/estilos/card/arvore_balao.webp" class="w-40 sm:w-72 transform -scale-x-100" alt="">
                    </div>
                    <div class="w-full text-center flex justify-center relative">
                        <div class="w-auto max-w-44 sm:max-w-full text-center relative -top-8 sm:-top-10 ">
                            <h1 class="font-aloja text-3xl sm:text-6xl  text-laranja  px-5 bg-black">JAPANTSO</h1>
                            <h3 class="font-oswald text-2xl sm:text-4xl text-white">${nome}</h3>
                        </div>
                        <img src="japones/icones/estilos/card/lanternas.webp" class="absolute top-0 w-14 sm:w-36 sm:pr-10 sm:pt-10 right-0" alt="">
                    </div>
                </div>
                <div class="w-full h-1/2 sm:h-3/4 flex justify-center items-center relative top-10 sm:-top-5">
                    <div class=" w-11/12 sm:w-2/3 border-4 h-full  p-2 sm:p-4 relative ">
                        <img src="${img}" class="w-full h-full object-cover" alt="">
                        <img src="japones/icones/estilos/card/carimbo.webp" class="w-14 sm:w-20 absolute right-2 -bottom-10 sm:-right-20 z-10 sm:bottom-4" alt="">
                        <img src="japones/icones/estilos/card/selo.webp" class="w-12 sm:w-20 absolute  -right-4 -bottom-5 sm:-right-10 sm:bottom-0" alt="">
                        <h1 class="text-shadow w-full font-oswald  text-center sm:text-left   pt-10 sm:p-0  sm:absolute sm:-bottom-6 sm:-left-14">
                            R$${valor}
                        </h1>
                    </div>
                </div>
    `
    document.addEventListener('click', (ev)=>{
        if(ev.target.id == 'fundo-card'|| ev.target.classList.contains('close')){
            div.remove()
            document.getElementById('main-card').classList.add('hidden')
            document.getElementById('info').classList.add('hidden')
            document.getElementById('clique').classList.add('hidden')
            document.getElementById('fundo-card').classList.add('hidden')
            document.getElementById('fundo-card').classList.remove('card-f-fundo')
            document.querySelector('body').classList.remove('overflow-y-hidden')
        }
    })
    return div
}



document.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        document.querySelector('body').classList.add('overflow-y-hidden')
    },100)
    document.getElementById('fundo-card').classList.add('card-f-fundo')
    
})