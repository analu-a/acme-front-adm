
import { getFilme, getFilmes,postFilme, putFilme, deleteFilme } from '../js/filmes.js'

function criarCard (filme){
    const card = document.createElement('div')
    const icons = document.createElement('div')

    const titulo = document.createElement('h2')
    const lixo = document.createElement('img')
    const editar = document.createElement('img')
    editar.src = '../img/edite.png'
    lixo.src = '../img/lixo.png'
    
    lixo.addEventListener('click',()=>{
        deleteFilme(filme.id)
       getFilme()
    })

    editar.addEventListener('click',()=>{
        localStorage.setItem('idFilme', filme.id)
        window.location.href='../html-pages/editar.html'
    })

    titulo.textContent = filme.nome
    card.classList.add('bg-card','h-[20vh]', 'w-[40vw]', 'flex', 'rounded-md', 'justify-between') 
    icons.classList.add('bg-card','h-[20vh]', 'w-[10vw]', 'flex', 'justify-between', 'rounded-md')

    lixo.classList.add('h-[4vh]', 'w-[3vw]')
    editar.classList.add('h-[4vh]', 'w-[3vw]')
        icons.append(lixo,editar)

    card.append(titulo,icons)
    return card

}

async function preencherContainer() {

    const container = document.getElementById('card')
    const filmes = await getFilmes()
    console.log(filmes)
    filmes.forEach(filme => {
        const card = criarCard(filme)
        container.appendChild(card)
    });

}

preencherContainer()





// const deletar = document.getElementById('lixinho')
