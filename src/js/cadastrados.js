 async function getFilme (id){
    const url = `http://localhost:8080/v2/FilmesACME/filmes/${id}`
    const response = await fetch(url)
    const data = response.json()
    return data.filme

}

 async function getFilmes (){
    const url = 'http://localhost:8080/v2/FilmesACME/filmes'
    const response = await fetch(url)
    const data = await response.json()
    
    return data.filmes

}


function criarCard (filme){
    const card = document.createElement('div')
    const titulo = document.createElement('h2')
    const lixo = document.createElement('img')
    lixo.src = '../img/lixo.png'
    
    lixo.addEventListener('click',()=>{
        deleteFilme(filme.id)
       getFilme()
    })

    titulo.textContent = filme.nome
    card.classList.add('bg-card','h-[20vh]', 'w-[40vw]', 'flex', 'justify-between', 'rounded-md')
    lixo.classList.add('h-[4vh]', 'w-[3vw]')
    card.append(titulo,lixo)
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



 async function deleteFilme(filme){

    const url = `http://localhost:8080/v2/FilmesACME/filme/${filme}`
    console.log(filme)
    const options = {
        method: 'DELETE',
      
    }
    const response = await fetch(url, options)

    return response.ok

}

// const deletar = document.getElementById('lixinho')
