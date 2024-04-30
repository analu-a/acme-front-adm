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