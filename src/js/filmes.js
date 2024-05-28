export async function postFilme(novoFilme){
    const url = 'http://localhost:8080/v2/FilmesACME/filme'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoFilme)
    }
    const response = await fetch(url, options)

    return response.ok
}



export async function postGenero(novoGenero){
    const url = 'http://localhost:8080/v2/FilmesACME/genero'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoGenero)
    }
    const response = await fetch(url, options)

    return response.ok
}

export async function getFilme (id){
        const url = `http://localhost:8080/v2/FilmesACME/filme/${id}`
        const response = await fetch(url)
        const data = await response.json()

        return data.filme[0]


}

export async function getFilmes (){
    const url = 'http://localhost:8080/v2/FilmesACME/filmes'
    const response = await fetch(url)
    const data = await response.json()
    
    return data.filmes

}

export async function deleteFilme(filme){

    const url = `http://localhost:8080/v2/FilmesACME/filme/${filme}`
    console.log(filme)
    const options = {
        method: 'DELETE',
      
    }
    const response = await fetch(url, options)

    return response.ok

}

export async function putFilme(filme,id) {
    console.log(id);
    const url=`http://localhost:8080/V2/FilmesACME/filme/${id}`
    const options={
        method:'PUT',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(filme)
    }
    console.log(filme);
    const response=await fetch(url,options)
    console.log(response);
    console.log(response.ok);
    return response.ok
}