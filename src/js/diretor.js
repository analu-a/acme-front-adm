import {postAtor} from "./filmes.js"

const btnAddDiretor = document.getElementById('cadastrar')

async function adicionarDiretor(){
    

    const nome = document.getElementById('nome').value
    const falecimento = document.getElementById('falecimento').value
    const pais = document.getElementById('pais').value
    const irmaos = document.getElementById('irmaos').value
    const nascimento = document.getElementById('nascimento').value
    const foto = document.getElementById('foto').value

    try {
        const novoDiretor = {}
        novoFilme.nome = nome
        novoFilme.falecimento = falecimento
        novoFilme.pais = pais
        novoFilme.irmaos = irmaos
        novoFilme.nascimento = nascimento
        novoFilme.foto = foto
        console.log(novoDiretor)
        let diretorNovo = await postFilme(novoDiretor)
        if (diretorNovo) {
            alert("Diretor cadastrado com sucesso!!!")
        }else{
            alert("Algo deu errado")
        }
    } catch (error) {
        console.log(error)
    }

}


btnAddAtor.addEventListener('click', adicionarDiretor)

async function getDiretores (){
    const url = 'http://localhost:8080/v2/FilmesACME/diretores'
    const response = await fetch(url)
    const data = await response.json()
    
    return data.filmes

}

function criarCard (diretor){
    const card = document.createElement('div')
    const nome = document.createElement('h2')
    const lixo = document.createElement('img')
    lixo.src = '../img/lixo.png'

    nome.textContent = diretor.nome
    card.classList.add('bg-card','h-[20vh]', 'w-[40vw]', 'flex', 'justify-between', 'rounded-md')
    lixo.classList.add('h-[4vh]', 'w-[3vw]')
    card.append(nome,lixo)
    return card

}

async function preencherContainer() {

    const container = document.getElementById('card')
    const diretores = await getDiretores()
    console.log(diretores)
    diretores.forEach(ator => {
        const card = criarCard(diretores)
        container.appendChild(card)
    });

}

preencherContainer()