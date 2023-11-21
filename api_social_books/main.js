const livroId = document.querySelector('input[type=text]')
const btnBuscar = document.querySelector('input[type=button]')
btnBuscar.onclick = function(){
    //Fazendo a conexão com a API
    fetch('http:localhost:8080/livros/' + livroId.value)
    .then(response => {
        if(response.ok){
            return response.json()
        }
        else {
            throw new Error('Erro na requisição.')
        }
    })
    .then(data => {
        document.querySelector('#idLivro').textContent = data.id
        document.querySelector('#nome').textContent = data.nome
        document.querySelector('#autor').textContent = data.autor
        document.querySelector('#editora').textContent = data.editora
        document.querySelector('#resumo').textContent = data.resumo
        //E outros atribuitos que vc desejar
    })
    .catch(error => {
        console.log('Erro: '+ error)
    })
}