import {postGenero} from "./filmes.js"


const btnAddGenero = document.getElementById('generos')

async function adicionarGenero(){
    const genero = document.getElementById('new-genero').value

    try {
        const novoGenero = {}
        novoGenero.genero = genero
        console.log(novoGenero)
        let GeneroNovo = await postGenero(novoGenero)
        if (GeneroNovo) {
            alert("Gênero adicionado com sucesso!!!")
        }else{
            alert("Algo deu errado")
        }
    } catch (error) {
        console.log(error)
    }

    

}


btnAddGenero.addEventListener('click', adicionarGenero)

async function getGeneros (){
    const url = 'http://localhost:8080/v2/FilmesACME/generos'
    const response = await fetch(url)
    const data = await response.json()
    
    return data.filmes

}


function criarCard (genero){
    const card = document.createElement('div')
    const titulo = document.createElement('h2')
    const lixo = document.createElement('img')
    lixo.src = '../img/lixo.png'
    
    lixo.addEventListener('click',()=>{
        deleteGenero(genero.id)
       getGeneros()
    })

    titulo.textContent = genero.genero
    card.classList.add('bg-card','h-[20vh]', 'w-[40vw]', 'flex', 'justify-between', 'rounded-md')
    lixo.classList.add('h-[4vh]', 'w-[3vw]')
    card.append(titulo,lixo)
    return card

}

async function preencherContainer() {

    const container = document.getElementById('generos')
    const generos = await getGeneros()
    console.log(generos)
    generos.forEach(genero => {
        const card = criarCard(genero)
        container.appendChild(card)
    });

}

preencherContainer()

async function deleteGenero(genero){

    const url = `http://localhost:8080/v2/FilmesACME/genero/${genero}`
    console.log(genero)
    const options = {
        method: 'DELETE',
      
    }
    const response = await fetch(url, options)

    return response.ok

}