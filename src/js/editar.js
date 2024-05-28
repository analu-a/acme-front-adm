'use strict'

const idFilme = localStorage.getItem('idFilme')

import { getFilme, getFilmes,postFilme, putFilme, deleteFilme } from '../js/filmes.js'

const TodososCampos = document.getElementById('editar')

const btnEditar =document.getElementById('criar')

infoFilme(idFilme)
async function infoFilme(idFilme) {
const filmeNaoEditado = await getFilme(idFilme)
  console.log(filmeNaoEditado)
  
  const nome = document.getElementById('nome')
  nome.value=filmeNaoEditado.nome
  const sinopse = document.getElementById('sinopse')
  sinopse.value=filmeNaoEditado.sinopse
  const duracao = document.getElementById('duracao')
  duracao.value=filmeNaoEditado.duracao.substring(11, 19)
  const data_lancamento = document.getElementById('data_lancamento')
data_lancamento.value = filmeNaoEditado.data_lancamento.substring(0, 10)    
  const data_relancamento = document.getElementById('data_relancamento')
  if (filmeNaoEditado.data_relancamento) {
    data_relancamento.value = filmeNaoEditado.data_lancamento
  }
  const foto_capa = document.getElementById('foto_capa')
  foto_capa.value = filmeNaoEditado.foto_capa
  const valor_unitario = document.getElementById('valor_unitario')
  valor_unitario.value=filmeNaoEditado.valor_unitario.toFixed(2)

}

console.log(idFilme);

btnEditar.addEventListener('click', ()=> editarFilme(idFilme))
async function editarFilme(id) {
  const nome = document.getElementById('nome').value
  const sinopse = document.getElementById('sinopse').value
  const duracao = document.getElementById('duracao').value
  const data_lancamento = document.getElementById('data_lancamento').value
  const data_relancamento = document.getElementById('data_relancamento').value
  const foto_capa = document.getElementById('foto_capa').value
  const valor_unitario = document.getElementById('valor_unitario').value
 
try {
    const novosDados = {}
    novosDados.nome = nome
    novosDados.sinopse = sinopse
    novosDados.duracao = duracao
    novosDados.data_lancamento = data_lancamento
    novosDados.data_relancamento = data_relancamento
    novosDados.foto_capa = foto_capa
    novosDados.valor_unitario = valor_unitario
    console.log(novosDados)
    let filmeEditado = await putFilme(novosDados,idFilme)
    if (filmeEditado) {
        alert("Filme editado com sucesso!!!")
        window.location.href='../html-pages/cadastrados.html'
    }else{
        alert("Algo deu errado")
    }
} catch (error) {
    console.log(error)
}

}
//   if (novosDados) {
//     let status=putFilme(novosDados,id)
//     if (status) {
//       alert('Item Editado com sucesso')
//       window.location.href = './home.html'
//       console.log(novosDados)
//     }
//     else{
//       alert('Não foi possivel criar o item')
//       window.location.href = './home.html'
//     }
// }
// }
// function fecharcampoEdicao() {
//     window.location.href = './home.html'
// }
// const fecharCampo = document.getElementById('fecharcampoEdicao')
// fecharCampo.addEventListener('click', fecharcampoEdicao)
